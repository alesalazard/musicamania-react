import React from "react";
import '../styles/Card.css';
import Button from "./Button";
const Card = (props) =>{
  return (
    <div className="container">
      <div className="card">
        <strong>{props.question}</strong>
        <div className="radio">
          <p><input type="radio" id="option1" name="cantante"value="option1" checked />
          <label for="option1">{props.option1}</label></p> 
          <p><input type="radio" id="option2" name="cantante"value="option2" />
          <label for="option2">{props.option2}</label></p>
          <p><input type="radio" id="option3" name="cantante"value="option3" />
          <label for="option3">{props.option3}</label></p>
          <p><input type="radio" id="option4" name="cantante"value="option4" />
          <label for="option4">{props.option4}</label></p>
        </div>
        <Button />
      </div>
    </div>
  )
}

export default Card;
