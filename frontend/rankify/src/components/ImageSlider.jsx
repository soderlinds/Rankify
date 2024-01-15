import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/_imageslider.sass';

const ImageSlider = ({ pictures, currentImage, setCurrentImage }) => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    centerMode: true,
    centerPadding: "30%",
    afterChange: (index) => setCurrentImage(index),
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className="image-carousel">
      <Slider {...sliderSettings}>
        {pictures.map((picture, index) => (
          <div key={index}>
            <img src={picture} alt={`Food ${index + 1}`} className="carousel-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="slick-arrow slick-prev" onClick={onClick}>
      Previous
    </div>
  );
};

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="slick-arrow slick-next" onClick={onClick}>
      Next
    </div>
  );
};

export default ImageSlider;
