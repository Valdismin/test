import React from "react";
import {Redirect, Route, Switch } from "react-router-dom";
import { Search } from "../Search/Search";
import {Bookmark} from "../Bookmark/Bookmark";
import {Error404} from "../Error404";
import {Auth} from "../AuthPage/Auth_Page";

export const PATH = {
    SEARCH: "/search",
    BOOKMARK: "/bookmarks",
    AUTH:"/auth"
}

export const Routes = () => {
    return (
        <div>
            <Switch>

                <Route path={"/"} exact render={() => <Redirect to={PATH.SEARCH}/>}/>
                <Route path={PATH.SEARCH} render={() => <Search/>}/>
                <Route path={PATH.BOOKMARK} render={() => <Bookmark/>}/>
                <Route path={PATH.AUTH} render={() => <Auth/>}/>
                у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу
                <Route render={() => <Error404/>}/>

            </Switch>
        </div>
    );
}