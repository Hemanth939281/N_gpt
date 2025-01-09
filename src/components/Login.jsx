import { useState } from "react";
const Login = () => {

    const [isSignInForm, setisSignInForm] = useState(true)
    const toggleSignInForm = () => {
        setisSignInForm(!isSignInForm);
    }
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/60 p-16 rounded-md w-full max-w-md">
        <form action="" className="flex flex-col items-center gap-6">
            <h1 className="text-red font-bold text-white text-3xl mb-6">Sign {isSignInForm ? "In" : "Up"}</h1>
        {!isSignInForm && 
        (
            <input type="name" name="name" id="name" placeholder="Full Name" className="h-12 block w-full p-4 bg-gray-700 text-white focus:border-none focus:outline-none focus:ring-2 focus:ring-green-500 transform transition-all duration-300" />

        )}
            <input type="email" name="email" id="email" placeholder="Email Address" className="h-12 block w-full p-4 bg-gray-700 text-white focus:border-none focus:outline-none focus:ring-2 focus:ring-green-500 transform transition-all duration-300" />
            <input type="password" name="password" id="password" placeholder="Password" className="h-12 block w-full p-4 bg-gray-700 text-white focus:border-none focus:outline-none focus:ring-2 focus:ring-green-500 transform transition-all duration-300" />
            <button className="block w-full bg-red-600 hover:bg-red-500 text-white font-bold p-2 rounded-md text-lg cursor-pointer" >Sign {isSignInForm ? "In" : "Up"}</button>
            <p className="text-white cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix ? Sign Up Now" : "Already registered ? Sign In Now"}</p>
        </form>
    </div>
  )
}

export default Login