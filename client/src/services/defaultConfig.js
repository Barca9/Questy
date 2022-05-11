import {url} from "./constants";
import {getToken} from "../helpers/helperFunctions";

let token = getToken()

const defaultConfig = {
    baseURL: url,
    headers: {
        "Content-Type":"application/json",
        "Authorization": token
    }
}

export default defaultConfig