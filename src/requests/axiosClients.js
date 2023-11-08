import axios from "axios";

export const hostAddress = "34.172.245.118";
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



