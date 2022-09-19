import React from 'react'
import {Navigate, Route, Routes} from 'react-router-dom';

import Error404 from './pages/Error404';
import PreJunior from "./pages/PreJunior";
import {Junior} from "./pages/Junior";
import {Middle} from "./pages/Middle";

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: "/junior",
    MIDDLE: "/middle"

}

function Pages() {
    return (
        <div>
            {/*Routes выбирает первый подходящий роут*/}
            <Routes>
                {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
                <Route path={'/'} element={<Navigate to={PATH.PRE_JUNIOR}/>}/>

                <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
                // add routes
                <Route path={PATH.JUNIOR} element={<Junior/>}/>
                <Route path={PATH.MIDDLE} element={<Middle/>}/>

                {/*он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
                <Route path={'/*'} element={<Error404/>}/>
            </Routes>
        </div>
    )
}

export default Pages
