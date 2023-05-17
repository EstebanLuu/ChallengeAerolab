import "./Slider.css";
import data from "../mocks/slider-result.json";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { FC } from "react";

interface Movie {
  imdbID: string;
  Title: string;
  Poster: string;
}

const MySlider: FC = () => {
  const dataSlider: Movie[] = data.Search;

  const items = dataSlider.map((item: Movie) => (
    <div key={item.imdbID}>
      <img src={item.Poster} alt={item.Title} />
    </div>
  ));

  const responsive = {
    0: { items: 1 },
    576: { items: 2 },
    992: { items: 3 },
    1200: { items: 4 },
  };

  return (
    <AliceCarousel
      mouseTracking
      items={items}
      responsive={responsive}
      autoPlayInterval={3000}
      autoPlayDirection="rtl"
      autoPlay={true}
    />
  );
};

export default MySlider;
