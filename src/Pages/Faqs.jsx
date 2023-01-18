import React,{useState,useContext,useEffect} from "react";
import Footer from "../components/Footer";
import { Container, Row, Col } from "react-bootstrap";
import "./Faqs.css";
import HeadNavbar from "../components/HeadNavbar";
import Accordion from "react-bootstrap/Accordion";
import axios from "axios";
import { GlobalData } from "../Context/GlobalData";

const FAQs = () => {
  const [FAQs_Data, setFAQs_Data] = useState([]);
  const [banner, setBanner] = useState([]);
  const { lang, Url } = useContext(GlobalData);
  useEffect(() => {
    getFAQsData();
    getBannerData();
  }, [lang]);

  const getFAQsData = () => {
    axios
      .get(`${Url}api/FAQ`, {
        headers: {
          locale: lang,
        },
      })
      .then((response) => {
        setFAQs_Data(response.data.data);
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
        <HeadNavbar id={data.id} pageName="Frequently Asked Questions" bgImg={data.image} />

      )
    })}
      <Container fluid className="faqs-main-container">
        <Container>
          <Row className="justify-content-md-center faqs-container">
            <Col lg="8" className="accordion-container">

              <Accordion defaultActiveKey="">
                {FAQs_Data.map((faq)=>{
                  return(
                <Accordion.Item id={faq.id} eventKey={faq.id}>
                  <Accordion.Header>{faq.question}</Accordion.Header>
                  <Accordion.Body>
                  {faq.answer}
                  </Accordion.Body>
                </Accordion.Item>

                  )
                })}
              </Accordion>
            </Col>
          </Row>
        </Container>
      </Container>
      <Footer />
    </>
  );
};

export default FAQs;
