import React from 'react';
import "./styles/customProduct.css";

const CustomProduct = () => {
    return (
        <div className='custom-product'>
            <div className='custom-pro-1'>
                <div className='imagediv'>
                    <img className='image' src="https://printify.com/pfh/assets/legacy/custom-products.png" alt='image' />
                </div>
                <div style={{ margin: "5px",display:"flex",flexDirection:"column",gap:"10px"}}>
                    <h2 style={{ color: "rgb(36, 198, 36)" }}>CREATE</h2>
                    <h3 style={{fontSize:"20px"}}>custom products</h3>
                    <p> Easily add your designs to a wide range of products using our free tools</p>
                </div>
            </div>
            <div className='custom-pro-1'>
                <div>
                    <img className='image' src='https://printify.com/pfh/assets/legacy/your-products.png' alt='image' />
                </div>
                <div style={{ margin: "5px",display:"flex",flexDirection:"column",gap:"10px"}}>
                    <h2 style={{ color: "rgb(36, 198, 36)" }}>SELL</h2>
                    <h3 style={{fontSize:"20px"}}>on our terms</h3>
                    <p>You choose the products, sale price, and where to sell</p>
                </div>
            </div>
            <div className='custom-pro-1'>
                <img className='image' src='https://printify.com/pfh/assets/legacy/fullfillment.png' alt='image' />
                <div style={{ margin: "5px",display:"flex",flexDirection:"column",gap:"10px"}}>
                    <h2 style={{ color: "rgb(36, 198, 36)" }}>WE HANDLE</h2>
                    <h3 style={{fontSize:"20px"}}>fulfillment</h3>
                    <p> Once an order is placed, we automatically handle all the printing and delivery logistics </p>
                </div>
            </div>
        </div>
    )
}

export default CustomProduct