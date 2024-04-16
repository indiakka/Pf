import { Outlet } from "react-router-dom"
import './layout.css'
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"

const Layout = () =>
{
    return (
        <>
            <Header />
            <main className="main">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Layout