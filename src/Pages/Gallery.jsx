import React,{useState,useContext,useEffect} from "react";
import Footer from "../components/Footer";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import "./Gallery.css";
import HeadNavbar from "../components/HeadNavbar";
import axios from "axios";
import { GlobalData } from "../Context/GlobalData";

const Gallery = () => {
  const [GalleryData, setGalleryData] = useState([]);
  const [YoutubeData, setYoutubeData] = useState([]);
  const [banner, setBanner] = useState([]);
  const { lang, Url } = useContext(GlobalData);
  useEffect(() => {
    getGalleryData();
    getYoutubeData();
    getBannerData();
  }, [lang]);

  const getGalleryData = () => {
    axios
      .get(`${Url}api/gallary`, {
        headers: {
          locale: lang,
        },
      })
      .then((response) => {
        setGalleryData(response.data.data);
      })
      .catch((error) => console.log(error));
  };
  const getYoutubeData = () => {
    axios
      .get(`${Url}api/gallary_videos`, {
        headers: {
          locale: lang,
        },
      })
      .then((response) => {
        setYoutubeData(response.data.data);
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
        <HeadNavbar id={data.id} pageName="Gallery" bgImg={data.image} />

      )
    })}
      <div className="gallery-main-container">
        {/* Carousel Container */}

        <Container fluid="lg" className="carousel-container">
          <Carousel>
            {GalleryData.map((image) => {
              return (
                <Carousel.Item
                  className="carousel-item-container"
                  id={image.id}
                >
                  <img
                    className="d-block w-100"
                    src={image.image}
                    alt={image.image}
                  />
                </Carousel.Item>
              );
            })}
          </Carousel>
        </Container>

        {/* Youtube Videos Container */}
        <Container className="videos-container">
          <Row className="justify-content-around">
            {YoutubeData.map((data)=>{
              return(
            <Col lg="6" id={data.id}>
              <iframe

                width="100%"
                height="400"
                src={`https://www.youtube.com/embed/${data.youtube_id}`}
                title="dinner in the sky uae"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </Col>

              )
            })}
          
          </Row>
        </Container>
      </div>

      <Footer />
    </>
  );
};

export default Gallery;
