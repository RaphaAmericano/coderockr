import axios, { AxiosRequestConfig, AxiosResponse} from "axios";

const service = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        "Content-Type": "application/json"
    }
});

function parseResponse(response: AxiosResponse){
    return response.data;
}

async function handleResponseError(error: any){
    // if(error?.response){
        
    // }
    return Promise.reject(error);
}

service.interceptors.response.use(parseResponse, handleResponseError);

export default service;