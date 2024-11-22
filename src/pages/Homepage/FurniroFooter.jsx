import React from "react";
import "../Homepage/footer.css";

const FurniroFooter = () => {
  const fontStyle = {
    fontWeight: "700",
  };

  return (
    <div>
      <div className="footer-flex">
        <div>
          <h4>Furniro.</h4>
          <p>
            400 University Drive Suit 200 Coral <br /> Gables. <br /> FL 33134
            USA
          </p>
        </div>
        <div style={fontStyle}>
          <h5>Links</h5>
          <a href="">Home</a>
          <a href="">Shop</a>
          <a href="">About</a>
          <a href="">Contact</a>
        </div>
        <div style={fontStyle}>
          <h5>Help</h5>
          <p>Payment Optios</p>
          <p>Returns</p>
          <p>Privacy policies</p>
        </div>
        <div style={fontStyle}>
          <h5>NewsLetter</h5>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default FurniroFooter;
