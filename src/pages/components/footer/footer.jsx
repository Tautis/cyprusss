import { useState } from 'react'
import '../footer/footer.css'
import logo from '../../../assets/mainlogo.svg'
import logoW from '../../../assets/logo_W_NoText.svg'
import {AiFillFacebook,AiOutlineInstagram} from 'react-icons/ai';

function Footer() {
  return (
    <div className='footer'>
      <div className='footer-wrap'>
      <div>
        <h3>CONTACT US</h3>
        <p>yourcyprusrealestate@protonmail.com</p>
        <p>yourcyprusrealestate@info.com</p>
        <p>000000000</p>
        <p>000000000</p>
        <p>Adress</p>
      </div>
      <div>
        <h3>QUICK LINKS</h3>
        <p>Home</p>
        <p>About Us</p>
        <p>Our Apartaments</p>
        <p>Reviews</p>
        <p>Our Blog</p>
      </div>
      <div className='text_center'>
        <h3 className='line'>INFORMATION</h3>
        <p>CONTACT US FORM</p>
        <img src={logoW}/>
      </div>
      <div>
        <h3>CONTACT US</h3>
        <p>Want to speak with our team & get the latest best deals first?</p>
        <p>Leave your Email here!</p>
        <div className='footerEmail'>
          <input placeholder='Email'></input>
          <button>SEND</button>
        </div>
        <div className='Footersocials'>
          <AiFillFacebook size={40}/>
          <AiOutlineInstagram size={40}/>
        </div>
      </div>
    </div>
    <p className='footerText'>Copyright @ 2023<span className='greenT'>YourCyprus.</span>All rights reserved</p>
    </div>
  )
}

export default Footer
