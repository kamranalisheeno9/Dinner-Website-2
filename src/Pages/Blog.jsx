import React,{useState,useContext,useEffect} from "react";
import Footer from "../components/Footer";
import { Container, Row, Col } from "react-bootstrap";
import "./Blog.css";
import HeadNavbar from "../components/HeadNavbar";
import Blogdata from '../Data/Blogs.json'
import axios from "axios";
import { GlobalData } from "../Context/GlobalData";
import Pagination from 'react-bootstrap/Pagination';

const Blog = () => {

  const [BlogData, setBlogdata] = useState([]);
  const [PaginationData, setPaginationData] = useState([]);
  const [banner, setBanner] = useState([]);
  const [url,setUrl]=useState("http://ditscontrol.com/api/blogs")
  const { lang,Url } = useContext(GlobalData);
  useEffect(() => {
    getBannerData();
    getBlogData();
  }, [lang,url]);

  const getBannerData = () => {
    axios
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
  
  const getBlogData = () => {
    axios
      .get(`${url}`, {
        headers: {
          locale: lang,
        },
      })
      .then((response) => {
        setBlogdata(response.data.data);
        setPaginationData(response.data);

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
      <Container fluid className="blog-main-container">
        <Container fluid="md" className="blog-container">
          {BlogData.map((blog) => {
            return (
              <Row id={blog.id} className="justify-content-around align-items-center blog-row">
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
          {console.log(PaginationData.meta.links)}
           {/* <Pagination> */}
           {/* <Pagination.Prev onClick={()=>setUrl(BlogData.links.first)} /> */}
      {/* <Pagination.Ellipsis /> */}
{/* 
      {Pagination.meta.links.map((page,id)=>{
        return(
          <Pagination.Item   onClick={()=>setUrl(page.url)} id={id}>{page.label}</Pagination.Item>

        )
      })} */}

      {/* <Pagination.Ellipsis />      */}
      {/* <Pagination.Next /> */}
    
    {/* </Pagination> */}

        </Container>
      </Container>
      <Footer />
    </>
  );
};

export default Blog;
