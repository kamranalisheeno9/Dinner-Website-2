import React,{useState,useContext,useEffect} from "react";
import Footer from "../components/Footer";
import { Container, Row, Col } from "react-bootstrap";
import "./About.css";
import HeadNavbar from "../components/HeadNavbar";
import axios from "axios";
import { GlobalData } from "../Context/GlobalData";

const Contact = () => {
 
  const [AboutData, setAboutData] = useState([]);
  const [banner, setBanner] = useState([]);
  const { lang, Url } = useContext(GlobalData);
  useEffect(() => {
    getAboutData();
    getBannerData();
  }, [lang]);

  const getAboutData = () => {
    axios
      .get(`${Url}api/about_us`, {
        headers: {
          locale: lang,
        },
      })
      .then((response) => {
        setAboutData(response.data.data);
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
    {banner.map((data)=>{
      return(
        <HeadNavbar id={data.id} pageName={data.title} bgImg={data.image} />

      )
    })}
      <Container fluid className="about-main-container">
        <Container className="about-container">
            {AboutData.map((data)=>{
              return(
                <Row id={data.id} className="justify-content-around ">

            <Col lg="3" className="about-main-text">{data.title}</Col>
            <Col lg="7" className="about-para-text">
              {data.contents.map((item)=>{
                return(
              <div id={item.id} className="mt-2">
                {item.content}
              </div>

                )
              })}
            </Col>
          </Row>
              )
            })}
        </Container>
      </Container>
      <Footer />
    </>
  );
};

export default Contact;
