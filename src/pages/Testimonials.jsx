import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { testimonials } from "../testimonials/testimonials";
import TestimonialCard from "../components/TestimonialCard";
import { Link, useLocation } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";

export default function Testimonials() {
  const location = useLocation();
  const isDisplayed = location.pathname === "/";
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="m-3">
      <div className="d-flex align-items-center justify-content-center">
        <h2>Testimonials</h2>
      </div>
      <Carousel responsive={responsive} infinite={true} focusOnSelect={true}>
        {testimonials.map((test) => {
          return (
            <div style={{ position: "relative" }}>
              <TestimonialCard
                img={test.imgSrc}
                description={test.description}
                rating={test.rating}
              />
            </div>
          );
        })}
      </Carousel>
      <div className="d-flex align-items-center justify-content-center">
        {isDisplayed && (
          <Link to="/testimonials">
            <Button className="m-3">See all</Button>
          </Link>
        )}
      </div>
    </div>
  );
}
