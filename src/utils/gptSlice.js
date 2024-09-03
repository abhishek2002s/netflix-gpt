import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name : "gpt",
    initialState :{
        showGptSearch : false,
       moiveResult : null,
       gptName : null,

    },
    reducers:{
        toggleGptSearchView : (state,action) => {
                 state.showGptSearch =  !state.showGptSearch;
        },
        addGptResult : (state,action) => {
            const {gptName,moiveResult} =action.payload;
        state.gptName = gptName;
        state.moiveResult = moiveResult;
        }
    }
});


export const {toggleGptSearchView, addGptResult} = gptSlice.actions;
export default gptSlice.reducer;