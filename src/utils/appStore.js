import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../utils/userSlice";
import movieReducer from "../utils/moviesSlice";

const appStore = configureStore({
    reducer:{
        user: userReducer,
        movies: movieReducer
    }
})

export default appStore;
