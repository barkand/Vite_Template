import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function CarouselMUI({ children }: { children: any }) {
  return (
    <Carousel
      draggable={true}
      infinite={true}
      autoPlay={true}
      slidesToSlide={2}
      transitionDuration={3500}
      responsive={responsive}
    >
      {children}
    </Carousel>
  );
}

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 12,
  },
  wideDesktopMax: {
    breakpoint: { max: 3000, min: 2000 },
    items: 8,
  },
  wideDesktop: {
    breakpoint: { max: 2000, min: 1700 },
    items: 7,
  },
  desktopMax: {
    breakpoint: { max: 1700, min: 1400 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 1400, min: 1100 },
    items: 5,
  },
  tabletMax: {
    breakpoint: { max: 1100, min: 950 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 950, min: 750 },
    items: 3,
  },
  mobileMax: {
    breakpoint: { max: 750, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};
