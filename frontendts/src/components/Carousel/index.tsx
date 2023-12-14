import Carousel from "react-bootstrap/Carousel";
import {
  carouselWrapper,
  carouselItem,
  carouselLeft,
  carouselRight,
} from "./style";
import Text from "../Text";

function CarouselCustom() {
  return (
    <Carousel className={carouselWrapper} controls={false} indicators={false}>
      <Carousel.Item>
        <div className={carouselItem}>
          <div className={carouselLeft}>
            <img src="https://i.ibb.co/gzg9sGQ/img-photo-1.png" alt="Sherly" />
          </div>
          <div className={carouselRight}>
            <img src="https://i.ibb.co/g95RyGb/Rate.png" alt="Rate" />
            <Text>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod”
            </Text>
            <Text variant={2}>John Dee 32, Bromo</Text>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className={carouselItem}>
          <div className={carouselLeft}>
            <img src="https://i.ibb.co/tHF2htT/img-photo.png" alt="Lukas" />
          </div>
          <div className={carouselRight}>
            <img src="https://i.ibb.co/g95RyGb/Rate.png" alt="Rate" />
            <Text>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod”
            </Text>
            <Text variant={2}>John Dee 32, Bromo</Text>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className={carouselItem}>
          <div className={carouselLeft}>
            <img src="https://i.ibb.co/tHF2htT/img-photo.png" alt="Lukas" />
          </div>
          <div className={carouselRight}>
            <img src="https://i.ibb.co/g95RyGb/Rate.png" alt="Rate" />
            <Text>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod”
            </Text>
            <Text variant={2}>John Dee 32, Bromo</Text>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselCustom;
