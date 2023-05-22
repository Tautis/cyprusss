import { useState, useEffect } from 'react'
import '../apartaments/apartaments.css'
import NavBar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'
import { useSearchParams } from "react-router-dom";
import ruApartaments from '../../assets/apt_ru.json'
import euApartaments from '../../assets/apt_en.json'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import {BsDash} from 'react-icons/bs';
import {MdLocationOn,MdOutlineKeyboardArrowDown} from 'react-icons/md'
import ContactForm from '../components/contactForm/contactForm';
import RecentlyVisited from '../components/recentlyVisited/recently';
import RecentlyVisitedStorage from '../../../../recentStorage';
function Apartaments() {
    const [id, setId] = useState(null);
    const [data, setData] = useState([]);
    const [objectImages, setObjectImages] = useState([]);
    const [images, setImages] = useState([]);
    const [FeaturesClicked, setFeaturesClicked] = useState(false);
    const [LocationClicked, setLocationClicked] = useState(false);
    var imageThumbs = document.getElementById("image-thumbs");
    var currentImage = document.getElementById("current-image");


    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');
        setId(id);
        const item = euApartaments.find(item => item.id === id);
        setData(item);
        setObjectImages(item.images)

        // You can now use the ID value in your component logic
      }, []);

      useEffect(() => {
       console.log(data.images)
       setImages(objectImages.map((url) => ({
        original: url,
        thumbnail: url,
      })));
      console.log(images)
        // console.log(myArray);

        // const images = data.map((original,thumbnail) =>({imagees}))

      }, [data]);
      
      const handleClickFeatures = () => {
        if(FeaturesClicked)
          setFeaturesClicked(false)
        else
          setFeaturesClicked(true);
      };  
      const handleClickLocation = () =>{
        console.log(LocationClicked)
        if(LocationClicked)
          setLocationClicked(false);
        else
          setLocationClicked(true)
        }
  return (
    <>


    <NavBar/>



    <div className='apartament-container'>
      <div className='apartament-leftBox'>
        <h2>{data.title} {id}</h2>
        <div id="image-gallery">
        <ImageGallery items={images} />;
        </div>
      </div>
      <div className='apartament-rightBox'>
        <div className='price-wrap'>
          <div><p>{data.price}</p></div>
          <div><p>{data.pricepm2}</p></div>
        </div>
        <div className='location-wrap'>
          <p><MdLocationOn/></p>
          <p className='location'>{data.location}</p>
          </div>
        <div className='general-info'>
          <div>
            <p>TOTAL AREA:</p>
            <p className='m2bedroomValues'>{data.m2}m²</p>
          </div>
          <div>
            <p>BEDROOMS</p>
            <p className='m2bedroomValues'>{data.bedrooms}</p>
          </div>
          <div>
            <p>BATHROOMS</p>
            <p className='m2bedroomValues'>{data.bathrooms}</p>
          </div>
        </div>
        <div className='description-wrap'>
        <p>DESCRIPTION</p>
        <p className='bigText'>{data.text}</p>
        </div>
        <div className='location_features'>
          <div>
            <div className='Name'  onClick={handleClickFeatures}>
              <p>FEATURES</p>
              {FeaturesClicked ? <p className='textRight'><MdOutlineKeyboardArrowDown/></p> :<p className='textRight'><BsDash/></p> }
            </div>
            <div>
              {FeaturesClicked && <p>{data.features}</p>}
            </div>
          </div>
          <div className='borderB'>
            <div className='Name' onClick={handleClickLocation}>
              <p>LOCATION</p>
              
              {LocationClicked ? <p className='textRight'><MdOutlineKeyboardArrowDown/></p> :<p className='textRight'><BsDash/></p> }
            </div>
            <div>
              {LocationClicked && <p>{data.locationdesc}</p>}
            </div>
          </div>
          </div>

      </div>
      
    </div>
    <ContactForm title="Inquire about this property"/>
    <RecentlyVisited/>
    <Footer/>
    </>
  )
}

export default Apartaments
