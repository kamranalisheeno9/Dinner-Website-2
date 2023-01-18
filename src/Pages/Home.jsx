import React, { useEffect, useState, useContext } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Container, Row, Col } from "react-bootstrap";
import Card from "../components/Card";
import Ratings from "../components/Ratings";
import ReviewCard from "../components/Reviews";
import "./Home.css";
import Button from "../components/Button";
import axios from "axios";
import { GlobalData } from "../Context/GlobalData";

const Home = () => {
  const [HomeMainData, setHomeMainData] = useState([]);
  const [ReviewsData, setReviewsData] = useState([]);
  const [CardsData, setCardsData] = useState([]);
  const [ConceptData, setConceptData] = useState([]);
  const [AdData, setAdData] = useState([]);
  const [banner, setBanner] = useState([]);
  const { lang, Url } = useContext(GlobalData);

  useEffect(() => {
    getMainData();
    getCardsData();
    getConceptData();
    getReviewsData();
    getAdData();
    // getBannerData();
  }, [lang]);

  const getMainData = () => {
    axios
      .get(`${Url}api/main_ad/home_page_ad`, {
        headers: {
          locale: lang,
        },
      })
      .then((response) => {
        setHomeMainData([response.data.data]);
      })
      .catch((error) => console.log(error));
  };
  const getReviewsData = () => {
    axios
      .get(`${Url}api/reviews`, {
        headers: {
          locale: lang,
        },
      })
      .then((response) => {
        setReviewsData(response.data.data);
      })
      .catch((error) => console.log(error));
  };
  const getCardsData = () => {
    axios
      .get(`${Url}api/occasions`, {
        headers: {
          locale: lang,
        },
      })
      .then((response) => {
        setCardsData(response.data.data);
      })
      .catch((error) => console.log(error));
  };
  const getConceptData = () => {
    axios
      .get(`${Url}api/concept`, {
        headers: {
          locale: lang,
        },
      })
      .then((response) => {
        setConceptData([response.data]);
      })
      .catch((error) => console.log(error));
  };
  const getAdData = () => {
    axios
      .get(`${Url}api/ad_1/home_page_ad`, {
        headers: {
          locale: lang,
        },
      })
      .then((response) => {
        setAdData([response.data.data]);
      })
      .catch((error) => console.log(error));
  };
 

  const RatingsData = [
    {
      image_url: "https://dinnerinthesky.ae/images/icons/google-g-icon.png",
      rating_icon: "star",
      rating_points: "4.8",
    },
    {
      image_url: "https://dinnerinthesky.ae/images/icons/tripadvisor-logo.png",
      rating_icon: "circle",
      rating_points: "4.5",
    },
    {
      image_url: "https://dinnerinthesky.ae/images/icons/gyg-logo.png",
      rating_icon: "star",
      rating_points: "4.8",
    },
    {
      image_url: "https://dinnerinthesky.ae/images/icons/groupon-logo.png",
      rating_icon: "star",
      rating_points: "4.3",
    },
  ];

  return (
    <div className="home_page">
      <Header />

      {/* Main Text Area 1 */}

      <Container fluid>
        {HomeMainData.map((data) => {
          return (
            <Row id={data.id}>
              <Col lg="6" className="home_page_main_text">
                <div className="text_container">
                  <div className="main_text_1">{data.title}</div>
                  <div className="main_text_2">{data.sub_title}</div>
                  <div className="para_text">{data.content}</div>
                  <div className="book_seat_main_btn">
                    <Button
                      btnName={data.button_text}
                      font="18px"
                      padding="14px"
                    />
                  </div>
                </div>
              </Col>
              <Col lg="6" className="home_page_main_image">
                <img src={data.image} alt={data.url} />
              </Col>
            </Row>
          );
        })}
      </Container>
      {ConceptData.map((data, id) => {
        return (
          <Container id={id} className="text_container_2">
            <div className="small_text">{data.concept}</div>
            <div className="main_text_3">{data.title}</div>
            <div className="para_text_2">{data.content}</div>
          </Container>
        );
      })}
      {/* Main Text Area 1 ( Booking ) */}

      <Container fluid className="book_container">
        {AdData.map((data) => {
          return (
            <Row id={data.id}>
              <Col lg="6" className="dinner_img">
                <img src={data.image} alt={data.url} />
              </Col>
              <Col className="dinner_banner_text" lg="6">
                <div className="question_text_dinner">{data.title}</div>
                <div className="main_text_dinner">{data.sub_title}</div>
                <div className="para_dinner">{data.content}</div>
                <div className="btn_dinner">
                  <Button
                    btnName={data.button_text}
                    font="18px"
                    padding="14px"
                  />
                </div>
              </Col>
            </Row>
          );
        })}
      </Container>
      {/* Card Main Page */}
      <Container>
        <Row className="justify-content-around">
          {CardsData.map((card) => {
            return (
              <Col id={card.id} md="4" className="mb-5">
                <Card
                  mainText={card.name}
                  paraText={card.description}
                  imageUrl={card.image}
                />
              </Col>
            );
          })}
        </Row>
      </Container>

      {/* Ratings */}

      <Container>
        <Row className="justify-content-around align-items-center">
          {RatingsData.map((rating, id) => {
            return (
              <Col id={id} xs="6" md="3">
                <Ratings
                  imageUrl={rating.image_url}
                  ratingIcon={rating.rating_icon}
                  ratingPoints={rating.rating_points}
                />
              </Col>
            );
          })}
        </Row>
        <div className="rating_updated">* as of 10th of January, 2022</div>
      </Container>

      {/* Reviews */}
      <Container fluid className="reviews_container">
        <Container fluid="lg">
          <Row>
            {ReviewsData.map((review) => {
              return (
                <Col id={review.id} lg="4">
                  <ReviewCard
                    name={review.customer_name}
                    platform={review.source}
                    review={review.review}
                  />
                </Col>
              );
            })}
          </Row>
        </Container>
      </Container>

      <Footer />
    </div>
  );
};

export default Home;
