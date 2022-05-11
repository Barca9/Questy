import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../context/authContext";
import {useHttp} from "../../hooks/httpHook";
import {useHistory} from 'react-router-dom'
import {Input, Button} from "@mui/material";
import {ACTION_REGISTRATION, ACTION_AUTHORIZATION} from "../../ducks/auth/actions";
import './style.css'
import {useDispatch} from "react-redux";
import {useAuth} from "../../hooks/authHook";
import {getToken} from "../../helpers/helperFunctions";

const AuthPage = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const {loading, request, error, clearError} = useHttp()
    const auth = useContext(AuthContext);
    const [form, setForm] = useState({email: '', password: ''})
    const {login} = useAuth()

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    useEffect(() => {
        clearError()
    }, [error, clearError])


    const authUrl = 'http://localhost:8080/api/auth/'

 /*   const loginHandler = async () => {
       try {
           let response = await fetch(authUrl + 'login', {
               method: 'POST',
               headers: {
                   'Content-Type': 'application/json;charset=utf-8'
               },
               body: JSON.stringify(form)
           });
       } catch (e) {
           alert(e.message)
       }
   }*/



    /*const loginHandler = async () => {
        try {
            const data = await request(authUrl + 'login', 'POST', {...form})
            /!*auth.login(data.token, data.userId)
            history.push('/constructor')*!/
            console.log(data.headers)
        } catch (e) {
            alert(e.message)
        }
    }*/

   /* const registerHandler = async () => {
        try {
            const data = await request(authUrl + 'register', 'POST', {...form})
        } catch (e) {
            alert(e.message)
        }
    }*/

    const loginHandler = () => {
        try {
            dispatch(ACTION_AUTHORIZATION({...form, url:'api/auth/login'}))
            login(getToken())
        } catch (e) {
            alert(e.message)
        }
    }

    const registerHandler = () => {
       dispatch(ACTION_REGISTRATION({...form, url:'api/auth/register'}))
    }

    return (

        <div className="auth-wrapper">
            <div>
                <h2>Авторизация</h2>
                <div>
                    <Input placeholder="Введите email"
                           type="text"
                           name="email"
                           onChange={changeHandler}/>
                    <Input placeholder="Введите пароль"
                           type="password"
                           name="password"
                           onChange={changeHandler}/>
                </div>
            </div>
            <div>
                <Button
                    disabled={loading}
                    onClick={loginHandler}>
                    Войти
                </Button>
                <Button
                    onClick={registerHandler}
                    disabled={loading}>
                    Регистрация
                </Button>
            </div>
        </div>
    )
}

export default AuthPage