import React from "react";
import logo from "../../images/logo.png";
import contactIcon from "../../images/icons/contact.png";
import searchIcon from "../../images/icons/search.png";
import likeIcon from "../../images/icons/like.png";
import cartIcon from "../../images/icons/cart.png";
import "./Furniro.css";
import dining from "../../images/diningImg.png";
import living from "../../images/livingImg.png";
import bedroom from "../../images/bedroom.png";

const FurniroHome = () => {

  const flexStyle = {
    display: "flex",
    justifyContent: 'center',
    gap: '1rem',
    textAlign: 'center',
    fontWeight: '900'
  }

  return (
    <div>
      <header>
        <div>
          <img src={logo} alt="" width={250} />
        </div>
        <div className="links">
          <a href="">Home</a>
          <a href="">Shop</a>
          <a href="">About</a>
          <a href="">Contact</a>
        </div>
        <div id="icon-div">
          <img src={contactIcon} alt="" />
          <img src={searchIcon} alt="" />
          <img src={likeIcon} alt="" />
          <img src={cartIcon} alt="" />
        </div>
      </header>
      <main>
        <div className="hero">
          <div className="hero-section">
            <h3>New Arrival</h3>
            <h1>Discover Our New Collection</h1>
            <p>
              Discover new luxury trends of all brands and style at affordable
              and prices
            </p>
            <button>Buy Now</button>
          </div>
        </div>
        <h2>Browse The Range</h2>
        <p>lorem ipsium dolor sit amet consecutetur adipiscing elit.</p>
        <div style={flexStyle}>
          <div>
            <img src={dining} alt="" height={200} width={400} />
            <p>Dining</p>
          </div>
          <div>
            <img src={living} alt="" height={200} width={400} />
            <p>Living</p>
          </div>
          <div>
            <img src={bedroom} alt="" height={200} width={400} />
            <p>Bedroom</p>
          </div>
        </div>
        <h2>Our Products</h2>
      </main>
    </div>
  );
};

export default FurniroHome;
