import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {axiosRequester} from "../../requests/axiosClients.js";

const initialState = {
    loading: false,
    displayedImage: "",
    detections: {}
}

export const predictImage = createAsyncThunk(
    "predictPage/predictImage",
    async (
        {
            filePath
        },
        {
            rejectWithValue
        }
    ) => {
        const response = await fetch(filePath);
        const fileBlob = await response.blob();
        const file = new File([fileBlob], 'file.jpg', {type: 'image/jpeg'});

        const formData = new FormData();
        formData.append('file', file);

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
                'accept': 'image/jpeg',
            },
            responseType: 'blob',
        };

        try {

            const response = await axiosRequester().post(
                "hematological-slides/predict",
                formData,
                config,
            )

            const image_data = URL.createObjectURL(new Blob([await response.data])).toString();
            const detections = response.headers["detections"];

            return {image_data, detections}

        } catch (error) {
            return rejectWithValue(
                error.response.data
            );
        }
    }
)

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
        extraReducers: (builder) => {
            builder
                .addCase(
                    predictImage.pending, state => {
                        state.loading = true;
                    }
                )
                .addCase(
                    predictImage.fulfilled, (
                        state,
                        action
                    ) => {
                        state.detections = action.payload["detections"]
                        state.displayedImage = action.payload["image_data"];
                        state.loading = false;
                    }
                )
                .addCase(
                    predictImage.rejected, (
                        state,
                        action
                    ) => {
                        state.loading = false;
                        console.log(action);
                    }
                )
        },
    }
)

export const {
    setImageDisplayed,
    resetPredictPageState,
} = predictPageSlice.actions;
export default predictPageSlice.reducer