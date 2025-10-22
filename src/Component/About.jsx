import './About.css';
import { GoArrowRight} from "react-icons/go";
const About = () =>{
  return (<>
  <div className="About">
  <div className="About_Us">
    <div className="about_head">
      <p>Velvety facial and skincare company</p>
    </div>
    <div className="about_para">
      <p>Velvety is an indigenous company that specializes in the manufacture and development of facial and skincare products using the medicinal properties of the traditional First Nations pharmacopoeia, with a concern for sustainable development. The products offered, whose benefits have been scientifically confirmed, are 100% natural and allow you to take care of your body and mind: calming teas, energizing infusions, anti-inflammatory essential oils, anti-age soaps and creams, etc.</p>
    </div>
  </div>
  <div className="company">
    <p style={{  color: '#899F87', textAlign:'left'}}>As Seen Is</p>
    <div className="company_img">
      <img src="./images/Company01.png" alt="" />
    <img src="./images/Company02.png" alt="" />
    <img src="./images/Company03.png" alt="" />
    <img src="./images/Company04.png" alt="" />
    <img src="./images/Company05.png" alt="" />
    </div>
  </div>
</div>
<div className="cta">
    <div className='cta_para'>
      <p>Let's see the processing of our products</p>
    </div>
    <div>
<GoArrowRight className='icon'/>
    </div>
  </div>
  </>)
}
export default About;