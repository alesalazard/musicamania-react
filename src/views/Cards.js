import { useNavigate} from "react-router-dom"
import Button from "../component/Button";
import Card from "../component/Card";
import Routing from '../routes/Routes';

const Cards = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className='App'>
        <Routing />
        <Card 
          question = '1. ¿Quién canta Yesterday?'
          option1 = 'The Beatles'
          option2 = 'The Rolling Stones'
          option3 = 'The Monkeys'
          option4 = 'Coldplay'
        />
        <Card 
          question = '2. ¿Disco más vendido?'
          option1 = 'Bohemian Rhapsody'
          option2 = 'Thriller'
          option3 = 'Dark side of the moon'
          option4 = 'The Bodyguard'
        />
        <Card 
          question = '3. ¿Cómo se llama el vocalista de Radiohead?'
          option1 = 'Steven Tyler'
          option2 = 'Chris Cornell'
          option3 = 'Thom Yorke'
          option4 = 'Eddie Vedder'
        />
        <h2>Score:</h2>
      </div>
      <Button 
        onClick={() => navigate("/")}
      />
    </>
  );
}
export default Cards;
