import { useNavigate} from "react-router-dom"
import '../styles/Card.css';
import Button from "../component/Button";
import Card from "../component/Card";

// Recibe los props individuales de cada card.
const Cards = () => {
  const navigate = useNavigate();
  return (
    <>
      <h2>Elige Una de las Opciones</h2>
      <div className='container'>
        <h3>Rockeras</h3>
        <Card 
          question = '1. ¿Grupo que canta Yesterday?'
          option1 = 'The Beatles'
          option2 = 'The Rolling Stones'
          option3 = 'The Monkeys'
          option4 = 'Coldplay' />
        <Card 
          question = '2. ¿El disco más vendido?'
          option1 = 'Bohemian Rhapsody'
          option2 = 'Thriller'
          option3 = 'Dark side of the moon'
          option4 = 'The Bodyguard' />
        <Card 
          question = '3. ¿Cómo se llama el vocalista de Radiohead?'
          option1 = 'Steven Tyler'
          option2 = 'Chris Cornell'
          option3 = 'Thom Yorke'
          option4 = 'Eddie Vedder' />
      </div>
      <h2>Score:</h2>
      <Button 
        onClick={() => navigate("/")}
        text={'Ir al Inicio'}
      />
    </>
  );
}
export default Cards;
