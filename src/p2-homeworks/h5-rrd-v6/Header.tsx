import React from 'react'
import { NavLink } from 'react-router-dom'
import {PATH} from "./Pages";
import style from "./Header.module.css"
function Header() {
    return (
        <div className ={style.header}>
            <NavLink to={PATH.PRE_JUNIOR} className={({isActive})=>isActive ? "active-link": ""}>PRE_JUNIOR/ </NavLink>
            <NavLink to={PATH.JUNIOR} className={({isActive})=>isActive ? "active-link": ""}>JUNIOR/ </NavLink>
            <NavLink to={PATH.MIDDLE} className={({isActive})=>isActive ? "active-link": ""}>JUNIOR+ </NavLink>
            <div className={style.block}></div>
        </div>
    )
}

export default Header
