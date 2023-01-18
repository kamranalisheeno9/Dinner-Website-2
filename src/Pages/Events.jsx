import React,{useState,useContext,useEffect} from "react";
import Footer from "../components/Footer";
import { Container, Row, Col } from "react-bootstrap";
import Button from "../components/Button";
import "./Events.css";
import HeadNavbar from "../components/HeadNavbar";
import axios from "axios";
import { GlobalData } from "../Context/GlobalData";

const Events = () => {
  const [Events, setEvents] = useState([]);
  const [EventsAd, setEventsAd] = useState([]);
  const [banner, setBanner] = useState([]);
  const { lang, Url } = useContext(GlobalData);
  useEffect(() => {
    getBannerData();
    getEventsData();
    getEventsAdData();
  }, [lang]);

  const getEventsData = () => {
    axios
      .get(`${Url}api/events`, {
        headers: {
          locale: lang,
        },
      })
      .then((response) => {
        setEvents(response.data.data);
      })
      .catch((error) => console.log(error));
  };
  const getEventsAdData = () => {
    axios
      .get(`${Url}api/ad_1/events_page_ad`, {
        headers: {
          locale: lang,
        },
      })
      .then((response) => {
        setEventsAd([response.data.data]);
      })
      .catch((error) => console.log(error));
  };
  const getBannerData = () => {
    axios
      .get(`${Url}api/terms_and_conditions/banner`, {
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
    {banner.map((data)=>{
      return(
        <HeadNavbar id={data.id} pageName="Cooperative and Private Events" bgImg={data.image} />

      )
    })}
      <Container fluid className="events-main-container  ">
       
        <Container className=" ">
        {Events.map((data)=>{
          return(

          <Row   id={data.id} className="justify-content-around align-items-center events-data-content ">

            <Col lg="6" className="event-text ">
           {data.content}
            </Col>
            <Col lg="6" className="event-img">
              <img src={data.image} alt={data.image} />

            </Col>
          </Row>
          )
        })}
        </Container>
        <Container>
        {EventsAd.map((data)=>{
          return(

        <Container id={data.id} className="event-container-2">
          <Row className="justify-content-around">
            <Col lg="5">

          <div className="event-2-text">
          {data.title}
          </div>
          <div className="event-2-btn">
            <a href={data.btn_url} target="_blank">

          <Button btnName={data.btn_text} font="18px" padding="18px" />
            </a>
          </div>
            </Col>
            <Col lg="6" className="event-2-img mt-5">
              <img src={data.image} alt={data.title} />
            </Col>
          </Row>
        </Container>
          )
        })}
        </Container>
      </Container>
      <Footer />
    </>
  );
};

export default Events;
