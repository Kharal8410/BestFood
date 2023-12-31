import logo from "../../assets/img/logo.png";
import Button from "react-bootstrap/esm/Button";

const FigureComponent = () => {
  return (
    <div>
      <figure className="m-auto relative h-full flex flex-col justify-center">
        <img
          className="rounded-md"
          src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="image description"
        />

        <figcaption className="absolute px-4 left-1/2 transform -translate-x-1/2 top-2/3 -translate-y-1/2">
          <div className="flex justify-center items-center mb-1 animate-pulse">
            <img
              src={logo}
              alt="Logo"
              className="rounded-full h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 xl:h-32 xl:w-32 mb-3 border-2 border-yellow-900 shadow-lg"
            />
          </div>
          {/* <Button variant="outline-light" href="/aboutus">
            Explore more
          </Button> */}

          <p className="text-center font-bold hidden sm:block md:text-lg lg:text-xl xl:text-2xl  bg-gradient-to-r from-slate-900 to-orange-900 bg-clip-text text-transparent ">
            Welcome to BestFood, a place where our culinary expertise meets a
            deep-seated passion for providing an exceptional dining experience.
            <a href="/aboutus" className="text-decoration-none">
              see more
            </a>
          </p>
        </figcaption>
      </figure>
    </div>
  );
};

export default FigureComponent;
