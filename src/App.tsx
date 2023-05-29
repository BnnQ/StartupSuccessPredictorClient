import React, {FC} from 'react';
import "reflect-metadata";
import {Provider} from "inversify-react";
import {Route, Routes} from "react-router-dom";
import AppRoutes from "./AppRoutes";
import {container} from "./dependency-container";

const App : FC = () => {
    return (
        <Provider container={container}>
            <Routes>
                {AppRoutes.map((route, index) => {
                    const { element, ...rest } = route;
                    return <Route key={index} {...rest} element={element}/>
                })}
            </Routes>
        </Provider>
    );
};

export default App;
