import './All_Product.css';
import { FaStar } from "react-icons/fa";
const All_product = () =>{
  const skincareNeeds = [
  "All needs",
  "Protect",
  "Regenerates",
  "Revitalizes",
  "Feeds",
  "Regulates",
  "Purifies",
  "Makeup Removal",
  "Exfoliate",
  "Antioxidant",
  "Soothes",
  "Smoothes skin texture",
  "Tones",
  "Anti-waste",
  "Hydrate",
  "Strengthens",
  "Regenerates after UV exposure Strengthens"
];
const stars = Array(5).fill(0);
  return (<>
  <div className='Products'>
    <div className='about_products'>
      <p>All Products</p>
      <p>Mild skincare & facial routine</p>
      <div className='btnn'>
        {skincareNeeds.map((need,index)=>(
        <button key={index}>{need}</button>
      )
    )}
      </div>
    </div>
    <div className='about_pro'>
      <div className='about_card'>
        <img src="../images/Row01.png" alt="" />
        <h3>CLASSWING</h3>
        <h4>$20</h4>
        <h4>{stars.map((index)=>(
          <FaStar key={index} />
        ))}5.0</h4>
      </div>
      <div className='about_card'>
        <img src="../images/Row2.png" alt="" />
        <h3>HOLOCANE</h3>
        <h4>$20</h4>
        <h4>{stars.map((index)=>(
          <FaStar key={index} />
        ))}5.0</h4>
      </div>
      <div className='about_card'>
        <img src="../images/row1.png" alt="" />
        <h3>INAMORATA</h3>
        <h4>$20</h4>
        <h4>{stars.map((index)=>(
          <FaStar key={index} />
        ))}5.0</h4>
      </div>
      <div className='about_card'>
        <img src="../images/row02.png" alt="" />
        <h3>LIGHTCOOL</h3>
        <h4>$20</h4>
        <h4>{stars.map((index)=>(
          <FaStar key={index} />
        ))}5.0</h4>
      </div>
      <button>Shop now</button>
    </div>
  </div>
  </>)
}
export default All_product;