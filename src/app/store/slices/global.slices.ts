import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction, Slice } from "@reduxjs/toolkit";
import type { WritableDraft } from "immer";

import { initialState, type initialStateType } from "../states/global.state";

const globalSlice: Slice<initialStateType> = createSlice({
	name: "App",
	initialState,
	reducers: {
		updateLanguage: (
			state: WritableDraft<initialStateType>,
			action: PayloadAction<"esES" | "enGB" | "caES">
		) => {
			state.preferences.language = action.payload;
		},		
	},
});

export const {
	updateLanguage
} = globalSlice.actions;
export default globalSlice.reducer;
