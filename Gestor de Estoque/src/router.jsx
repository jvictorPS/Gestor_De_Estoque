import { createBrowserRouter } from "react-router-dom"
import Home from './pages/Home'
import Estoque from './pages/Estoque'
import RootLayout from "./pages/RootLayout"

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
            index: true,
            element: <Home />,
            }, 
            {
            path: "Estoque",
            element: <Estoque />
            }
        ]
    }
])

export default router