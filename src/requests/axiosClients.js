import axios from "axios";

export const baseUrl = import.meta.env.VITE_API_URL;

export const axiosRequester = () => {
    return axios.create(
        {
            baseURL: `${baseUrl}`,
            timeout: 10000,
            headers: {
                "Content-Type": "multipart/form-data",
                Accept: "application/json",
            },
        }
    );
};



