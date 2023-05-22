import { useState, useEffect } from 'react'
import '../../apartaments/apartaments.css'

import { useSearchParams } from "react-router-dom";
import {MdEmail} from 'react-icons/md';
import {FaPhoneSquare} from 'react-icons/fa';
import {AiFillFacebook,AiOutlineInstagram} from 'react-icons/ai';
import logo from '../../../assets/mainlogo.svg'

import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import {BsDash} from 'react-icons/bs';
import {MdLocationOn} from 'react-icons/md'

function ContactForm({title}) {

  return (
    <>
    <div className='ContactUs wrap'>
          <h2>{title}</h2>
          <div className='ContactUsWrap'>
            <div className='form'>
              <div>
                <label>Your Name</label>
                <input style={{width: '90%'}} placeholder='Your Name'></input>
              </div>
              <div>
                <label>Your Phone</label>
                <input placeholder='Phone'></input>
              </div>
              <div>
                <label>Your Email</label>
                <input style={{width: '90%'}} placeholder='Email'></input>
              </div>
              <div>
                <label>Topic</label>
                <input placeholder='Topic'></input>
              </div>
              <div className='textarea  '>
                <label>Your Message</label>
                <textarea placeholder='Your Message...'></textarea>
              </div>
              <button className='green'>SEND EMAIL</button>
            </div>
            <div className='contacts'>
              <h5 className='margint0'>OUR CONTACTS</h5>
              <p><MdEmail style={{ verticalAlign: 'middle' }}  size={25}/>yourcyprusrealestate@protonmail.com</p>
              <p>yourcyprusrealestate@info.com</p>
              <p><FaPhoneSquare style={{ verticalAlign: 'middle' }}  size={25}/>000000000</p>
              <p>000000000</p>
              <div className='socials'>
                <h5>OUR SOCIALS</h5>
                <div>
                  <AiFillFacebook size={40}/>
                  <AiOutlineInstagram size={40}/>
                </div>
              </div>
              <img src={logo}/>
            </div>
            <div>
            </div>
          </div>
      </div>
    </>
  )
}

export default ContactForm
