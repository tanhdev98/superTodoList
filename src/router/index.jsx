import BaseLayout from "@/components/Layout/BaseLayout"
import ErrorPage from "@/pages/ErrorPage"
import Home from "@/pages/Home"
import Register from "@/pages/Register"
import { createBrowserRouter } from "react-router-dom"

const router = createBrowserRouter([
    {
        path: "/",
        element: <BaseLayout></BaseLayout>,
        errorElement: <ErrorPage />,
        children: [{
            path: "/",
            element: <Home />
        },
        {
            path: "/login",
            element: <Login />
        },
        {
            path: "/register",
            element: <Register />
        }
        ]
    }
])

export default router