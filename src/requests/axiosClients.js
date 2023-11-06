import axios from "axios";

export const hostAddress = "127.0.0.1:8000";
export const baseUrl = `http://${hostAddress}/api/`;


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



