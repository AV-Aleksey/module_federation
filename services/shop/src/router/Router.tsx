import {App} from "@/components/App";
import {Shop} from "@/pages/Shop";
import { createBrowserRouter } from "react-router-dom";

const routes = [
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '/shop',
                element: <Shop />
            }
        ]
    },
]


export const router = createBrowserRouter(routes);

export default routes;