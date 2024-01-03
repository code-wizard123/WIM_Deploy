import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// eslint-disable-next-line react/prop-types
const SliderComponent = ({ data }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <Carousel responsive={responsive} className="item-carousel" showDots>
      {data.map((item, index) => {
        console.log(item)
        return (
          <div className="item" key={index}>
            <img src={item.data} className="slider-img" alt="" />
          </div>
        );
      })}
    </Carousel>
  );
};

export default SliderComponent;
