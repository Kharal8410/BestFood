import React from "react";
import FooterComponent from "../../components/Footer";
import NavbarComponent from "../../components/Navbar";
import logo from "../../assets/img/logo.png";

import { FaLongArrowAltRight } from "react-icons/fa";

const AboutUs: React.FC = () => {
  return (
    <>
      <NavbarComponent />

      <br />
      <br />
      <div className="container mx-auto p-8 ">
        <div className="flex justify-between items-center mb-6 mt-12">
          <h1 className="text-4xl font-bold mb-4 text-yellow-900">
            About BestFood
          </h1>
          <div className="flex items-center justify-between p-1 md:p-8">
            <a
              href="/dashboard"
              className="flex items-center text-decoration-none text-yellow-900 text-2xl font-extrabold"
            >
              View Our Menu
              <FaLongArrowAltRight className="mr-2 mt-2" />
            </a>
          </div>
        </div>

        <section>
          <div className="flex justify-left items-center mb-6 mt-12">
            <img
              src={logo}
              alt="Logo"
              className="rounded-full h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 xl:h-32 xl:w-32 mb-3 border-2 border-yellow-900 shadow-lg"
            />
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-yellow-900">
            Our Mission
          </h2>
          <p className="text-lg mb-8 text-justify">
            Welcome to BestFood, a place where our culinary expertise meets a
            deep-seated passion for providing an exceptional dining experience.
            We are dedicated to the art of delivering not just meals but moments
            of pure delight to our valued customers. With a commitment to
            quality and a genuine love for the craft, each dish we prepare is
            infused with care and flavor. Our mission extends beyond satisfying
            hunger; it is about creating a symphony of tastes, textures, and
            aromas that linger in your memory, making your time with us truly
            unforgettable. At BestFood, every meal is an opportunity to share
            joy, savor excellence, and leave a lasting imprint on your culinary
            journey.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4 text-yellow-900 text-center">
            Culinary Excellence
          </h2>
          <div className="mb-8 flex mt-4">
            <img
              src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Culinary Excellence"
              className="w-4/12 rounded-lg shadow-lg"
            />
            <p className="text-lg mb-8 text-justify p-2 m-12 ">
              At BestFood, our commitment to culinary excellence begins with the
              careful selection of the finest ingredients. We take pride in
              sourcing premium components to craft dishes that not only meet but
              exceed the highest standards of taste and quality. Our diverse
              menu is a reflection of our dedication to satisfying a spectrum of
              tastes, ensuring that there's something extraordinary for every
              palate. Whether you indulge in the rich flavors of savory
              delights, savor the sweetness of our treats, or opt for the
              nourishing goodness of wholesome meals, our culinary offerings are
              designed to be a feast for the senses. From the first bite to the
              last, our goal is to provide a dining experience that transcends
              expectations, making each visit to BestFood a journey through a
              world of exceptional flavors and culinary innovation.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4 text-yellow-900 text-center">
            Bringing People Together
          </h2>
          <div className="mb-8 flex mt-4">
            <p className="text-lg mb-8 text-justify p-2 m-12 ">
              At BestFood, we believe in the power of exceptional cuisine to
              bring people together. Our restaurant is not just a place to savor
              delectable dishes; it's a space where connections are forged, and
              memories are created. Nestled in the heart of location, BestFood
              is more than just a dining experience it's a celebration of
              flavors, community, and shared moments. Our culinary journey
              begins with a commitment to sourcing the finest, freshest
              ingredients, ensuring that each dish tells a story of quality and
              passion. From the first bite to the last, we aim to elevate your
              dining experience, taking you on a gastronomic adventure that
              transcends the ordinary. But BestFood is more than just a
              destination for exquisite meals; it's a hub for forging
              connections and fostering relationships.
            </p>
            <img
              src="https://images.unsplash.com/photo-1421622548261-c45bfe178854?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Culinary Excellence"
              className="w-4/12 rounded-lg shadow-lg"
            />
          </div>
        </section>
      </div>

      <FooterComponent />
    </>
  );
};

export default AboutUs;
