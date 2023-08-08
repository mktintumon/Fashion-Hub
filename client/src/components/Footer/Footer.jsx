import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Our vision is simple yet profound: to empower individuals to elevate
            their personal style and boost their confidence through carefully
            selected fashion pieces. We believe that the right accessory can
            transform an outfit from ordinary to extraordinary.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Our dedicated customer support team is here to assist you. 
            Please don't hesitate to contact us. 
            <span><br /><br />
            <b>Email</b> : sup@website.com <br />
            <b>Phone</b> : 9988776655 <br />
            <b>Chat</b> : Available on website
            </span>
            
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Fashion Store</span>
          <span className="copyright">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
