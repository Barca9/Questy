import {useContext, useState} from "react";
import {AuthContext} from "../../context/authContext";
import {useHistory} from 'react-router-dom'
import {Input, Button} from "@mui/material";
import {ACTION_REGISTRATION, ACTION_AUTHORIZATION} from "../../ducks/auth/actions";
import {useDispatch, useSelector} from "react-redux";
import {getAuthToken} from "../../ducks/auth/selectors";
import {getToken} from "../../helpers/helperFunctions";
import './style.css'

const AuthPage = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const auth = useContext(AuthContext);
    const token = useSelector(getAuthToken)
    const [form, setForm] = useState({email: '', password: ''})

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const loginHandler = async () => {
        try {
            dispatch(ACTION_AUTHORIZATION(form))
            auth.login(getToken())
            /*auth.login(token)*/
        } catch (e) {
            alert(e.message)
        }
    }

    const registerHandler = () => {
       dispatch(ACTION_REGISTRATION(form))
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
                <Button onClick={loginHandler}>
                    Войти
                </Button>
                <Button onClick={registerHandler}>
                    Регистрация
                </Button>
            </div>
        </div>
    )
}

export default AuthPage