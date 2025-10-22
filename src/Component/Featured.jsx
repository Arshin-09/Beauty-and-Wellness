import './Featured.css';
const Featured = () =>{
  return(<>
  <div className='featured'>
    <div className='featued_para'>
      <p style={{color:'#899F87'}}>Our featured products</p>
    <h1>Facial and skincare, natural and certified organic</h1>
    </div>
    <div className="featured_card">
        <div className='card'>
        <img src="./images/Product_Image.png" alt="" />
        <h6>CHICORI</h6>
        <p>$20</p>
      </div>
      <div className='card'>
        <img src="./images/Product_Image2.png" alt="" />
        <h6>NOTORIOUS</h6>
        <p>$20</p>
      </div>
      <div className='card'>
        <img src="./images/Product_Image3.png" alt="" />
        <h6>HOLOCENA</h6>
        <p>$20</p>
      </div>
    </div>
  </div>

  </>)
}
export default Featured;