import { useNavigate} from "react-router-dom"
import Button from "../component/Button";
import "../styles/Start.css";

const Start = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <h1>MUSICAMANIA</h1>
      <h2>¿Sabes mucho sobre música?</h2> 
      <h3><em>Marca la respuesta correcta y pruébalo</em></h3>
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
