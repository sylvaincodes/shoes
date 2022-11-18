import React from "react";
import HeroSliderOneItem from "../../components/hero-slider/HeroSliderOneItem";
import heroSliderData from "../../data/hero-slider/hero-slider-one.json";
import SimpleImageSlider from "react-simple-image-slider";

const HeroSliderOne = () => {
 
  return (
    <div className="slide-area">
      <div className="wrapper">
       

        <SimpleImageSlider
          width={"100%"}
          height={600}
          images={heroSliderData}
          showBullets={true}
          showNavs={true}
          loop={true}
          autoPlay={false}
          style={{ 
            backgroundPosition:'top',
            objectFit:'cover',
            objectPosition:'left',
          }} 
        />

            {heroSliderData &&
              heroSliderData.map((item, key) => {
                return <HeroSliderOneItem data={item} key={key} />;
            })}
       
      </div>
    </div>
  );
};

export default HeroSliderOne;
