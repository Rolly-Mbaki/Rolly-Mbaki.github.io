import { createBrowserRouter } from "react-router-dom";
import ROOT from '../components/root/Root'
import HOME from '../components/home/Home'
import NOT_FOUND from '../components/not_found/NotFound'

const Router = createBrowserRouter([
    {
        path: "/",
        element: <ROOT />,
        children: [
            {
                path: "",
                element: <HOME />
            },
            {
                path: "*",
                element: <NOT_FOUND />
            },
        ]
    }
]);

export default Router;