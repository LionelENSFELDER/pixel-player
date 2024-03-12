import { createSlice } from "@reduxjs/toolkit";
import { LibraryObject } from "../../types";
const libraryObjectOnInit: LibraryObject = {
  trending: {},
  playlists: {},
  albums: {},
  shows: {},
};
export const librarySlice = createSlice({
  name: "library",
  initialState: {
    value: libraryObjectOnInit,
  },
  reducers: {
    updatePlaylists: (state) => {
      state.value.playlists = { ...state };
    },
    updateAlbums: (state) => {
      state.value.albums = { ...state };
    },
    updateShows: (state) => {
      state.value.shows = { ...state };
    },
  },
});
export const { updatePlaylists, updateAlbums, updateShows } =
  librarySlice.actions;
// export const selectLibrary = (state:LibraryObject) => state.value;

export default librarySlice.reducer;
