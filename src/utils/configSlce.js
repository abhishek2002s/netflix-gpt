import { createSlice } from "@reduxjs/toolkit";


const configslice = createSlice({
    name: "config",
    initialState: {
        lang : "en",
    },
    reducers:
    {
          changeLanguge : (state,action) => {
            state.lang  = action.payload;
          }
    }
});

export const {changeLanguge} = configslice.actions;
export default configslice.reducer;