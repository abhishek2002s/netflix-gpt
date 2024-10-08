import React, { useRef, useState } from "react";
import Header from "./Header";
import { BG_URL, user_Avatar } from "../utils/contant-url";
import { checkValidData } from "../utils/Validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSingInFrom, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    //validation of the form
    let msg;

    //for name validation**************
    {
      isSingInFrom
        ? (msg = checkValidData(email.current.value, password.current.value))
        : (msg = checkValidData(
            email.current.value,
            password.current.value,
            name.current.value
          ));
      setErrorMessage(msg);
    }
    //if any error msg is generate then retturn
    if (msg) return;
    //Sign In Sign logic  (Authentication Logic here******)
    if (!isSingInFrom) {
      //signUp Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: user_Avatar,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({ 
                  uid: uid, 
                  email: email, 
                  displayName: displayName,
                  photoURL : photoURL,
                }),
              );
              // ...
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });
          // ...
          // console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      //sign In form
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const SingupForm = () => {
    setIsSignInForm(!isSingInFrom);
    //sign / Sign up
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img className="object-cover h-[984px] md:h-screen lg:h-[800px] " src={BG_URL} alt="bg-img"></img>
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-10/12 py-3 px-10 m-8 mt-[120px] mx-auto left-0 right-0  absolute md:w-6/12 md:py-6 md:px-14 md:m-8 md:mt-[140px] md:mx-auto md:left-0 md:right-0 lg:w-4/12 lg:py-6 lg:px-14 lg:m-8 lg:mt-[60px] lg:mx-auto lg:left-0 lg:right-0   bg-black bg-opacity-85 rounded-md text-white"
      >
        <h1 className="text-3xl font-bold py-4">
          {!isSingInFrom ? "Sign Up" : "Sign In"}
        </h1>
        {!isSingInFrom && (
          <input
            type="text"
            ref={name}
            placeholder="Enter Full Name"
            className="p-3 my-4 w-full  bg-black border rounded-md border-gray-600"
          ></input>
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email or mobile number"
          className="p-3 my-4 w-full  bg-black border rounded-md border-gray-600"
        ></input>
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-3 my-4 w-full  border rounded-md bg-black  border-gray-300"
        ></input>
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        <button
          className="text-xl font-bold p-2 my-3 text-center w-full rounded-md bg-red-600 "
          onClick={handleButtonClick}
        >
          {!isSingInFrom ? "Sign Up" : "Sign In"}
        </button>
        <h4 className="text-center uppercase m-3 font-normal">Or</h4>
        <button className="text-xl font-medium p-2 my-2 text-center w-full rounded-md   bg-gray-400 bg-opacity-35 ">
          Use a sign-in code
        </button>
        <h4 className="text-center  m-3 font-normal text-base">
          Forgot password?
        </h4>
        <input type="checkbox" className="my-4 mr-2"></input>
        <label className="font-base text-lg">Remember me</label>
        {isSingInFrom ? (
          <div className="my-2 text-lg text-gray-500">
            New to Netflix?{" "}
            <span
              className="font-bold text-white cursor-pointer"
              onClick={SingupForm}
            >
              Sign up now.
            </span>
          </div>
        ) : (
          <div className="my-2 text-lg text-gray-500">
            ALready resgistered!{" "}
            <span
              className="font-bold text-white cursor-pointer"
              onClick={SingupForm}
            >
              Sign In now.
            </span>
          </div>
        )}
      </form>
    </div>
  );
};

export default Login;
