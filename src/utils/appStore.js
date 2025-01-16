import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./moviesSlice";
import searchReducer from "./searchSlice";
import configReducer from "./configSlice";

const appStore = configureStore({
    reducer:{
        user: userReducer,
        movies: movieReducer,
        search: searchReducer,
        config: configReducer
    }
})

export default appStore;
