import { useNavigate} from "react-router-dom"
import Button from "../component/Button";
import "../styles/Start.css";

// Hace las veces de página home.
const Start = () => {
  const navigate = useNavigate();
  return (
    <div className="home">
      <h1>MUSICAMANIA</h1>
      <h2>¿Sabes mucho sobre música?</h2> 
      <h2><em>Marca la respuesta correcta y pruébalo</em></h2>
      <img src={require('../images/penta.png')} alt='pentagrama'/>
      <Button 
        text = {"Comenzar"}
        onClick={() => navigate("/Cards")}
        className={"button-start"}
      />
    </div>
  );
};

export default Start;
