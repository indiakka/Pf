import { NavLink } from "react-router-dom";
import "./proyectos.css";

const Proyectos = () => {
  return (
    <div className="contenedor-proyectos">
      <div className="proyectos" id="adoptaAmor">
        <h1>Adopta Amor</h1>
        <NavLink to="https://adopta-amor-zrl.netlify.app">
          <img className='proyectos-img' src="/assets/AdoptaAmor.png" />
        </NavLink>
      </div>
      <div className="proyectos" id="workWave">
        <h1>WorkWave</h1>
        <NavLink to="">
          <img className='proyectos-img' src="/assets/workWave.png" />
        </NavLink>
      </div>
      <div className="proyectos" id="blogDeCafe">
        <h1>Blog de Café</h1>
        <NavLink to="https://blog-de-cafe-curso-desarrollo-web.netlify.app/">
          <img className='proyectos-img' src="/assets/BlogDeCafe.png" />
        </NavLink>
      </div>
      <div className="proyectos" id="freelancePage">
        <h1> Página Freelance</h1>
        <NavLink to="https://freelance-page-curso-desarrollo-web.netlify.app/">
          <img className='proyectos-img' src="/assets/freelancePage.png" />
        </NavLink>
      </div>
      <div className="proyectos" id="frontendStore">
        <h1>Tienda frontend</h1>
        <NavLink to="https://frontend-store-curso-desarrollo-web.netlify.app/">
          <img className='proyectos-img' src="/assets/frontendStore.png" />
        </NavLink>
      </div>
      <div className="proyectos" id="validacionDNI">
        <h1>Validación DNI</h1>
        <NavLink to="https://verificacion-dni.netlify.app/">
          <img className='proyectos-img' src="/assets/ValidacionDNI.png" />
        </NavLink>
      </div>
      <div className="proyectos" id="toquenElDom">
        <h1>Fuga sonora</h1>
        <img className='proyectos-img' src="/assets/fugaSonora.png" />
        <NavLink to="https://toquen-el-dom-factoriaf5.netlify.app/"></NavLink>
      </div>
    </div>
  );
};

export default Proyectos;
