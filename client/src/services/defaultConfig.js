import {url} from "./constants";
import {getToken} from "../helpers/helperFunctions";


const defaultConfig = {
    baseURL: url,
    headers: {
        "Content-Type":"application/json",
        "Authorization": "Bearer " + getToken()
    }
}

export default defaultConfig