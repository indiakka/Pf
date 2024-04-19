// import Background from "../../components/background/Background";
import "./inicio.css";

const Inicio = () => {
  return (
    <div className="inicio-container">
      <div className="inicio">
        {/* <Background /> */}
        <div className="inicio-text">
          <h1> ¡Hola! Soy Ziortza Rey</h1>
          <p> Desarrolladora Web Junior</p>
        </div>
        <div className="inicio-image">
          <img src="/assets/fotozrl.png" />
        </div>
      </div>
    </div>
  );
};

export default Inicio;
