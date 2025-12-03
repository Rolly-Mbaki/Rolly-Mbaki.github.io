import { createHashRouter } from "react-router-dom";
import ROOT from '../components/root/Root'
import HOME from '../components/home/Home'
import NOT_FOUND from '../components/not_found/NotFound'
import WEBPROJECTS from "../components/webProjects/webProjects";

const Router = createHashRouter([
    {
        path: "/",
        element: <ROOT />,
        children: [
            {
                path: "",
                element: <HOME />
            },
            {
                path: "webProjects",
                element: <WEBPROJECTS />
            },
            {
                path: "*",
                element: <NOT_FOUND />
            },
        ]
    }
]);

export default Router;