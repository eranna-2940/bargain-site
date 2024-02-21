import React from 'react'
import { useParams, useLocation, Link } from 'react-router-dom'
import MyNavbar from './navbar';
import Footer from './footer';
import { useCart } from './CartContext';

export default function Productdetails() {
  const  { addToCart, addToWishlist } = useCart();

    const {id} = useParams();
    const location = useLocation();
    const productdetails = location.state && location.state.productdetails;
    const type = location.state.type;

    if (!productdetails) {
        return <div>Error: Product details not found.</div>;
    }
   
    
  return (
    <div>
        {/* <h1>Product Details for ID: {id}</h1> */}
        <MyNavbar/>
        <nav className="p-2 ps-lg-5 pe-lg-5">
        <Link to="/" className="text-decoration-none text-dark">
          <i className="bi bi-house-fill"></i>
        </Link>
        &nbsp; /<Link to={"/"+type} className='text-decoration-none text-dark'>{type}</Link>/ {productdetails.category} / {productdetails.name}
      </nav>
        <div className='p-2 d-md-flex justify-content-center' style={{gap:"25px"}}>
            <div>
                <img src={productdetails.image} width="550px" height="700px" alt='product'></img>
            </div>
            <div className='ps-md-3'>
                <h2>{productdetails.name}</h2> 
                <p>{productdetails.description}</p> 
                <p><span className='fw-bold'>Location :</span>{productdetails.location}</p>
                <p><span className='fw-bold'>Color : </span>{productdetails.color}</p>
                <p><span className='fw-bold'>Can it be altered : </span>{productdetails.alteration}</p>
                <p><span className='fw-bold'>Size : </span>{productdetails.size}</p>
                <p><span className='fw-bold'>Size (Measurements) : </span>{productdetails.measurements}</p>
                <p><span className='fw-bold'>Times Worn : </span>{productdetails.worn}</p>
                <p><span className='fw-bold'>Product ID : </span>{id}</p>
                <p>&#8377;{productdetails.price}.00</p>
                <div>
                    QTY : &nbsp;
                    <select>
                        <option value={1}>1</option>
                    </select>
                    <button type="submit" className="btn btn-primary mx-2" onClick={() => addToCart(productdetails)}><i className="bi bi-cart3 fs-3">ADD TO CART</i></button>
                    <button type='button' className='btn btn-primary' onClick={() => addToWishlist(productdetails)}><i className="bi bi-heart-fill fs-4 m-2 me-1">ADD TO WISHLIST
                   </i></button>
                </div>
            </div>      
        </div>
        <Footer/>
    </div>
  )
}
