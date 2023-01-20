import React, { useEffect,useState,useContext } from "react";
import "./Footer.css";
import Button from "./Button";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsFacebook,BsInstagram,BsYoutube } from "react-icons/bs";
import { FiSmartphone } from "react-icons/fi";
import { IoSearchCircleOutline } from "react-icons/io5";
import axios from "axios";
import { GlobalData } from "../Context/GlobalData";


const Footer = () => {
  const [FooterData, setFooterData] = useState([]);
  const { lang, Url } = useContext(GlobalData);
  const [contactData,setContactData]=useState([])
  

  useEffect(() => {
    getFooterData();
    getContactData();
  }, [lang]);

  const getFooterData = () => {
    axios
      .get(`${Url}api/footer_categories`, {
        headers: {
          locale: lang,
        },
      })
      .then((response) => {
        setFooterData(response.data.data);
      })
      .catch((error) => console.log(error));
  };
  const getContactData = () => {
    axios
      .get(`${Url}api/contact_us?=`, {
        headers: {
          locale: lang,
        },
      })
      .then((response) => {
        setContactData(response.data.data);
      })
      .catch((error) => console.log(error));
  };
  return (
    <Container fluid className="footer_container">
      <Container fluid="xl">
        <Row className="justify-content-around align-items-center">
          <Col lg="8">
            <Row className="justify-content-around">
              {FooterData.map((data) => {
                return (
                  <Col xs="6" md="3" id={data.id}>
                    <div className="heading_text">{data.title}</div>
                    {data.footer_items.map((items) => {
                      return (
                        <div id={items.id} className="inner_text">
                          <Link to={items.url}>{items.title}</Link>
                        </div>
                      );
                    })}
                  </Col>
                );
              })}
            </Row>
          </Col>
          <Col lg="4" className="book_experience">
            <div className="heading_text ">BOOK YOUR EXPERIENCE</div>
            <div>
              <Button btnName="Book Now" font="16px" />
            </div>
            <div className="heading_text ">CONTACT US</div>
            <div className="inner_text links">
              <span className="contact_icon">
                <FiSmartphone />
              </span>
              {contactData.phone}
            </div>
            <div className="inner_text links">
              <span className="contact_icon">
                <IoSearchCircleOutline />
              </span>
              {contactData.email}
            </div>
            <div>
              <img
                src="https://dinnerinthesky.ae/images/secure-logos.png"
                alt="payment"
              />
            </div>
          </Col>
        </Row>
        <Container className="footer-links pt-4">
          <Row className="justify-content-between">
            <Col sm="4">
              <div className="footer-links-text-1">
                Al Sufoh - Sky Dive Dubai, Dubai, United Arab Emirates
              </div>
              <div className="footer-links-text-2">
                © 2023 DINNER IN THE SKY. All Rights Reserved.
              </div>
            </Col>
            <Col className="footer-links-icons" sm="4">
                <a href={import.meta.env.VITE_REACT_APP_YOUTUBE_URL} target="_blank">
                   <BsYoutube />
                  </a>
                <a href={import.meta.env.VITE_REACT_APP_FACEBOOK_URL} target="_blank">
                  <BsFacebook />
                  </a>
                <a href={import.meta.env.VITE_REACT_APP_INSTAGRAM_URL} target="_blank">
                   <BsInstagram />
                  </a>
            </Col>
          </Row>
        </Container>
      </Container>
    </Container>
  );
};

export default Footer;
