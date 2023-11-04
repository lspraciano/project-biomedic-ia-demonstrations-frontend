import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    loading: true,
    displayedImage: ""
}

export const predictPageSlice = createSlice({
        name: "predictPage",
        initialState,
        reducers: {
            resetPredictPageState: () => {
                return {
                    ...initialState
                };
            },
            setImageDisplayed: (
                state,
                action
            ) => {
                return {
                    ...state,
                    displayedImage: action.payload
                }
            },
        },
        extraReducers: {}
    }
)

export const {
    setImageDisplayed,
    resetPredictPageState,
} = predictPageSlice.actions;
export default predictPageSlice.reducer