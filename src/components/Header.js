import React, {useState} from "react";
import CallIcon from '@material-ui/icons/Call';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailIcon from '@material-ui/icons/Mail';
import FacebookIcon from '@material-ui/icons/Facebook';
import { Link } from 'react-router-dom';
import "./Header.css";

function Header(){

  return (
    <>
    <div className="main_header">
      <img src="images/logoaa2.png" alt="" className="header_logo" />

      <div className="header_nav">
      <div className="header_option"><Link to='/' className="link-no-underline">Home</Link></div>
        {/* <Link to='/studymaterial'><div className="header_option">Study Material</div></Link> */}
        <div className="header_option"><Link to ='/about'className="link-no-underline">About</Link></div>
        <div className="header_option"><Link to ='/honors'className="link-no-underline">Honors</Link></div>
        <div className="header_option"><Link to ='/reviews'className="link-no-underline">Reviews</Link></div>
        <div className="header_option"><Link to ='/gallery'className="link-no-underline">Gallery</Link></div>

        
        
        
        <div className="header_contact" id="call">
        <a href="tel:9391035332" target="_blank" rel="noreferrer"  ><CallIcon/></a>
        <ul>
          <li>9391035332</li>
        </ul>
        </div>
      <div className="header_contact">
      <a href="mailto:altitudeacademy9.com" target="_blank" rel="noreferrer"  ><MailIcon/></a> 
      </div>
      <div className="header_contact">
        <a href="https://www.instagram.com/altitude_academy/?hl=en" target="_blank" rel="noreferrer"  ><InstagramIcon/></a>
      </div>
      <div className="header_contact">
      <a href="https://www.facebook.com/altitudeacademyhyd/" target="_blank" rel="noreferrer"  ><FacebookIcon/> </a>
      </div>
      
      </div>
      </div>
      </>
  );
}
// Header.defaultProps = {
//   route: "page_header"
// }
export default Header;
