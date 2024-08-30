import React from "react";
import { signOut } from "firebase/auth";
import { LOGO_URL } from "../utils/contant-url";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
 const user = useSelector((store) => store.user);
 console.log(user)


  //sign out Authentication
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        // Sign-out successful.
      })
      .catch((error) => {
        navigate("/error");
        // An error happened.
      });
  };

  return (
    <div className=" flex justify-between w-full overflow-x-hidden absolute  z-20 px-12 py-3 bg-gradient-to-b from-black">
      <img src={LOGO_URL} alt="logo" className="h-20"></img>

{user && (
  <div>
      <button
        onClick={handleSignOut}
        className=" font-semibold text-xl text-white py-2 mt-4 px-4   rounded-md  text-center  bg-red-600 "
      >
        Sign Out
      </button>
    </div>
)}
    </div>
  );
};


export default Header;
