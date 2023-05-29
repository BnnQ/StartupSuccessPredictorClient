import {JSX} from "react";
import Home from "./components/Home";
import FillInfo from "./components/FillInfo";
import Result from "./components/Result";

export interface IRoute {
    path?: string,
    element: JSX.Element;
    index?: boolean
}

const AppRoutes: IRoute[] = [
    {
        element: <Home/>,
        index: true
    },
    {
        path: '/fill-info',
        element: <FillInfo/>
    },
    {
        path: '/result',
        element: <Result/>
    }
];

export default AppRoutes;