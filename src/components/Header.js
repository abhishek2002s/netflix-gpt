import React from "react";
import { signOut } from "firebase/auth";
import { LOGO_URL, SUPPORTED_LANGUGES } from "../utils/contant-url";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguge } from "../utils/configSlce";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
 const user = useSelector((store) => store.user);
const showGptSearch = useSelector(store => store.gpt.showGptSearch);

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



const handleGptSearchClick = () => {
  dispatch(toggleGptSearchView());
}

const handleLanguageChange = (e) => {
        dispatch(changeLanguge(e.target.value));
}

    
  return (
    <div className=" flex justify-between items-center w-full overflow-x-hidden absolute  z-20 md:px-12 md:py-3 px-3 py-2 bg-gradient-to-b from-black">
      <img src={LOGO_URL} alt="logo" className="md:h-24 h-16 w-[90px] md:w-40  md:mx-0"></img>

{user  && (
  <div className="flex justify-center  items-center md:gap-3 lg:gap-3 gap-1">
  { showGptSearch && (
  <select className="md:p-2 opacity-0 md:opacity-100  bg-gray-900 text-white m-2 border border-gray-800" onChange={handleLanguageChange}>
  {SUPPORTED_LANGUGES.map((lang) => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
  </select>
)}

  <button className="text-white px-2 text-[10px] md:px-3   font-semibold bg-gray-500 md:py-2 py-1 md:text-xl rounded-lg" onClick={handleGptSearchClick}> 
   { 
    showGptSearch ?
   "Home Page" : "Movie Search"
   }
   </button>
  
  <img src={user.photoURL} className="md:h-10 md:w-10 h-0 w-0 opacity-0 md:opacity-100 lg:opacity-100 rounded-md"></img>
      <button
        onClick={handleSignOut}
        className=" font-semibold md:text-xl text-[10px] text-white md:py-2 py-1  md:px-4  px-3 rounded-md  text-center  bg-red-600 "
      >
        Sign Out
      </button>
    </div>
)}
    </div>
  );
};


export default Header;
