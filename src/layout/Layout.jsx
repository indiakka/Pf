import { Outlet } from "react-router-dom";
import "./layout.css";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import MouseParticles from "react-mouse-particles";

const Layout = () => {
  return (
    <>
      <div id="page-container">
        <div id="content-wrap">
          <Header />
          <MouseParticles g={1} color="random" cull="col,image-wrapper" />
          <main className="main">
            <Outlet />
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
