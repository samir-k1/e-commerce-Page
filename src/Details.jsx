import './App.css';


const Details = () => {
  return (
    <main className=' hero container'>
        <div className='content'>
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>YOUR FEET DESERVE THE BEST AND WE’RE 
            HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST 
            AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
           <div className='shop-btn'>
            <button className='shop'>Shop Now</button>
            <button className='category'>category </button>
            </div>
            <div className='available'>
              <p>Also available on</p>
              </div>
              <div className='shoping-icon'>
              <img src="./image/amazon.png" alt="amazon" />
              <img src='./image/flipkart.png' alt='flipkart'/>
            </div>

        </div>
        <div className='shoe'>
          <img src="./image/shoe_image.png" alt="shoe" />
        </div>

      
    </main>
  )
}

export default Details;
