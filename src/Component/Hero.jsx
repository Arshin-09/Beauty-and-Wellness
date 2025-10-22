import { GoArrowRight, GoArrowLeft} from "react-icons/go";
const Hero= () =>{
  return (<>
    <div className="hero_section">
      <div className="section">
                <div className="hero_para">
    <h2>Let nature take<br></br>care of your body <br></br> and soul</h2>
  </div>
  <div className="hero_img">
    <img src="/images/Hero_Image.png" alt="" />
  </div>
      </div>
  <button className="btn">Shop Now <GoArrowRight /></button>
  </div>
  </>)
}
export default Hero;