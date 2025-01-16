import { createSlice } from "@reduxjs/toolkit";

const config = createSlice({
    name: "config",
    initialState: {
        lang: "en",
        headerBgColor: "via-black"
    },
    reducers: {
        changeLanguage: (state, action) => {
            state.lang = action.payload;
        },
        headerBgColor: (state, action) => {
            state.headerBgColor = action.payload;
        }
    }
})

export const { changeLanguage, headerBgColor } = config.actions;
export default config.reducer;