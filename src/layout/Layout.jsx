import { Outlet } from "react-router-dom"
import './layout.css'
import Header from "../components/header/Header"


const Layout = () =>
{
    return (
        <>
            <Header />
            <main className="main">
                <Outlet />
            </main>

        </>
    )
}

export default Layout