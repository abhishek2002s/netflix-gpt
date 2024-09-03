export const  BG_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/1d29f9a4-1900-43dc-a420-99044f734ee2/cc3b7bcb-3f79-449e-a37c-26ffb20fce3c/IN-en-20240826-POP_SIGNUP_TWO_WEEKS-perspective_WEB_7a193436-88c7-4f66-a8f0-e191d3b26d13_large.jpg";
export const LOGO_URL = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const user_Avatar = "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg";

export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_KEY,
    },
  };
  
  export const IMG_CDN = "https://image.tmdb.org/t/p/w780"
 export const  API_CODE = process.env.REACT_APP_API_CODE;


 export const SUPPORTED_LANGUGES = [
  {identifier : "en", name:"English"},
  {identifier : "hindi", name:"Hindi"}, 
  {identifier : "spanish", name:"Spanish"}
];

