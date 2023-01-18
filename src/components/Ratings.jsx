import React from 'react';
import { Container } from 'react-bootstrap';
import {AiFillStar} from 'react-icons/ai'
import {BsFillCircleFill} from 'react-icons/bs'

import './Ratings.css'
const Ratings = (props) => {
    const {imageUrl,ratingPoints,ratingIcon}=props;
    return (
        <Container className='ratings-container'>
            <div className='ratings'>
                <div className='image-ratings'>

                <img src={imageUrl} alt={imageUrl} />
                </div>
                <div className={ratingIcon === "star" ? 'rating-icons-star' : 'rating-icons-circle'}>{ratingIcon === "star" ?<span> <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /> </span>: <span> <BsFillCircleFill /> <BsFillCircleFill /> <BsFillCircleFill /> <BsFillCircleFill /> <BsFillCircleFill />  </span>}</div>
                <div className='rating-points'><span>{ratingPoints}</span> / 5</div>
            </div>
        </Container>
    );
}

export default Ratings;
