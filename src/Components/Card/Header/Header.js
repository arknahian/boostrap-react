import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Header.css'

const Header = (props) => {
    const content = props.content;
    return (
      
    <div className="header">
    <Carousel className="carousel">
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={content[0].urlToImage}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>{content[0].title}</h3>
      <p>{content[0].description}</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src={content[2].urlToImage}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>{content[0].title}</h3>
      <p>{content[0].description}</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={content[4].urlToImage}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>{content[0].title}</h3>
      <p>{content[0].description}</p>
    </Carousel.Caption>
  </Carousel.Item>
    </Carousel>
        </div>
    );
};

export default Header;