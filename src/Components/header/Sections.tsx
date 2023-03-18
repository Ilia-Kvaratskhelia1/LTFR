import React, { useRef, useState } from 'react'
import "./Section.css";
import {Splide , SplideSlide} from "@splidejs/react-splide"
import '@splidejs/splide/dist/css/splide.min.css';

function Sections() {
  const hand = [  
    "https://i.ytimg.com/vi/mVNc9I6rjbQ/maxresdefault.jpg" ,
  "https://static.dezeen.com/uploads/2019/11/MaximeMach_dezeen_hero5.jpg" ,
 "https://agenda.ge/files/ArtNCulture2/ArtNCulture3/kayakata-european-indie-album-no.jpg" ,
  "https://static.dezeen.com/uploads/2019/11/MaximeMach_dezeen_hero4.jpg",
"https://i.ytimg.com/vi/xOskwpA_TwE/maxresdefault.jpg"]
  return (
    <>
        <section>
          
        <div className='mainSliderContainer'>
  
      <Splide
      options={{
        perPage:1,
        waitForTransition:true,
      }}
      >
        
        {hand.map((images)=>{
          return (
        <SplideSlide  style={{transition:"1s"}}>
          <img  className='sliderImage' src={images}/>
        </SplideSlide>
        )
        })}

      </Splide>
        </div>
        
        
        </section>
    </>
  )
}

export default Sections