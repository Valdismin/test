import React from "react";
import s from "./Header.module.css"
import AccountCircleIcon from '@material-ui/icons/AccountCircle'

export const Header = () => {
    return <div className={s.main}>
        <div className={s.text}>Image Finder</div>
        <AccountCircleIcon fontSize={"large"}/>
    </div>
}