import React from "react";
import {Redirect, Route, Switch } from "react-router-dom";
import { Search } from "../Search/Search";
import {Bookmark} from "../Bookmark/Bookmark";
import {Error404} from "../Error404";

export const PATH = {
    SEARCH: "/search",
    BOOKMARK: "/bookmarks",
}

export const Routes = () => {
    return (
        <div>
            <Switch>

                <Route path={"/"} exact render={() => <Redirect to={PATH.SEARCH}/>}/>
                <Route path={PATH.SEARCH} render={() => <Search/>}/>
                <Route path={PATH.BOOKMARK} render={() => <Bookmark/>}/>
                у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу
                <Route render={() => <Error404/>}/>

            </Switch>
        </div>
    );
}