import { useEffect, useRef, useState } from "react";
import {auth} from '../utils/firebase';
import { validateFormFields } from "../utils/validateFormFields";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import {addUser} from "../utils/userSlice.js";
import { useNavigate} from "react-router-dom";
import { USER_AVATAR } from "../utils/constant.js";

const Login = () => {
  const user = JSON.parse(localStorage.getItem('user'));
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

 

  const validateForm = async() => {
    // validation logic here
    const message = validateFormFields(email.current.value,password.current.value);    
    seterrorMessage(message);
    if(message) return;
    if(!isSignInForm){
        try{
            //sign up logic
        const userCredential = await createUserWithEmailAndPassword(auth, email.current.value, password.current.value);
        console.log(userCredential.user);

        await updateProfile(userCredential.user,{
          displayName: name.current?.value || "", // Safely access name if it's null
          photoURL: USER_AVATAR,
        }); 
        {console.log("user_url:",USER_AVATAR)}
        dispatch(
          addUser({
            uid: userCredential.user.uid,
            email: userCredential.user.email,
            displayName: userCredential.user.displayName,
            photoURL: userCredential.user.photoURL,
          })
        );
        
        navigate("/browse");
        }
        catch(error){
            // console.error(error);
            seterrorMessage('Error signing up. Please try again later.');
        }
    }
    else{
        
        try{
          console.log(password.current.value);
            //sign in logic
            const userCredential = await signInWithEmailAndPassword(auth, email.current.value, password.current.value);
            console.log(userCredential.user);
            dispatch(
              addUser({
                uid: userCredential.user.uid,
                email: userCredential.user.email,
                displayName: userCredential.user.displayName,
                photoURL: userCredential.user.photoURL,
              })
            );

            navigate("/browse");
        }
        catch(error){
            console.error(error);
            seterrorMessage('Error signing in. Please check your email and password.');
        }
    }
    
  };

  const toggleSignInForm = () => {
    setisSignInForm(!isSignInForm);
  };
  return (
    <div>
      <div className="relative w-screen h-screen">
        {/* netflix logo */}
        <img
          className="z-50 absolute w-44 bg-gradient-to-b from-black"
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="netflix logo"
        />
        {/* background image */}
        <div className="absolute w-full h-full bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/154a9550-ce07-4e28-819c-63185dd849f8/web/IN-en-20250106-TRIFECTA-perspective_27b02e7c-f668-4639-9e82-1a5485084b2a_large.jpg')] bg-center bg-cover"></div>
        {/* background overlay */}
        <div className="absolute w-full h-full bg-gradient-to-b from-black/50 to-black/70"></div>
      </div>

      {/* SignIn / SignUp form */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/60 p-16 rounded-md w-full max-w-md">
        <form
        method="get"
          className="flex flex-col items-center gap-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <h1 className="text-red font-bold text-white text-3xl mb-6">
            Sign {isSignInForm ? "In" : "Up"}
          </h1>
          {!isSignInForm && (
            <input
              ref={name}
              type="name"
              name="name"
              id="name"
              placeholder="Full Name"
              className="h-12 block w-full p-4 bg-gray-700 text-white focus:border-none focus:outline-none focus:ring-2 focus:ring-green-500 transform transition-all duration-300"
            />
          )}
          <input
            ref={email}
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
            className="h-12 block w-full p-4 bg-gray-700 text-white focus:border-none focus:outline-none focus:ring-2 focus:ring-green-500 transform transition-all duration-300"
          />
          <input
            ref={password}
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="h-12 block w-full p-4 bg-gray-700 text-white focus:border-none focus:outline-none focus:ring-2 focus:ring-green-500 transform transition-all duration-300"
          />

            <p className="text-red-500 text-sm font-bold">{errorMessage}</p>

          <button
            className="block w-full bg-red-600 hover:bg-red-500 text-white font-bold p-2 rounded-md text-lg cursor-pointer"
            onClick={validateForm}
          >
            Sign {isSignInForm ? "In" : "Up"}
          </button>
          <p className="text-white cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm
              ? "New to Netflix ? Sign Up Now"
              : "Already registered ? Sign In Now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
