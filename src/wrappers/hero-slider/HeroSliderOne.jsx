import React from "react";
import HeroSliderOneItem from "../../components/hero-slider/HeroSliderOneItem";
import heroSliderData from "../../data/hero-slider/hero-slider-one.json";
import SimpleImageSlider from "react-simple-image-slider";
// import { API_URL } from "../../helpers";
// import { useSelector, useDispatch } from "react-redux";
// import { fetchSlidesItems } from "../../redux/actions/slidesitemActions";

const HeroSliderOne = ({slidesitems}) => {

  return (
    <div className="slide-area">
      <div className="wrapper">
        { <SimpleImageSlider
          width={"100%"}
          height={600}
          images={ slidesitems && slidesitems.filter((item) =>
            item.key === "home-slideshow" ? item : ""
          )}
          showBullets={true}
          showNavs={false}
          loop={true}
          autoPlay={true}
          style={{
            backgroundPosition: "top",
            objectFit: "cover",
            objectPosition: "left",
          }}
          // autoPlayDelay={2000}

        /> }


         {slidesitems &&
          slidesitems.map((item, key) => {
            if (item.key == "home-slideshow") {
              return <HeroSliderOneItem data={item} key={key} />;
            }
          })} 

      </div>
    </div>
  );
};

export default HeroSliderOne;
