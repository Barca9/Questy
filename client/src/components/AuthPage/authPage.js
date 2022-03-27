import {useContext} from "react";
import {AuthContext} from "../../context/authContext";

import './style.css'


const AuthPage = () => {

    const auth = useContext(AuthContext)

    return (

                <div className="auth-wrapper">
                    <div className="card-content white-text">
                        <span className="card-title">Авторизация</span>
                        <div>
                            <div className="input-field">
                                <input placeholder="Введите email"
                                       className="yellow-input"
                                       id="email"
                                       type="text"
                                       name="email"/>
                            </div>
                            <div className="input-field">
                                <input placeholder="Введите пароль"
                                       className="yellow-input"
                                       id="password"
                                       type="password"
                                       name="password"/>
                            </div>
                        </div>
                    </div>
                    <div className="card-action">
                        <button className="btn yellow darken-4">
                            Войти
                        </button>
                        <button className="btn grey lighten-1 black-text">
                            Регистрация
                        </button>
                    </div>
                </div>

    )
}

export default AuthPage