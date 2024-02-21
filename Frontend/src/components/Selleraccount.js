import React from "react";
import Footer from "./footer";
import Menu from "./menu";
import MyNavbar from "./navbar";

export default function Selleraccount() {
  return (
    <div>
      <MyNavbar />
      <img
        src="https://png.pngtree.com/background/20230612/original/pngtree-shopping-cart-floating-around-a-digital-background-with-modern-elements-picture-image_3362317.jpg"
        alt="aboutus"
        width="100%"
        height="350px"
      ></img>
      <div className="d-lg-flex justify-content-around p-md-4 ps-lg-5 pe-lg-5">
        <div className="col-lg-3 col-xs-12 col-md-12">
          <Menu />
        </div>

        <div className="col-xs-12 col-md-12 col-lg-9 ps-3">
          <section>
            <p>Hello!</p>
            <p>
              You are registering here as a Seller. Kindly go through the Seller
              Terms before registering, those terms of use are a contract
              between you and Closet Bargain, and any violation of them will not
              be accepted. Once you register, it automatically means that you
              have given your consent to our terms and have agreed to follow
              those without any exceptions.
            </p>
            <p>
              Please enter your details accurately. Bargain is not responsible
              for any incorrect information provided by you. Note that there
              will be delays in remitting funds to you if you enter incorrect
              details.
            </p>
            <p>
              UPI ID is the only payment option we accept and this is needed for
              remitting funds to your account, and the payout is 85% of your
              product listing price.
            </p>
            <p>- Team Bargain</p>
          </section>
          <form className="m-3">
            <div className="d-md-flex col-md-8 col-xs-12 mt-3 mb-3">
              <label htmlFor="sellername" className="col-md-3">
                <b>Seller Name</b>
              </label>
              <div className="d-flex col-md-8">
                <input
                  type="text"
                  className="col-md-5 form-control"
                  id="sellername"
                  name="sellername"
                  placeholder="Enter Your Name"
                  required
                ></input>
                &nbsp;<span className="text-danger fs-4">*</span>
              </div>
            </div>
            <div className="d-md-flex col-md-8 col-xs-12 mt-3 mb-3">
              <label htmlFor="email" className="col-md-3">
                <b>Email</b>
              </label>
              <div className="d-flex col-md-8">
                <input
                  type="email"
                  className="form-control col-md-5"
                  id="email"
                  name="email"
                  placeholder="Enter Your Email Address"
                ></input>
                &nbsp;<span className="text-danger fs-4">*</span>
              </div>
            </div>
            <div className="d-md-flex col-md-8 col-xs-12 mt-3 mb-3">
              <label htmlFor="remittance" className="col-md-3">
                <b>Remittance Type</b>
              </label>
              <div className=" col-md-8">
                <select
                  className="form-select w-50"
                  id="remittance"
                  name="remittance"
                >
                  <option value="upiId">UPI ID</option>
                </select>
                <p>
                  Bargain will pay you 85% of your selling price. This lower
                  payout is to cover for the UPI charges to remit payment to you
                </p>
              </div>
            </div>
            <div className="d-md-flex col-md-8 col-xs-12 mt-3 mb-3">
              <label htmlFor="instaid" className="col-md-3">
                <b>Instagram ID</b>
              </label>
              <div className="d-flex col-md-8">
                <input
                  type="text"
                  className="form-control col-md-5"
                  id="instaid"
                  name="instaid"
                  placeholder="Enter Your Instagram ID"
                ></input>
              </div>
            </div>
            <div className="d-md-flex col-md-8 col-xs-12 mt-3 mb-3">
              <label htmlFor="phone" className="col-md-3">
                <b>Phone</b>
              </label>
              <div className="d-flex col-md-8">
                <input
                  type="tel"
                  className="form-control col-md-5"
                  id="phone"
                  name="phone"
                  placeholder="Enter Your Mobile Number"
                ></input>
                &nbsp;<span className="text-danger fs-4">*</span>
              </div>
            </div>
            <div className="d-md-flex col-md-8 col-xs-12 mt-3 mb-3">
              <label htmlFor="upiid" className="col-md-3">
                <b>UPI ID</b>
              </label>
              <div className="d-flex col-md-8">
                <input
                  type="text"
                  className="form-control col-md-5"
                  id="upiid"
                  name="upiid"
                  placeholder="Enter Your UPI ID info"
                ></input>
                &nbsp;<span className="text-danger fs-4">*</span>
              </div>
            </div>
            <div className="d-md-flex col-md-8 col-xs-12 mt-3 mb-3">
              <label htmlFor="description" className="col-md-3">
                <b>Description</b>
              </label>
              <div className="d-flex col-md-8">
                <textarea
                  id="description"
                  className="col-md-5 form-control"
                  name="description"
                  rows="2"
                  cols="40"
                ></textarea>
              </div>
            </div>
            <div className="d-md-flex col-md-8 col-xs-12 mt-3 mb-3">
              <div className="col-md-3"></div>
              <button type="submit" className="btn btn-success col-md-3">
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
