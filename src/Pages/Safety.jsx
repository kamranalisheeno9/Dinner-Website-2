import React,{useState,useContext,useEffect} from "react";
import Footer from "../components/Footer";
import { Container, Row, Col } from "react-bootstrap";
import "./Safety.css";
import HeadNavbar from "../components/HeadNavbar";
import axios from "axios";
import { GlobalData } from "../Context/GlobalData";

const Safety = () => {
  const [SafetyData, setSafetyData] = useState([]);
  const [banner, setBanner] = useState([]);
  const { lang, Url } = useContext(GlobalData);
  useEffect(() => {
    getTermsData();
    getBannerData();
  }, [lang]);

  const getTermsData = () => {
    axios
      .get(`${Url}api/about_us`, {
        headers: {
          locale: lang,
        },
      })
      .then((response) => {
        setSafetyData(response.data.data);
      })
      .catch((error) => console.log(error));
  };
  const getBannerData = () => {
    axios
      .get(`${Url}api/safety/banner`, {
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
      <Container fluid className="saftey-main-container">
        <Container  className="safety-container">
          {SafetyData.map((data)=>{
            return(
          <Row id={data.id} className="justify-content-around">
            <Col lg="4" className="safety-main-text">
              {data.title}
            </Col>
            <Col lg="7" className="safety-para-text">
              {data.contents.map((item)=>{
                return(
                <div id={item.id}  className="mt-4">
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

export default Safety;
