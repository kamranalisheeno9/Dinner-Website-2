import React,{useState,useContext,useEffect} from "react";
import Footer from "../components/Footer";
import { Container, Row, Col } from "react-bootstrap";
import Button from "../components/Button";
import "./ChefsMenu.css";
import HeadNavbar from "../components/HeadNavbar";
import axios from "axios";
import { GlobalData } from "../Context/GlobalData";

const ChefsMenu = () => {

  const [MenuData, setMenuData] = useState([]);
  const [banner, setBanner] = useState([]);
  const { lang, Url } = useContext(GlobalData);
  useEffect(() => {
    getMenuData();
    getBannerData();
  }, [lang]);

  const getMenuData = () => {
    axios
      .get(`${Url}api/menu_categories`, {
        headers: {
          locale: lang,
        },
      })
      .then((response) => {
        setMenuData(response.data.data);
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
        <HeadNavbar id={data.id} pageName="Chef's Menu" bgImg={data.image} />

      )
    })}
      <div className="menu-main-container">
        <Container className="menu-content">
          {MenuData.map((menu) => {
            return (
              <Row id={menu.id} className="justify-centent-between m-2">
                <Col  lg="4">
                  <div className="category-name">{menu.title}</div>
                  <div className="options-text">{menu.description}</div>
                </Col>
                <Col lg="8">
                  <Row className="justify-content-between mt-4 ">
                    {menu.menu_items.map((item) => {
                      return (
                        <Col className="" id={item.id} sm="5">
                          <div className="item-img mt-4">
                            {" "}
                            <img src={item.image} alt={item.title} />{" "}
                          </div>
                          <div className="item-name">{item.title}</div>
                          <div className="item-detail"> {item.description}</div>
                        </Col>
                      );
                    })}
                  </Row>
                </Col>
              </Row>
            );
          })}
        </Container>

        <Container className="menu-booking-container">
          <Row className="justify-content-around">
            <Col lg="6" xl="5">
              <div className="passport-menu-title-1">
                Fine Dining in Dubai's Sky
              </div>
              <div className="passport-menu-title-2">Book Your Seat Now</div>
              <div className="passport-menu-details">
                Combined scenery, unforgettable moments with unique fine
                flavours and join us 50 meters high in Dubai. .
              </div>
              <div className="button-menu">
                <Button
                  btnName="Click Here to Book Now"
                  font="18px"
                  padding="16px 40px"
                />
              </div>
            </Col>
            <Col lg="6" xl="5" className="passport-image">
              <img
                src="https://dinnerinthesky.ae/storage/38/responsive-images/outdoor-activiity-dubai-%283240%29___display_1897_1264.jpg"
                alt="passport"
              />
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default ChefsMenu;
