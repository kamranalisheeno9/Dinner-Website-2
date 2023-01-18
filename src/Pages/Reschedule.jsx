import React, { useState,useContext,useEffect } from "react";
import Footer from "../components/Footer";
import { Container, Row, Col, Form } from "react-bootstrap";
import Button from "../components/Button";
import "./Reschedule.css";
import HeadNavbar from "../components/HeadNavbar";
import axios from "axios";
import { GlobalData } from "../Context/GlobalData";

const Reschedule = () => {
  const [reservationsVal, SetReservationVal] = useState("");
  const [banner, setBanner] = useState([]);
  const { lang, Url } = useContext(GlobalData);
  useEffect(() => {
    getBannerData();
  }, [lang]);

  
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
 
  const Reschedule_Reserve_Call =()=>{ 
  }
  return (
    <>
      {banner.map((data)=>{
      return(

        <HeadNavbar id={data.id} pageName="Reschedule Reservations" bgImg={data.image} />
      )
    })}
      <Container fluid className="reschedule-main-container">
        <Row className="justify-content-center">
          <Col md="8">
            <Container className="reschedule-container">
              <div>Booking Reference</div>
              <div className="mt-2">
                <Form.Control
                  type="text"
                  id="1"
                  placeholder="13BA123SC34"
                  aria-describedby="passwordHelpBlock"
                  value={reservationsVal}
                  onChange={(e) => SetReservationVal(e.target.value)}
                />
              </div>
              <Row className="justify-content-center">
                <Col md="8" className="mt-5">
                  <Button Func={Reschedule_Reserve_Call} btnName="Reschedule Reservations" font="16px" />
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Reschedule;
