import { Outlet } from "react-router-dom"
import Cabecalho from "../Components/Cabecalho/Cabecalho"

export default function RootLayout() {
    return (
        <>
            <Cabecalho />
            <Outlet />   
            <footer>
                <p>feito com React Router DOM</p>
            </footer>
        </>
    )  
}