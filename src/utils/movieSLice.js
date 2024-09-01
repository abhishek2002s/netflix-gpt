import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name : "movies",
    initialState : {
        nowPlayingMovies : null,
        popularMovies : null,
        trendingMovies : null,
        upComingMovies : null,
        horrorMovies : null,
        fantasyMovies : null,
        romanceMovies : null,
        warMovies : null,
        trailerVideo : null,
    },
    reducers : {
        addNowPlayingMovies : (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies : (state, action) => {
            state.popularMovies = action.payload;
        },
        addTrendingMovies : (state, action) => {
            state.trendingMovies = action.payload;
        },
        addUpComingMovies : (state, action) => {
            state.upComingMovies = action.payload;
        },
        addHorrorMovies : (state, action) => {
            state.horrorMovies = action.payload;
        },
        addRomanceMovies : (state, action) => {
            state.romanceMovies = action.payload;
        },
        addFantasyMovies : (state, action) => {
            state.fantasyMovies = action.payload;
        },
        addWarMovies : (state, action) => {
            state.warMovies = action.payload;
        },
        addTrailerVideo : (state,action) => {
               state.trailerVideo = action.payload;
        }
    }
    
});

export const {addNowPlayingMovies, addTrailerVideo,addPopularMovies, addTrendingMovies,  addUpComingMovies, addHorrorMovies, addRomanceMovies, addFantasyMovies, addWarMovies} = movieSlice.actions;

export default movieSlice.reducer;