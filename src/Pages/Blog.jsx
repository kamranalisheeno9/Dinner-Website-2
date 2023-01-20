import React, { useState, useContext, useEffect } from "react";
import Footer from "../components/Footer";
import { Container, Row, Col } from "react-bootstrap";
import "./Blog.css";
import HeadNavbar from "../components/HeadNavbar";
import axios from "axios";
import { GlobalData } from "../Context/GlobalData";
import Pagination from "react-bootstrap/Pagination";

const Blog = () => {
  const [BlogData, setBlogdata] = useState([]);
  const [PaginationData, setPaginationData] = useState([]);
  const [banner, setBanner] = useState([]);
  const [pagesList, setPagesList] = useState([]);
  const { lang, Url } = useContext(GlobalData);
  const [url, setUrl] = useState(`${Url}api/blogs`);
  useEffect(() => {
    getBannerData();
    getBlogData();
  }, [lang, url]);

  const getBannerData = async () => {
    await axios
      .get(`${Url}api/blogs/banner`, {
        headers: {
          locale: lang,
        },
      })
      .then((response) => {
        setBanner([response.data.data]);
      })
      .catch((error) => console.log(error));
  };

  const getBlogData = async () => {
    await axios
      .get(`${url}`, {
        headers: {
          locale: lang,
        },
      })
      .then((response) => {
        setBlogdata(response.data.data);
        setPaginationData([response.data.meta]);
        setPagesList(response.data.meta.links.splice(1, 6));
      })
      .catch((error) => console.log(error));
  };

  const [currentPage, setCurrentPage] = useState(0);

  const PageFunction = (event, page) => {
    event.preventDefault();
    setCurrentPage(page);
    setUrl(pagesList[page].url);
  };
  const PrevFunction = (event, page) => {
    event.preventDefault();
    if (page == 0) {
      setCurrentPage(page);

      setUrl(pagesList[page].url);
    } else {
      setCurrentPage(page - 1);
      setUrl(pagesList[page - 1].url);
    }
  };
  const NextFunction = (event, page) => {
    event.preventDefault();
    if (page == pagesList.length - 1) {
      setCurrentPage(page);

      setUrl(pagesList[page].url);
    } else {
      setCurrentPage(page + 1);
      setUrl(pagesList[page + 1].url);
    }
  };

  return (
    <>
      {banner.map((data) => {
        return (
          <HeadNavbar id={data.id} pageName={data.title} bgImg={data.image} />
        );
      })}
      <Container fluid className="blog-main-container">
        <Container fluid="md" className="blog-container">
          {BlogData.map((blog) => {
            return (
              <Row
                id={blog.id}
                className="justify-content-around align-items-center blog-row"
              >
                <div className="small-screen-title">{blog.title}</div>

                <Col lg="4" className="blog-img mt-5">
                  <img src={blog.image} alt={blog.title} />
                </Col>
                <Col lg="8">
                  <div className="blog-title">{blog.title}</div>

                  <div className="blog-content">{blog.content}</div>
                </Col>
              </Row>
            );
          })}
          <div className="pagination-container">

          <Pagination>
            <Pagination.Prev onClick={(e) => PrevFunction(e, currentPage)} />
        
            {pagesList.map((page, id) => {
              return (
                <Pagination.Item
                  active={page.label == currentPage + 1 ? true : false}
                  id={id}
                  onClick={(event) => PageFunction(event, id)}
                >
                  {page.label}
                </Pagination.Item>
              );
            })}
            

            <Pagination.Next onClick={(e) => NextFunction(e, currentPage)} />
          </Pagination>
          </div>

        </Container>
      </Container>
      <Footer />
    </>
  );
};

export default Blog;
