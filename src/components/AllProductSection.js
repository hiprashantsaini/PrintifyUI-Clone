import EastIcon from '@mui/icons-material/East';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import product3 from "../assets/custom-products.webp";
import product1 from "../assets/product-1.jpg";
import product2 from "../assets/product-2.jpg";
import "./styles/AllProductSection.css";

const AllProductSection = () => {
  return (
    <div className='all-pro-1'>
         <div className='animate-section'>
             <Carousel className='carousel' showArrows={true} showThumbs={false} autoPlay={true} infiniteLoop={true}>
                <div>
                    <img src={product1} className='image'/>
                </div>
                <div>
                    <img src={product2} alt='image' className='image'/>
                </div>
                <div>
                    <img src={product3} className='image'/>
                </div>
            </Carousel>
         </div>
         <div className='pro-info-section'>
              <h1>Easily add your design to a wide range of products</h1>
              <p>With our free design tools, you can easily add your custom designs to t-shirts, mugs, phone cases, and hundreds of other products.</p>
              <h3 style={{display:"flex",alignItems:"center",gap:"10px",cursor:"pointer"}}><p>All Products</p><EastIcon style={{fontSize:"20px",fontWeight:"600"}}/></h3>
         </div>
    </div>
  )
}

export default AllProductSection