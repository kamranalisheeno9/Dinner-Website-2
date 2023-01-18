import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./PricingCard.css";

const PricingCard = (props) => {
  const { pricingData, packageName } = props;

  return (
    <Container className="pricing-card-container">
      <div className="pricing-days">{packageName}</div>
      {pricingData.map((price) => {
        return (
          <Row id={price.id} className="pricing-details">
            <Col sm="4">
              {price.session}
              <div className="pricing-details-inner-text">{price.title}</div>
            </Col>
            <Col sm="4">
              ({price.start} - {price.end})
            </Col>
            <Col sm="4">
              SAR {price.price_sr} /-
              <div className="pricing-details-inner-text">
                USD {price.price_usd} /-
              </div>
            </Col>
          </Row>
        );
      })}
    </Container>
  );
};

export default PricingCard;
