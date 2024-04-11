import { createBrowserRouter } from "react-router-dom";
import Inicio from "../pages/Inicio/Inicio";
import Layout from "../layout/Layout";
import SobreMi from "../pages/SobreMi/SobreMi";
import Proyectos from "../pages/Proyectos/Proyectos";
import Contacto from "../pages/Contacto/Contacto";




export const router = createBrowserRouter( [ {
    path: "/",
    element: <Layout />,
    children: [
        {
            path: "/",
            element: <Inicio />
        },
        {
            path: "/sobreMi",
            element: <SobreMi />
        },
        {
            path: "/proyectos",
            element: <Proyectos />
        },
        {
            path: "/contacto",
            element: <Contacto />
        },
    ]
}
] )