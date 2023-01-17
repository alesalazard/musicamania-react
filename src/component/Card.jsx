import React from "react";
import Button from "./Button";

// Se crea una card reutilizable para contener las preguntas y opciones, recibe props para cada una en la vista cards.
const Card = (props) => {
  return (
    <div className='card'>
      <strong>{props.question}</strong>
      <div className='radio'>
        <p>
          <input
            type='radio'
            id='option1'
            name='cantante'
            value='option1'
            checked
          />
          <label for='option1'>{props.option1}</label>
        </p>
        <p>
          <input type='radio' id='option2' name='cantante' value='option2' />
          <label for='option2'>{props.option2}</label>
        </p>
        <p>
          <input type='radio' id='option3' name='cantante' value='option3' />
          <label for='option3'>{props.option3}</label>
        </p>
        <p>
          <input type='radio' id='option4' name='cantante' value='option4' />
          <label for='option4'>{props.option4}</label>
        </p>
        <Button text={"Enviar"} />
      </div>
    </div>
  );
};
export default Card;
