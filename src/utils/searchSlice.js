import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name:"search",
    initialState:{
        showSearch: false,
        searchResults:null
    },
    reducers: {
        toggleSearchView: (state) => {
             state.showSearch = !state.showSearch
        },
        setSearchResults: (state, action) => {
            state.searchResults = action.payload
        }
    }
})

export const {toggleSearchView, setSearchResults} =  searchSlice.actions;
export default searchSlice.reducer;