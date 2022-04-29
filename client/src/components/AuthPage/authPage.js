import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../context/authContext";
import {useHttp} from "../../hooks/httpHook";
import {useHistory} from 'react-router-dom'
import {Input, Button} from "@mui/material";
import './style.css'

const AuthPage = () => {
    const history = useHistory()
    const {loading, request, error, clearError} = useHttp()
    const auth = useContext(AuthContext);
    const [form, setForm] = useState({email: '', password: ''})

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    useEffect(() => {
        clearError()
    }, [error, clearError])


    const url = 'http://localhost:8080/api/auth/login'

    const loginHandler = async () => {
        try {
            const data = await request(url, 'POST', {...form})
            /*auth.login(data.token, data.userId)
            history.push('/constructor')*/
            console.log(data)
        } catch (e) {
            alert(e.message)
        }
    }

    const registerHandler = async () => {
        try {
            const data = await request('/api/auth/register', 'POST', {...form})
        } catch (e) {
            alert(e.message)
        }
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