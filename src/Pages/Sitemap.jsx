import React,{useState,useContext,useEffect} from "react";
import Footer from "../components/Footer";
import { Container, Row, Col } from "react-bootstrap";
import "./Sitemap.css";
import HeadNavbar from "../components/HeadNavbar";
import { Link } from "react-router-dom";
import axios from "axios";
import { GlobalData } from "../Context/GlobalData";

const Pricing = () => {
  
  const [banner, setBanner] = useState([]);
  const { lang, Url } = useContext(GlobalData);
  useEffect(() => {
    getBannerData();
  }, [lang]);

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
     {banner.map((data) => {
        return (
          <HeadNavbar id={data.id} pageName="Sitemap" bgImg={data.image} />
        );
      })}
      <Container fluid className="sitemap-main-container">
        <Container className="sitemap-container">
          <Row>
            <Col sm="4" className="sitemap-list">
              <ul>
                <li>
                  {" "}
                  <Link to="/">Home</Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link to="/pricing">Pricing</Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link to="/our-menu">Chefs Menu</Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link to="/terms-conditions">Terms & Conditions</Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link to="/about-us">About Us</Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link to="/safety-security">Safety & Security</Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link to="/faqs">Frequently Asked Questions</Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link to="/events">Corporate & Private Events</Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link to="/contact">Contact Us</Link>{" "}
                </li>
              </ul>
            </Col>
            <Col sm="6" className="sitemap-list">
              <ul>
                <li>
                  <Link to="">Make a Reservation</Link>
                </li>
                <li>
                  <Link to="/blog">Blogs</Link>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
      <Footer />
    </>
  );
};

export default Pricing;
