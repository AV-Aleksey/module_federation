import {createRoot} from "react-dom/client";
import {RouterProvider} from "react-router-dom";
import {StrictMode} from "react";
import {router} from "@/router/Router";

const root = document.getElementById('root');

if (!root) {
    throw new Error('root not found');
}

const container = createRoot(root);

container.render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
)