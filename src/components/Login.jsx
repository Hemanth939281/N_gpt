import { useEffect, useRef, useState } from "react";
import { auth } from "../utils/firebase";
import { validateFormFields } from "../utils/validateFormFields";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile,} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice.js";
import { useNavigate } from "react-router-dom";
import { BG_IMAGE, LOGO_URL, USER_AVATAR } from "../utils/constant.js";

const Login = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const [isSignInForm, setisSignInForm] = useState(true);
  const [errorMessage, seterrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      navigate("/browse");
    }
  }, [user, navigate]);

  const validateForm = async () => {
    const message = validateFormFields(
      email.current.value,
      password.current.value
    );
    seterrorMessage(message);
    if (message) return;
    if (!isSignInForm) {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        );
        await updateProfile(userCredential.user, {
          displayName: name.current?.value || "",
          photoURL: USER_AVATAR,
        });
        dispatch(
          addUser({
            uid: userCredential.user.uid,
            email: userCredential.user.email,
            displayName: userCredential.user.displayName,
            photoURL: userCredential.user.photoURL,
          })
        );
        navigate("/browse");
      } catch (error) {
        seterrorMessage("Error signing up. Please try again later.");
      }
    } else {
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        );
        dispatch(
          addUser({
            uid: userCredential.user.uid,
            email: userCredential.user.email,
            displayName: userCredential.user.displayName,
            photoURL: userCredential.user.photoURL,
          })
        );
        navigate("/browse");
      } catch (error) {
        console.error(error);
        seterrorMessage(
          "Error signing in. Please check your email and password."
        );
      }
    }
  };

  const toggleSignInForm = () => {
    setisSignInForm(!isSignInForm);
  };

  return (
    <div>
      <div className="relative w-screen h-screen">
        {/* Netflix logo */}
        <img
          className="z-50 absolute w-32 sm:w-44 bg-gradient-to-b from-black"
          src={LOGO_URL}
          alt="netflix logo"
        />
        {/* Background image */}
        <div
          className={`absolute w-full h-full bg-[url('${BG_IMAGE}')] bg-cover bg-center`}
        ></div>
        {/* Background overlay */}
        <div className="absolute w-full h-full bg-gradient-to-b from-black/50 to-black/70"></div>
      </div>

      {/* SignIn / SignUp form */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/60 p-6 sm:p-12 rounded-md w-[90%] sm:w-full max-w-md">
        <form
          method="get"
          className="flex flex-col items-center gap-4 sm:gap-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <h1 className="text-red-600 font-bold text-2xl sm:text-3xl mb-4 sm:mb-6">
            Sign {isSignInForm ? "In" : "Up"}
          </h1>
          {!isSignInForm && (
            <input
              ref={name}
              type="name"
              name="name"
              id="name"
              placeholder="Full Name"
              className="h-12 block w-full p-3 sm:p-4 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300"
            />
          )}
          <input
            ref={email}
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
            className="h-12 block w-full p-3 sm:p-4 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300"
          />
          <input
            ref={password}
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="h-12 block w-full p-3 sm:p-4 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300"
          />
          <p className="text-red-500 text-sm font-bold">{errorMessage}</p>
          <button
            className="block w-full bg-red-600 hover:bg-red-500 text-white font-bold p-2 sm:p-3 rounded-md text-base sm:text-lg cursor-pointer"
            onClick={validateForm}
          >
            Sign {isSignInForm ? "In" : "Up"}
          </button>
          <p
            className="text-white cursor-pointer text-sm sm:text-base"
            onClick={toggleSignInForm}
          >
            {isSignInForm
              ? "New to Netflix? Sign Up Now"
              : "Already registered? Sign In Now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
