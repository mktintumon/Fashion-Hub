import React from "react";
import "./Store.scss"

function Stores() {
  return (
    <div className="stores">
        <h1>OUR STORES</h1><br />
        <hr /><br />
      <b>STORE 1:</b>
      <ul>
        <li>Branch Location: 123 Fashion Avenue, Cityville </li>
        <li> Phone: (123) 456-7890</li>
        <li>Email: cityville@urbanchicboutique.com </li><br />
         <b><u>Store Hours:</u> </b>
        <li>Monday-Saturday:10:00 AM - 7:00 PM,</li> 
        <li>Sunday: 11:00 AM - 5:00 PM </li><br />
        
        <li>Manager: Sarah Smith</li>
        <li>Description: Our Cityville branch brings you the latest trends and urban
        fashion styles. From casual to formal, find the perfect ensemble that
        matches your city vibe.</li>
      </ul>
        <br /><hr />
        <br /><br />
      <b>STORE 2:</b>
      <ul>
        <li>Branch Location: 123 Avenue, New york </li>
        <li> Phone: (123) 356-7890</li>
        <li>Email: cityville@urbanchicboutique.com </li><br />
        <b><u>Store Hours:</u></b> 
        <li>Monday-Saturday:10:00 AM - 7:00 PM,</li> 
        <li>Sunday: 11:00 AM - 5:00 PM </li><br />
        
        <li>Manager: Jay Smith</li>
        <li>Description: Our Cityville branch brings you the latest trends and urban
        fashion styles. From casual to formal, find the perfect ensemble that
        matches your city vibe.</li>
      </ul>
      <br /><hr />
      
    </div>
  );
}

export default Stores;
