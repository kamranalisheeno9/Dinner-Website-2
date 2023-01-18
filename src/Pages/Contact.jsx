import React,{useState,useContext,useEffect} from "react";
import { FaMobileAlt } from "react-icons/fa";
import { VscMention } from "react-icons/vsc";
import { BsInstagram, BsFacebook } from "react-icons/bs";
import Footer from "../components/Footer";
import { Container, Row, Col, Form } from "react-bootstrap";
import Button from "../components/Button";
import "./Contact.css";
import HeadNavbar from "../components/HeadNavbar";
import axios from "axios";
import { GlobalData } from "../Context/GlobalData";

const Contact = () => {
  const [ContactData, setContactData] = useState([]);
  const [banner, setBanner] = useState([]);
  const { lang, Url } = useContext(GlobalData);

  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Mobile, setMobile] = useState("");
  const [Message, setMessage] = useState("");
  const [contactFormData,setContactFormData]=useState([])
  const [bannerImg,setBannerImg]=useState("https://dinner-web.netlify.app/assets/menubg-ed7938af.png")

  useEffect(() => {
    getContactData();
    getBannerData();
  }, [lang]);

  const getContactData = () => {
    axios
      .get(`${Url}api/contact_us?=`, {
        headers: {
          locale: lang,
        },
      })
      .then((response) => {
        setContactData([response.data.data]);
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

  const handleSubmit =()=>{
    const Data={
      name:Name,
      email:Email,
      mobile:Mobile,
      message:Message
    }
    setContactFormData([...contactFormData,Data])
    console.log(contactFormData)
    setName("")
    setEmail("")
    setMobile("")
    setMessage("")
  }

  return (
    <>
   {banner.map((data)=>{
      return(
        <HeadNavbar id={data.id} pageName="Contact Us" bgImg={data.image} />

      )
    })}
      <Container fluid className="contact-main-container">
        <Container  className="contact-container">
          <Row className="justify-content-between">
            {ContactData.map((data)=>{
              return(
                <Col lg="4" className="contact-detail" id={data.id}>
              <div className="contact-main-text">{data.title}</div>
              <div className="contact-para-text">
               {data.description}
              </div>
              <div className="contact-sub-text">
               {data.location}
              </div>
              <div className="contact-list-detail">
                <ul>
                  <li>
                    <span>
                      <FaMobileAlt />{" "}
                    </span>
                   {data.phone}
                  </li>
                  <li>
                    <span className="mention-icon">
                      <VscMention />
                    </span>
                   {data.email}
                  </li>
                </ul>
              </div>
              <div className="contact-icons">
                <BsFacebook />{" "}
                <span>
                  <BsInstagram />
                </span>
              </div>
            </Col>
              )
            })}
            
            <Col lg="7" className="contact-form">
              <Form
              // noValidate
              // validated={validated}
              onSubmit={handleSubmit}
              >
                <Row>
                  <Form.Group
                    className="mt-4"
                    as={Col}
                    lg="11"
                    controlId="validationCustom01"
                  >
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Full Name"
                      value={Name}
                      onChange={(e)=>setName(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mt-4"
                    as={Col}
                    lg="11"
                    controlId="validationCustom01"
                  >
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control required type="email" placeholder="Email"   value={Email}
                    onChange={(e)=>setEmail(e.target.value)} />
                  </Form.Group>
                  <Form.Group
                    className="mt-4"
                    as={Col}
                    lg="11"
                    controlId="validationCustom01"
                  
                  >
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Mobile Number"
                      value={Mobile}
                      onChange={(e)=>setMobile(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mt-4"
                    as={Col}
                    lg="11"
                    controlId="validationCustom01"
                  >
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      placeholder="Let us know how can we help"
                      style={{ height: "130px" }}
                      value={Message}
                      onChange={(e)=>setMessage(e.target.value)}
                    />

                  </Form.Group>
                  <Col lg="11 mt-4">
                  <Button Func={handleSubmit} btnName="Contact Us" font="16px" />

                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Container>
        {ContactData.map((data)=>{
          return(
        <Container id={data.id} className="map-container mt-5">

          <iframe
            src={data.iframe_location}
            width="100%"
            height="450"
            className="map-container-iframe"
            allowfullscreen="true"
            loading="lazy"
          ></iframe>
        </Container>

          )
        })}
      </Container>
      <Footer />
    </>
  );
};

export default Contact;
