import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/esm/Button";

const CarouselComponent = () => {
  return (
    <div className="m-4 p-2 border border-grey-300 shadow-sm rounded-lg">
      <Carousel>
        <Carousel.Item>
          <img
            src="https://images.unsplash.com/photo-1616671301376-3d98b18cb052?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="d-block w-100 "
            alt="First slide"
          />
          <Carousel.Caption className="d-md-block">
            <h3 className="text-dark font-extrabold">Best Food</h3>
            <p className="text-yellow-900 hidden sm:block">
              The concept of "best food" is subjective and varies among
              individuals based on personal preferences and cultural
              backgrounds.
            </p>
            <Button variant="outline-light" href="/aboutus">
              Explore more
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://images.unsplash.com/photo-1529059997568-3d847b1154f0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="d-block w-100"
            alt="Second slide"
          />
          <Carousel.Caption className="d-md-block">
            <h3 className="text-dark font-extrabold">Best Food</h3>
            <p className="text-yellow-900 hidden sm:block">
              The concept of "best food" is subjective and varies among
              individuals based on personal preferences and cultural
              backgrounds.
            </p>
            <Button variant="outline-light" href="/aboutus">
              Explore more
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://plus.unsplash.com/premium_photo-1674670904769-544b31893a15?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="d-block w-100"
            alt="Third slide"
          />
          <Carousel.Caption className="d-md-block">
            <h3 className="text-light font-extrabold">Best Food</h3>
            <p className="text-light hidden sm:block">
              The concept of "best food" is subjective and varies among
              individuals based on personal preferences and cultural
              backgrounds.
            </p>
            <Button variant="outline-light" href="/aboutus">
              Explore more
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
