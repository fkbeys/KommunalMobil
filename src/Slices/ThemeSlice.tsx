import { createSlice } from "@reduxjs/toolkit";
import { useColorScheme } from 'react-native'

interface ThemeSliceModel {
    currentTheme: boolean
}

const ThemeSlice = createSlice({
    name: "ThemeSlice",
    initialState: {} as ThemeSliceModel,

    reducers: {

        temaDegistir: (state, action) => {
            state.currentTheme = !state.currentTheme;
        },
    },

});


export const { temaDegistir } = ThemeSlice.actions;
export default ThemeSlice;  