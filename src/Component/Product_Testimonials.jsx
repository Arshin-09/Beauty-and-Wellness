import './Product_Testimonials.css';
import { useState } from "react";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import { FaStar } from "react-icons/fa";
import Product_Testimonial from "/images/Product_Testimonial.png";
import Row2 from "/images/Row2.png";
import Row01 from "/images/Row01.png";
const Product_Testimonials = () => {
  const stars = Array(5).fill(0);

  // ✅ Testimonials array
  const testimonials = [
    {
      img: Product_Testimonial,
      text: "“I’ve been feeling pretty stressed with my skin lately, so I picked up a set of HOLOCENA skincare. Oh my goodness!. It was AMAZING. My skin felt so soft and moisturized”",
      name: "- Customer Review"
    },
    {
      img: Row2,
      text: "“Amazing results! My skin felt so soft and moisturized.”",
      name: "- Customer Review"
    },
    {
      img: Row01,
      text: "“Holocena skincare is a game changer for me!”",
      name: "- Customer Review"
    }
  ];

  const [sliderNum, setSliderNum] = useState(0);
  const length = testimonials.length;

  const nextslider = () => {
    setSliderNum((prev) => (prev < length - 1 ? prev + 1 : 0));
  };

  const prevslider = () => {
    setSliderNum((prev) => (prev > 0 ? prev - 1 : length - 1));
  };

  return (
    <div className="product_slider">
      {/* ✅ Only one testimonial at a time */}
      <div className="testimonials">
        <div className="testi_img">
          <img src={testimonials[sliderNum].img} alt="slider" className="image" />
        </div>
        <div className="testi_text">
          <p>Product Testimonials</p>
          <h4>
            {stars.map((_, i) => <FaStar key={i} />)} 5.0
          </h4>
          <h2>{testimonials[sliderNum].text}</h2>
          <p>{testimonials[sliderNum].name}</p>
<div className='iconn'>
             <h1 className='left_icon' onClick={prevslider}><GoArrowLeft /></h1>
      <h1 className='right_icon' onClick={nextslider}><GoArrowRight /></h1>
</div>
        </div>
      </div>
    </div>
  );
};

export default Product_Testimonials;
