import {useCallback, useState, useEffect} from 'react'
import {getToken} from "../helpers/helperFunctions";


const storageName = 'token'  //хранилище для токенов

export const useAuth = () => {

    const [token, setToken] = useState(getToken)

    const login = useCallback((token) => {
        setToken(token)
        localStorage.setItem(storageName, JSON.stringify(token))
    }, [])

    const logout = useCallback(() => {
        setToken(null)
        localStorage.removeItem(storageName)
    }, [])

    useEffect(() => {
        if (localStorage.getItem(storageName)) {
            login(token)
        }
        /*const data = JSON.parse(localStorage.getItem(storageName))
        console.log('зашли в эффект', data)
        if (data) {
            login(token)
        }*/

    }, [login, token])



    return {login, logout, token}
}