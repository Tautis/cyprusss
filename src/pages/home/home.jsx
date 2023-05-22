import { useState } from 'react'
import './home.css'
import bgvideo from '../../assets/video2.mp4';
import ruText from '../../assets/apt_en.json'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import testimage from '../../assets/first.png';
import card from '../../assets/card.png';
import {MdEmail} from 'react-icons/md';
import {FaPhoneSquare} from 'react-icons/fa';
import {AiFillFacebook,AiOutlineInstagram} from 'react-icons/ai';
import "swiper/css/navigation";
import SwiperCore, {
  Navigation
} from 'swiper';
import logo from '../../assets/mainlogo.svg'
import Footer from '../components/footer/footer';
import NavBar from '../components/navbar/navbar';
import ContactForm from '../components/contactForm/contactForm';
function Home() {
  let data = ruText;
  let popular = [];
  let popular2 = [];
  for (let index = 0; index != 6; index++) {
      popular.push(data[index])   
  }
  for (let index = 0; index != 3; index++) {
    popular2.push(data[index])   
}
SwiperCore.use([Navigation]);
  return (
    <>
    <NavBar/>
      <div className='videodiv'>
        <video autoPlay loop muted playsinline>
          <source src={bgvideo} type="video/mp4"/>
        </video>
        <div className="videoMessage" >
          <h2>SAVE 10%</h2>
          <h1>ON SPECIAL OFFERS</h1>
          <button>LEARN MORE</button>
        </div>
        <div>
          <div className='SearchWrap'>
            <div className='region'>
              <label>Region</label>
              <input placeholder='Kyrentia District'></input>
            </div>
            <div className='type'>
            <label>Type</label>
              <input placeholder='Villa'></input>
            </div>
    
            <div className='price'>
            <label>Price Range</label>
            <input placeholder='5300$ - 150000$'></input>

            </div>
            <div className='currency'>
            <label>Currency</label>
            <input placeholder='$ USD'></input>

            </div>
            <div className='sortBy'>
            <label>Sort By</label>
              <input placeholder='Most Wanted'></input>
            </div>
            <div className='search'>
              <label></label>
              <button>SEARCH</button>
            </div>
          </div>
        </div>
      </div>
      <div className='popular wrap'>
        <h2>POPULAR APARTAMENTS</h2>
          <div className='popWrap'>
          {popular.map((data,key)=>{
            return(
              <a href={'/apartaments?id='+data.id}>
                <div className='popchild'>
                <img src={data.images[1]}/>
                <h5>{data.location}</h5>
                {data.title}
                <p>From:{data.price} </p>
                </div>
              </a>
            )
          })}
          </div>
          <button className='transparent black'>VIEW ALL</button>
      </div>
      <div className='learn-wrap wrap'>
        <h2>LEARN MORE ABOUT CYPRUS</h2>
        <div className='learn'>

          <div className='learn-child1'>
            <h2>Why to buy a property in North Cyprus?</h2>
          </div>

          <div className='learn-child2 '>
            <div style={{marginBottom: '20px'}}>
            <h2>12 Things We'd Tell Any New Travelers</h2>
            </div>
            <div>
            <h2>Discover North Cyprus Now!</h2>
              
            </div>
          </div>

          <div className='learn-hor blogNormal'>

                <div className='learn-child3 text-left'>
                  <div className='chilchild'>

                  </div>
                  <div>
                    <h3>Title</h3>
                    <p>about about aboutabout about aboutabout about aboutabout about aboutabout about about</p>
                    <a>Read More →</a>
                  </div>
                </div>

              <div className='learn-child4 text-left'>
                <div className='chilchild'>

                </div>
                <div>
                <h3>Title</h3>
                  <p>about about aboutabout about aboutabout about aboutabout about aboutabout about about</p>
                  <a>Read More →</a>

                </div>
              </div>

              <div className='learn-child5 text-left'>
                <div className='chilchild'>

                </div>
                <div>
                <h3>Title</h3>
                  <p>about about aboutabout about aboutabout about aboutabout about aboutabout about about</p>
                  <a>Read More →</a>
                </div>
              </div>

              <div className='learn-child6 text-left'>
                <div className='chilchild'>

                </div>
                <div>
                <h3>Title</h3>
                  <p>about about aboutabout about aboutabout about aboutabout about aboutabout about about</p>
                  <a>Read More →</a>
                </div>
              </div>

              <div className='learn-child7 text-left'>
                <div className='chilchild'>

                </div>
                <div>
                <h3>Title</h3>
                  <p>about about aboutabout about aboutabout about aboutabout about aboutabout about about</p>
                  <a>Read More →</a>
                </div>
              </div>

              <div className='learn-child8 text-left'>
                <div className='chilchild'>

                </div>
                <div>
                <h3>Title</h3>
                  <p>about about aboutabout about aboutabout about aboutabout about aboutabout about about</p>
                  <a>Read More →</a>
                </div>
              </div>

          </div>

          <div className='learn-hor blogSwipe'>
              <Swiper
              navigation={true}
              className="mySwiper"
              slidesPerView={2}
              >
                <SwiperSlide>
                  
                <div className='learn learn-child3 text-left'>
                  <div className='chilchild'>

                  </div>
                  <div className='cardText'>
                    <h3>Title</h3>
                    <p>about about aboutabout about aboutabout about aboutabout about aboutabout about about</p>
                    <a>Read More →</a>
                  </div>

                </div>
              </SwiperSlide>
              <SwiperSlide>

              <div className='learn learn-child4 text-left'>
                <div className='chilchild'>

                </div>
                <div className='cardText'>
                <h3>Title</h3>
                  <p>about about aboutabout about aboutabout about aboutabout about aboutabout about about</p>
                  <a>Read More →</a>

                </div>

              </div>
              </SwiperSlide>
              <SwiperSlide>

              <div className='learn learn-child5 text-left'>

                <div className='chilchild'>

                </div>
                <div className='cardText'>
                <h3>Title</h3>
                  <p>about about aboutabout about aboutabout about aboutabout about aboutabout about about</p>
                  <a>Read More →</a>
                </div>

              </div>
              </SwiperSlide>

            <SwiperSlide>
              <div className='learn learn-child6 text-left'>
                <div className='chilchild'>

                </div>
                <div className='cardText'>
                <h3>Title</h3>
                  <p>about about aboutabout about aboutabout about aboutabout about aboutabout about about</p>
                  <a>Read More →</a>
                </div>
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className='learn learn-child7 text-left'>
                <div className='chilchild'>

                </div>
                <div className='cardText'>
                <h3>KAKAS</h3>
                  <p>about about aboutabout about aboutabout about aboutabout about aboutabout about about</p>
                  <a>Read More →</a>
                </div>
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className='learn learn-child8 text-left'>
                <div className='chilchild'>

                </div>
                <div className='cardText'>
                <h3>PAPAS</h3>
                  <p>about about aboutabout about aboutabout about aboutabout about aboutabout about about</p>
                  <a>Read More →</a>
                </div>
              </div>
              </SwiperSlide>
              </Swiper>
          </div>

          </div>
          <button className='transparent black'>VIEW ALL</button>

      </div>
      <div className='blackbox'>
        <div className='inside'>
          <h3>Your Cyprus</h3>
          <h2>Start Searching For Awesome Properties</h2>
          <button className='transparent white white-border'>GET STARTED</button>
        </div>
      </div>
      <div className='testimonials wrap'>
        <h2>TESTIMONIALS</h2>
        <h4>Get the real inside story from our customers just like you</h4>
      <Swiper 
      className="mySwiper"
      navigation={true}
      breakpoints={{
        // when window width is >= 640px
        100: {
          slidesPerView: 1,
        },
        // when window width is >= 768px
        900: {
          slidesPerView: 3,
        },
      }}
      spaceBetween={50}
      slidesPerView={4}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      
      <SwiperSlide>
        <div>
        <img src={testimage}/>
        </div>
        <div>
          <h3 className='marginb0'>Jason Bourne</h3>
          <h5 className='margint0'>CLIENT</h5>
          <p>We used Your Cyprus to buy our dream summer home in North Cyprus and they were outstanding. Helped to find the best home matching all our priorities. Near beach,new building, great staff, oparking,pools & everything just as we wanted. More than clean & easy work process with these guys.</p>
        </div>
        </SwiperSlide>
      <SwiperSlide>
      <div>
        <img src={testimage}/>
        </div>
        <div>
          <h3 className='marginb0'>Jason Bourne</h3>
          <h5 className='margint0'>CLIENT</h5>
          <p>We used Your Cyprus to buy our dream summer home in North Cyprus and they were outstanding. Helped to find the best home matching all our priorities. Near beach,new building, great staff, oparking,pools & everything just as we wanted. More than clean & easy work process with these guys.</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div>
        <img src={testimage}/>
        </div>
        <div>
          <h3 className='marginb0'>Jason Bourne</h3>
          <h5 className='margint0'>CLIENT</h5>
          <p>We used Your Cyprus to buy our dream summer home in North Cyprus and they were outstanding. Helped to find the best home matching all our priorities. Near beach,new building, great staff, oparking,pools & everything just as we wanted. More than clean & easy work process with these guys.</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div>
        <img src={testimage}/>
        </div>
        <div>
          <h3 className='marginb0'>Jason Bourne</h3>
          <h5 className='margint0'>CLIENT</h5>
          <p>We used Your Cyprus to buy our dream summer home in North Cyprus and they were outstanding. Helped to find the best home matching all our priorities. Near beach,new building, great staff, oparking,pools & everything just as we wanted. More than clean & easy work process with these guys.</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div>
        <img src={testimage}/>
        </div>
        <div>
          <h3 className='marginb0'>Jason Bourne</h3>
          <h5 className='margint0'>CLIENT</h5>
          <p>We used Your Cyprus to buy our dream summer home in North Cyprus and they were outstanding. Helped to find the best home matching all our priorities. Near beach,new building, great staff, oparking,pools & everything just as we wanted. More than clean & easy work process with these guys.</p>
        </div>
      </SwiperSlide>
    </Swiper>
      </div>
      <div className='aboutUs wrap'>
          <h2>ABOUT US</h2>
          <p>Welcome to Your Cyprus Real Estate</p>
          <p>We are your agency for best Real Estate in Cyprus deals & offers. We only work with projects which are newest, best in quality & price. Our team will gladly give you additional information and will arrange arrivals to see the properties you like - live</p>
          <p>Have any questions? Feel free to <a>Contact Us.</a></p>
      </div>
      <div className='aboutUsCards'>
          <div><img src={card}/><p>A beachfront home in Iskele, North Cyprus, is ranked as the world's top investment in 2021 for those looking to live or retire abroad</p></div>
          <div><img src={card}/><p>Covid Safe -</p>
          <p> We have all the curated hotels that  have all the precaution for a Covid safe environment.</p></div>
          <div><img src={card}/><p>There are several special offers on completed new builds with very good financial plans.</p></div>
          <div><img src={card}/><p>Possible to visit a property live with people who work directly for the developer.
Visiting the project or property, learning about the views.</p></div>
      </div>
      <ContactForm title="CONTACT US"/>
      <div className='wrap'>
        <h2>LATEST PROPERTIES</h2>
        <p>Check out some of the newest properties for SALE in North Cyprus</p>
        <div className='newest'>
        <div className='popWrap2'>
        {popular2.map((data,key)=>{
            return(
              <div className='popchild'>
                <img src={data.images[1]}/>
                <h5>{data.location}</h5>
                {data.title}
                <p>From:{data.price} </p>
              </div>
            )
          })}
        </div>
        <button className='transparent black'>VIEW ALL</button>
      </div>
      </div>
      <div className='blackbox'>
        <h3>Your Cyprus</h3>
        <h2>Start Investing in Real Estate Now & Let us Help You with anything and everything</h2>
        <button className='transparent white white-border'>SEARCH</button>
      </div>
      <Footer/>
    </>
  )
}

export default Home
