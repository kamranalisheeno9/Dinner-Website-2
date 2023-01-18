import React from 'react';
import { Container } from 'react-bootstrap';
import './Reviews.css'
const Reviews = (props) => {
    const {name,platform,review}=props;
    return (
        <Container className='review-container'>
            <div className='review'>{review}</div>
            <div className='review-name'>{name}</div>
            <div className='review-platform'>{platform}</div>
        </Container>
    );
}

export default Reviews;
