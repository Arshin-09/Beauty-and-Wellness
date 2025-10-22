import './Ingredients.css'
import { FaLeaf } from "react-icons/fa";   // Font Awesome
import { GiSparkles } from "react-icons/gi"; // Game Icons
import { MdDesignServices } from "react-icons/md";

const Ingredients = () =>{
  return (<>
  <div className="container">
    <div className="container_img">
      <img src="./images/Left.png" alt="" />
    </div>
    <div className="container_para">
      <h2><FaLeaf />  100% Organic</h2>
      <h3>We craft skincare using the most exquisite ingredients from the plant, earth and mineral realms.</h3>
      <h2><GiSparkles />  Fits your skin</h2>
      <h3>It's all natural and processed based on traditional knowledge with modern technology.</h3>
      <h2><MdDesignServices />  Easy to use</h2>
      <h3>Packed with a unique design as well as useful that can help you perform routine skin care.</h3>
    </div>
  </div>
  </>)
}

export default Ingredients;