import React, { useRef ,useState,useEffect} from "react";
import { Link } from "react-router-dom";
import indianflag from "../images/indianflag.webp";
import { useCart } from "./CartContext";
// import { Modal, Button, Table } from 'react-bootstrap';

const MyNavbar = () => {
  const {
    cartItems,
    calculateTotalPrice,
    removeFromCart,
    // incrementQuantity,
    // decrementQuantity,
    wishItems, removeFromWishlist, moveFromWishlistToCart, selectedWishlistItems, handleCheckboxChange
  } = useCart();
  const totalPrice = calculateTotalPrice();

  // Create refs for dropdown menus
  const womenDropdownRef = useRef(null);
  const kidsDropdownRef = useRef(null);
  const jewelryDropdownRef = useRef(null);
  const booksDropdownRef = useRef(null);

  // Function to handle hover event for dropdowns
  const handleDropdownHover = (ref) => {
    if (ref.current) {
      ref.current.classList.add("show");
    }
  };

  // Function to handle mouse leave event for dropdowns
  const handleDropdownLeave = (ref) => {
    if (ref.current) {
      ref.current.classList.remove("show");
    }
  };
  const handleMoveSelectedToCart = () => {
    moveFromWishlistToCart();
};


const [isLoggedIn, setIsLoggedIn] = useState(false);
useEffect(() => {
  // localStorage.clear()
  if(localStorage.getItem('token') !== null){
    setIsLoggedIn(true);
  }else{
    setIsLoggedIn(false)
  }
}, [setIsLoggedIn]);
const handlelogout = () => {
// Remove the token from localStorage
localStorage.removeItem("token");
// Update isLoggedIn state to false
setIsLoggedIn(false);
}


  return (
    <>
    <div className='d-md-flex justify-content-between text-center bg-dark text-white '>
                <div className='pt-2'>
                    <button className=' btn ms-lg-5 me-lg-3 text-white ' type="button"  data-bs-toggle="modal" data-bs-target="#exampleModal1">How to buy</button>
                    <button className='btn ms-lg-4 me-lg-4 ms-4 text-white' type="button"  data-bs-toggle="modal" data-bs-target="#exampleModal2">How to sell</button>
                </div>
                <div  className='mt-2'>
                    <p>FREE SHIPPING On All Orders.</p>
                </div>
              

            <img src={indianflag} alt='indian flag' className='mt-2 me-1' style={{width:'50px',height:"35px"}}/>

            </div>
      <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
      <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarTogglerDemo03"
                aria-controls="navbarTogglerDemo03"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
        <div className="ms-5">
          <Link to="/" className="text-decoration-none text-dark">
            Home
          </Link>
        </div>
        <div className="ms-5">
          <Link to="/addproduct" className="text-decoration-none text-dark">
            Add Prod
          </Link>
        </div>
        <div
          className="collapse navbar-collapse d-md-flex justify-content-around"
          id="navbarTogglerDemo03"
        >
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li
              className="nav-item dropdown"
              onMouseEnter={() => handleDropdownHover(womenDropdownRef)}
              onMouseLeave={() => handleDropdownLeave(womenDropdownRef)}
            >
              <Link
                className="nav-link ps-3 pe-3"
                to="/women"
                id="navbarDropdownWomen"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                WOMEN
              </Link>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownWomen"
                ref={womenDropdownRef}
              >
                <Link className="dropdown-item" to="/highendcouture">
                  High end Couture
                </Link>
                <Link className="dropdown-item" to="/sarees">
                  Sarees
                </Link>
                <Link className="dropdown-item" to="/lehanga">
                  Lehenga
                </Link>
                <Link className="dropdown-item" to="/dresses">
                  Dresses
                </Link>
                <Link className="dropdown-item" to="/twinningoutfits">
                  Twinning Outfits
                </Link>
              </div>
            </li>
            <li
              className="nav-item dropdown"
              onMouseEnter={() => handleDropdownHover(kidsDropdownRef)}
              onMouseLeave={() => handleDropdownLeave(kidsDropdownRef)}
            >
              <Link
                className="nav-link ps-3 pe-3"
                to="/kids"
                id="navbarDropdownKids"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                KIDS
              </Link>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownKids"
                ref={kidsDropdownRef}
              >
                <Link className="dropdown-item" to="/girl">
                  Girl
                </Link>
                <Link className="dropdown-item" to="/boy">
                  Boy
                </Link>
              </div>
            </li>
            <li
              className="nav-item dropdown"
              onMouseEnter={() => handleDropdownHover(jewelryDropdownRef)}
              onMouseLeave={() => handleDropdownLeave(jewelryDropdownRef)}
            >
              <Link
                className="nav-link ps-3 pe-3"
                to="/jewelry"
                id="navbarDropdownKids"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                JEWELRY
              </Link>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownKids"
                ref={jewelryDropdownRef}
              >
                <Link className="dropdown-item" to="/jewelrycollection">
                  Collection
                </Link>
              </div>
            </li>
            <li
              className="nav-item dropdown"
              onMouseEnter={() => handleDropdownHover(booksDropdownRef)}
              onMouseLeave={() => handleDropdownLeave(booksDropdownRef)}
            >
              <Link
                className="nav-link ps-3 pe-3"
                to="/books"
                id="navbarDropdownKids"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                BOOKS
              </Link>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownKids"
                ref={booksDropdownRef}
              >
                <Link className="dropdown-item" to="/bookscollection">
                  Book Collections
                </Link>
              </div>
            </li>
          </ul>
          <div className="d-md-flex justify-content-evenly">
            <div className="m-4">
            {isLoggedIn ? (
                  <>
              <div  >
                  <Link to='/' className='text-decoration-none text-dark' onClick={handlelogout}>Log Out</Link>
                </div>
                <div >
                  <Link to='/customerinfo' className='text-decoration-none text-dark'>My Account</Link>
                </div>
                </>
                ) : (

                <div>
                  <Link to='/login' className='text-decoration-none text-dark'>REGISTER/LOGIN</Link>
                </div>                   
                )}
            </div>
            <div className="">
              <button
                className="btn cartBtn "
                data-bs-toggle="modal"
                data-bs-target="#myModal2"
              >
                {" "}
                <i className="bi bi-heart-fill fs-4 m-2 me-1">
                  {" "}
                  <span>({wishItems.length})</span>
                </i>
              </button>
              <button
                className="btn cartBtn "
                data-bs-toggle="modal"
                data-bs-target="#myModal1"
              >
                {" "}
                <i className="bi bi-cart3 fs-3">
                  {" "}
                  <span>({cartItems.length})</span>
                </i>
              </button>
            </div>
          </div>
        </div>
      </nav>
     
      <div className="modal"  id="myModal1">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>

            <div className="modal-body"  id="showmod"></div>

            <table class="table table-hover">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product Name</th>
                  <th>Product Image</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((product, index) => (
                  <tr key={index}>
                    <td>
                      <button
                        type="button"
                        className="btn-close w-50"
                        onClick={() => removeFromCart(product.id)}
                      ></button>
                    </td>
                    <td>
                      <img
                        src={product.image}
                        alt={product.name}
                        style={{ maxWidth: "50px", maxHeight: "80px" }}
                      />
                    </td>
                    <td className="text-secondary">{product.name}</td>

                    {/* <td>
                      <button
                        className="btn btn-outline-secondary"
                        onClick={() => decrementQuantity(index)}
                      >
                        -
                      </button>
                      <span className="mx-2">{product.quantity}</span>
                      <button
                        className="btn btn-outline-secondary"
                        onClick={() => incrementQuantity(index)}
                      >
                        +
                      </button>
                    </td> */}
                    <td>{product.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="modal-footer d-md-flex justify-content-between">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <p className="mr-5">Total Price: {totalPrice}</p>
            </div>
          </div>
        </div>
      </div>
         {/* wishmodal */}
         <div className="modal" id="myModal2">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>

            <div className="modal-body" id="showmod"></div>

            <table class="table table-hover ">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Action</th>
                  <th>Product Image</th>
                  <th>Product Name</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {wishItems.map((product, index) => (
                  <tr key={index}>
                    <td>
                      <button
                        type="button"
                        className="btn-close w-50"
                        onClick={() => removeFromWishlist(product.id)}
                      ></button>
                    </td>
                    <td>
                                <input
                                    type="checkbox"
                                    checked={selectedWishlistItems.includes(product.id)}
                                    onChange={() => handleCheckboxChange(product.id)}
                                />
                            </td>
                    <td>
                      <img
                        src={product.image}
                        alt={product.name}
                        style={{ maxWidth: "50px", maxHeight: "80px" }}
                      />
                    </td>
                    <td className="text-secondary">{product.name}</td>
                    <td>{product.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button className="btn btn-primary" onClick={handleMoveSelectedToCart} disabled={selectedWishlistItems.length === 0}>Add to Cart</button>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyNavbar;
