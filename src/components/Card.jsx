import React from "react";
import { Container } from "react-bootstrap";
import "./Card.css";
const Card = (props) => {
  const { mainText, paraText, imageUrl } = props;
  return (
    <Container className="card-container">
      <div className="card-image">
        <img src={imageUrl} alt={mainText} />
      </div>
      <div className="card-main-text">{mainText}</div>
      <br />
      <div className="card-small-text">{paraText}</div>
    </Container>
  );
};

export default Card;
