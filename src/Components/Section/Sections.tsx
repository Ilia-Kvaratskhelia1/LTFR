import React, { useRef, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "./Section.css";
import "@splidejs/splide/dist/css/splide.min.css";
function Sections() {
  const hand = [
    "https://i.ytimg.com/vi/mVNc9I6rjbQ/maxresdefault.jpg",
    "https://static.dezeen.com/uploads/2019/11/MaximeMach_dezeen_hero4.jpg",
    "https://static.dezeen.com/uploads/2019/11/MaximeMach_dezeen_hero5.jpg",
    "https://i1.sndcdn.com/artworks-000606094630-jxqw6k-t500x500.jpg",
    "https://i.ytimg.com/vi/xOskwpA_TwE/maxresdefault.jpg",
  ];
  return (
    <div className="mainSlideCont" id="sectionSlide">
      <section className="sectCont">
        <div className="mainSliderContainer">
          <Splide
            options={{
              perPage: 1,
              waitForTransition: true,
              type: "loop",
              rewind: false,
              speed: 990,
            }}
          >
            {hand.map((images) => {
              return (
                <SplideSlide >
                  <img className="sliderImage" src={images} />
                </SplideSlide>
              );
            })}
          </Splide>
        
        </div>
      </section>
    </div>
  );
}

export default Sections;
