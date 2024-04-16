import { NavLink } from "react-router-dom";
import "./proyectos.css";

const Proyectos = () => {
  return (
    <div className="contenedor-proyectos">
      <div className="proyectos" id="adoptaAmor">
        <h1>Adopta Amor</h1>
        <NavLink to="https://adopta-amor-f5.netlify.app/">
          <img src="/assets/AdoptaAmor.png" />
        </NavLink>
      </div>
      <div className="proyectos" id="workWave">
        <h1>WorkWave</h1>
        <NavLink to="">
          <img src="/assets/workWave.png" />
        </NavLink>
      </div>
      <div className="proyectos" id="blogDeCafe">
        <h1>Blog de Café</h1>
        <NavLink to="https://blog-de-cafe-curso-desarrollo-web.netlify.app/">
          <img src="/assets/BlogDeCafe.png" />
        </NavLink>
      </div>
      <div className="proyectos" id="freelancePage">
        <h1> Página Freelance</h1>
        <NavLink to="https://freelance-page-curso-desarrollo-web.netlify.app/">
          <img src="/assets/freelancePage.png" />
        </NavLink>
      </div>
      <div className="proyectos" id="frontendStore">
        <h1>Tienda frontend</h1>
        <NavLink to="https://frontend-store-curso-desarrollo-web.netlify.app/">
          <img src="/assets/frontendStore.png" />
        </NavLink>
      </div>
      <div className="proyectos" id="validacionDNI">
        <h1>Validación DNI</h1>
        <NavLink to="https://verificacion-dni.netlify.app/">
          <img src="/assets/ValidacionDNI.png" />
        </NavLink>
      </div>
      <div className="proyectos" id="toquenElDom">
        <h1>Fuga sonora</h1>
        <img src="/assets/toquenElDom.png" />
        <NavLink to="https://toquen-el-dom-factoriaf5.netlify.app/"></NavLink>
      </div>
    </div>
  );
};

export default Proyectos;
