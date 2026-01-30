import { createSlice } from "@reduxjs/toolkit";
import { loadFromStorage, saveToStorage } from "../../services/localStorage";

const userSlice = createSlice({
  name: "user",
  initialState: {
    watchlist: loadFromStorage("watchlist", []),
    favorites: loadFromStorage("favorites", []),
  },
  reducers: {
    addToWatchlist: (state, action) => {
            if(action.payload){
       state.watchlist.push(action.payload);
       saveToStorage("watchlist", state.watchlist);
        
    }
    },
    removeFromWatchlist: (state, action) => {
      state.watchlist.forEach((item, index) => {
          if(item === action.payload){
            state.watchlist.splice(index,1);
          }

    })  
    saveToStorage("watchlist", state.watchlist);
    },
    toggleFavorite: (state, action) => {
       console.log("action",action.payload);
      if (action.payload) {
        state.favorites.push(action.payload);
        saveToStorage("favorites", state.favorites);
      } else {
        state.favorites.forEach((item, index) => {
          if (item === action.payload) {
            state.favorites.splice(index, 1);
          }
        });
      }
    },
  },
});

export const { addToWatchlist, removeFromWatchlist, toggleFavorite } =
  userSlice.actions;
export default userSlice.reducer;
