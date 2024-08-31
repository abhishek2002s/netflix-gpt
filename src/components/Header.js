import React from "react";
import { signOut } from "firebase/auth";
import { LOGO_URL } from "../utils/contant-url";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { removeUser } from "../utils/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
 const user = useSelector((store) => store.user);


  //sign out Authentication
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        navigate("/error");
        // An error happened.
      });
  };

  useEffect(() => {
      
   const unsubscribe =  onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName, photoURL} = user;
        dispatch(addUser({
          uid : uid, 
          email : email, 
          displayName: displayName,
          photoURL : photoURL

        })
      );
      navigate("/browse");
      } 
      
      else {
        // User is signed out
        dispatch(removeUser());
        navigate("/")
      }
    })
    //unsubscribe when component unmount 
    return () => unsubscribe();
  },[]);


  return (
    <div className=" flex justify-between w-full overflow-x-hidden absolute  z-20 px-12 py-3 bg-gradient-to-b from-black">
      <img src={LOGO_URL} alt="logo" className="h-20"></img>

{user  && (
  <div className="flex justify-center items-center gap-3">
  <img src={user.photoURL} className="h-10 w-10 rounded-md"></img>
      <button
        onClick={handleSignOut}
        className=" font-semibold text-xl text-white py-2  px-4   rounded-md  text-center  bg-red-600 "
      >
        Sign Out
      </button>
    </div>
)}
    </div>
  );
};


export default Header;
