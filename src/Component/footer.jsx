import './footer.css';
import { FaFacebook, FaInstagram ,FaTwitter} from "react-icons/fa";
const Footer = () =>{
  return(
    <>
    <div className='footer'>
      <div className='part_1'>
        <img src="./images/footer_logo.png" alt="" />
        <p>Opening Hours</p>
        <p>Monday to Saturday: 10:30 a.m. to 7 p.m.</p>
        <FaFacebook className='icons'/><FaInstagram className='icons'/><FaTwitter className='icons' />
      </div>
      <div className='part_2'>
        <h3>Shop</h3>
        <p>Skincare</p>
        <p>Facial</p>
        <p>Soap</p>
        <p>Candles</p>
        <p>Auto Fragrances</p>
        <p>Gifts</p>        
      </div>
      <div className='part_3'>
        <h3>Help Desk</h3>
        <p>Chat</p>
        <p>FAQ</p>
        <p>Shipping & Returns</p>
        <p>Contact</p>
        <p>Policies</p>
        <p>Accessibility</p>
        <p>My Account</p>
      </div>
      <div className='part_4'>
        <h3>Stores</h3>
        <p>Manhattan</p>
        <p>Brooklyn</p>
        <p>Tokyo</p>
        <p>Jakarta</p>
        <p>Paris</p>
        <p>Buenos Aires</p>
      </div>
    </div>
    <div>
      <h2>Designed By Arshin Ansari</h2>
    </div>
    </>
  )
}

export default Footer;