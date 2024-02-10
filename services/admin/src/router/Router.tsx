import {App} from "@/components/App";
import { createBrowserRouter } from "react-router-dom";
import {About} from "@/pages/About";

const routes = [
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '/about',
                element: <About />
            }
        ]
    },
]


export const router = createBrowserRouter(routes);

export default routes;