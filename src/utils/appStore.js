import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import  movieReducer from "./movieSLice";
import gptReducer from "./gptSlice"
import configReducer from "./configSlce";


const appStore = configureStore({
    reducer : {
        user : userReducer,
        movies : movieReducer,
        gpt : gptReducer,
        config : configReducer,
    },
});

export default appStore; 