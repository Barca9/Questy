import axios from "axios";
import defaultConfig from './defaultConfig';


const createInstance = (config={}) => {

    const newConfig = {
        ...defaultConfig,
        ...config
    }

    return axios.create(newConfig)

}



//console.log(process.env)

export default createInstance
