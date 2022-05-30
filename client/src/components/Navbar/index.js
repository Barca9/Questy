import React, {useContext} from "react"
import {NavLink, useHistory} from 'react-router-dom'
import {AuthContext} from "../../context/authContext";
import './style.css'


export const Navbar = () => {
    const history = useHistory()
    const auth = useContext(AuthContext)

    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
        history.push('/')
    }
    return (

        <nav className="nav-wrapper">
           {/* <span className="brand-logo">Questy</span>
            <ul>
                <li><NavLink to="/flight/all">Рейсы</NavLink></li>
                <li><a href="/" onClick={logoutHandler}>Выйти</a></li>
            </ul>*/}
            <ul className='k'>
                <li className="brand-logo">Questy</li>
                <li><NavLink to="/constructor">Конструктор</NavLink></li>
                <li><a href="/" onClick={logoutHandler}>Выйти</a></li>
            </ul>
        </nav>

    )

}