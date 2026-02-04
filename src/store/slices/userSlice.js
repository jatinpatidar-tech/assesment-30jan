import { createSlice } from "@reduxjs/toolkit";
import { loadFromStorage, saveToStorage } from "../../services/localStorage";

const userSlice = createSlice({
  name: "user",
  initialState: {
    watchlist: loadFromStorage("watchlist", []),
    favorites: loadFromStorage("favorites", []),
  },


  reducers: {

    
    

    toggleWatchlist: (state, action) => {

    
      if (state.watchlist.includes(action.payload) === false) {
        state.watchlist.push(action.payload);}
        else {
          state.watchlist.forEach((item, index) => {
            if (item === action.payload) {
              state.watchlist.splice(index, 1);
            }
          });
        }
        saveToStorage("watchlist", state.watchlist);

 
    },
    
    toggleFavorite: (state, action) => {
      
      if (state.favorites.includes(action.payload) === false) {
        state.favorites.push(action.payload);
      
      } else {
        state.favorites.forEach((item, index) => {
          if (item === action.payload) {
            state.favorites.splice(index, 1);
          }
        });
      }
      saveToStorage("favorites", state.favorites);
    },
  },
});
    
 
export const { toggleWatchlist, toggleFavorite } = userSlice.actions;
export default userSlice.reducer;
