import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import MORTALENGINESBANNER from "../../../assets/Group 11-1@2x.png";
import HOLLYWOODBANNER from "../../../assets/Group 11-2@2x.png";
import BATMANBANNER from "../../../assets/Group 11-3@2x.png";
import VENOMBANNER from "../../../assets/Group 11@2x.png";
import NOPATHBANNER from "../../../assets/NoPath - Copy (20)@2x.png";

const list = [
  VENOMBANNER,
  MORTALENGINESBANNER,
  HOLLYWOODBANNER,
  BATMANBANNER,
  NOPATHBANNER,
];

function CarouselComponent({
  onChange = () => {},
  onClickItem = () => {},
  autoPlay = true,
  interval = 3000,
  stopOnHover = true,
  dynamicHeight = true,
  carouselImageMaxHeight = "55vh",
  carouselImageMinHeight = "55vh",
  carouselImageMinWidth = "100%",
  showIndicators = true,
}) {
  return (
    <Carousel
      id="carousel-component"
      swipeable
      emulateTouch
      showArrows={false}
      onChange={onChange}
      onClickItem={onClickItem}
      autoPlay={autoPlay}
      dynamicHeight={dynamicHeight}
      infiniteLoop
      interval={interval}
      showThumbs={false}
      showStatus={false}
      stopOnHover={stopOnHover}
      showIndicators={showIndicators}
    >
      {list &&
        list.map((value, index) => {
          return (
            <div key={index}>
              <img
                src={value}
                alt=""
                style={{
                  maxHeight: carouselImageMaxHeight,
                  minHeight: carouselImageMinHeight,
                  minWidth: carouselImageMinWidth,
                }}
              />
            </div>
          );
        })}
    </Carousel>
  );
}

export default CarouselComponent;
