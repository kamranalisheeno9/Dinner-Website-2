import React, { useEffect, useState, useContext } from "react";
import Footer from "../components/Footer";
import { Container, Row, Col } from "react-bootstrap";
import "./TermsConditions.css";
import HeadNavbar from "../components/HeadNavbar";
import axios from "axios";
import { GlobalData } from "../Context/GlobalData";

const Terms_Conditions = () => {
  const [Terms_Conditions_data, setTerms_Conditions_data] = useState([]);
  const [banner, setBanner] = useState([]);
  const { lang, Url } = useContext(GlobalData);
  useEffect(() => {
    getTermsData();
    getBannerData();
    
  }, [lang]);

  const getTermsData = () => {
    axios
      .get(`${Url}api/terms_and_conditions`, {
        headers: {
          locale: lang,
        },
      })
      .then((response) => {
        setTerms_Conditions_data(response.data.data);
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
      {banner.map((data) => {
        return (
          <HeadNavbar id={data.id} pageName={data.title} bgImg={data.image} />
        );
      })}
      <Container fluid className="main-container">
        <Container>
          <Row className="justify-content-md-center terms-container">
            <Col lg="8">
              {Terms_Conditions_data.map((data) => {
                return (
                  <div id={data.id}>
                    <div className="terms-main-text">{data.title}</div>
                    <div className="terms-para-text">
                      {data.contents.map((item) => {
                        return (
                          <ul id={item.id}>
                            <li className="terms-content-text">
                              {item.content}
                            </li>
                            <ul className="terms-para-text">
                              {item.sub_contents.map((sub_item) => {
                                return (
                                  <li id={sub_item.id}>{sub_item.content}</li>
                                );
                              })}
                            </ul>
                          </ul>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </Col>
          </Row>
        </Container>
      </Container>
      <Footer />
    </>
  );
};

export default Terms_Conditions;
