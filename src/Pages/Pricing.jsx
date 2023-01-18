import React, { useState, useContext, useEffect } from "react";
import Footer from "../components/Footer";
import { Container, Row, Col } from "react-bootstrap";
import PricingCard from "../components/PricingCard";
import "./Pricing.css";
import HeadNavbar from "../components/HeadNavbar";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import axios from "axios";
import { GlobalData } from "../Context/GlobalData";

const Pricing = () => {
  const [PricingData, setPricingData] = useState([]);
  const [PricingAdData, setPricingAdData] = useState([]);
  const [CardData, setCardData] = useState([]);
  const [Experience, setExperience] = useState([]);
  const [banner, setBanner] = useState([]);
  const { lang, Url } = useContext(GlobalData);

  useEffect(() => {
    getPricingData();
    getPricingAdData();
    getBannerData();
    getExperienceData();
    getCardsData();
  }, [lang]);

  const getPricingData = () => {
    axios
      .get(`${Url}api/pricings`, {
        headers: {
          locale: lang,
        },
      })
      .then((response) => {
        setPricingData(response.data.data);
      })
      .catch((error) => console.log(error));
  };
  const getPricingAdData = () => {
    axios
      .get(`${Url}api/ad_1/pricing_page_ad`, {
        headers: {
          locale: lang,
        },
      })
      .then((response) => {
        setPricingAdData([response.data.data]);
      })
      .catch((error) => console.log(error));
  };
  const getCardsData = () => {
    axios
      .get(`${Url}api/experiences`, {
        headers: {
          locale: lang,
        },
      })
      .then((response) => {
        setCardData(response.data.data);
      })
      .catch((error) => console.log(error));
  };

  const getExperienceData = () => {
    axios
      .get(`${Url}api/experience_brief`, {
        headers: {
          locale: lang,
        },
      })
      .then((response) => {
        setExperience(response.data);
      })
      .catch((error) => console.log(error));
  };
  const getBannerData = () => {
    axios
      .get(`${Url}api/about_us/banner`, {
        headers: {
          locale: lang,
        },
      })
      .then((response) => {
        setBanner([response.data.data]);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      {banner.map((data) => {
        return (
          <HeadNavbar id={data.id} pageName="Pricing" bgImg={data.image} />
        );
      })}
      <Container fluid className="pricing-main-container">
        {/* Pricing Packages */}
        <Container fluid="lg">
          <Row className="justify-content-around">
            {PricingData.map((pricing) => {
              return (
                <Col id={pricing.id} lg="6">
                  <PricingCard
                    pricingData={pricing.price_items}
                    packageName={pricing.title}
                  />
                </Col>
              );
            })}
          </Row>
          <div className="pricing-note">NOTE:</div>
          <div className="pricing-note-details">
            ALL PRICES EXCLUDE 5% VAT CHARGE.
            <br />
            PRICES IN USD MIGHT VARY ON TIME OF PURCHASE DUE TO CURRENCY
            EXCHANGE PRICES, THE FINAL AMOUNT WILL BE CHARGE IN ARAB EMIRATES
            DIRHAM.s
          </div>
        </Container>

        {/* Pricing Images And Texts */}
        <Container className="experience-text">
          <div className="experience-main-text">{Experience.title}</div>
          <div className="experience-para-text">{Experience.content}</div>
        </Container>

        {/* Occasions Containers  */}
        <Container>
          {CardData.map((data) => {
            return (
              <Row
                id={data.id}
                className=" occasions-row justify-content-around align-items-center"
              >
                <Col lg="6" className="p-2">
                  <div className="occasion-name">{data.name}</div>
                  <div className="occasion-details">{data.description}</div>
                </Col>
                <Col lg="6" className="occasion-img p-2">
                  <img src={data.image} alt={data.name} />
                </Col>
              </Row>
            );
          })}
        </Container>

        {/* Pricing Book Seat Containers  */}
        {PricingAdData.map((data) => {
          return (
            <Container id={data.id} className="pricing-booking-container">
              <div className="ready-text">{data.title}</div>
              <div className="book-today-text">{data.sub_title}</div>
              <Row className="pricing-btn-container">
                <Col xs="12" sm="6">
                  <a className="btn-link" target="_blank" href={data.first_btn_url}>
                  <Button btnName={data.first_btn_text} font="16px" />
                  </a>
                </Col>
                <Col xs="12" sm="6">
                  <div className="pricing-menu-btn">
                    <a target="_blank"  href={data.second_btn_url} >{data.second_btn_text}</a>
                  </div>
                </Col>
              </Row>
            </Container>
          );
        })}
      </Container>

      <Footer />
    </>
  );
};

export default Pricing;
