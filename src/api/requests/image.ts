import axios from "axios";
import { imageSchemas } from "../schemes";

export async function getImage(params: imageSchemas.GetImageRequestParams){
    const { url } = params;
    return axios.get(url);
}