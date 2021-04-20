import React from "react";
import classes from './Navigation.module.css'
import {NavLink} from "react-router-dom";
import {PATH} from "../Routes/Routes";
import BookIcon from '@material-ui/icons/Book';
import FindInPageIcon from '@material-ui/icons/FindInPage';


export const Navigation = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.buttons}>
                <div className={classes.item}>
                    <NavLink to={PATH.SEARCH} activeClassName={classes.active}><FindInPageIcon style={{ fontSize: 50 }} color="primary"/></NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to={PATH.BOOKMARK} activeClassName={classes.active}><BookIcon style={{ fontSize: 50 }} color="primary"/></NavLink>
                </div>
            </div>
        </nav>
    )
}