/* eslint-disable @typescript-eslint/no-explicit-any */
import FooterComponent from "../../components/Footer";
import CarouselComponent from "../../components/Carousel";
import CardComponent from "../../components/Card";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader";
import axios from "axios";
import NavbarComponent from "../../components/Navbar";
import { FaLongArrowAltRight } from "react-icons/fa";
import FigureComponent from "../../components/Figure";

const LandingPage = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const resp = await axios.get("http://localhost:3000/food");
      setUsers(resp.data.data);

      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <NavbarComponent />
      <br />
      <br />

      {loading ? (
        <Loader />
      ) : (
        <>
          <FigureComponent />

          <div className="flex flex-col md:flex-row mt-3 mb-3 mx-4 md:mx-0 py-4">
            <div className="w-full md:w-6/12 mt-4 md:mt-0">
              <CarouselComponent />
            </div>
            <div className="flex flex-col border border-grey-300 shadow-sm rounded-lg p-2 md:w-7/12 ">
              <div className="flex flex-col md:flex-row justify-evenly items-center py-2">
                <h4 className="text-center text-yellow-900 font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                  Recently Added to Menu
                </h4>
                <a
                  href="/dashboard"
                  className="flex items-center text-decoration-none text-yellow-900 text-2xl font-extrabold animate-bounce mt-2 md:mt-0"
                >
                  Menu
                  <FaLongArrowAltRight className="mr-3 mt-1" />
                </a>
              </div>
              <div className="flex flex-col md:flex-row sd:flex-row justify-between mx-4 sm:w-auto ">
                {users.slice(7, 9).map((item: any) => (
                  <CardComponent key={item.id} item={item} />
                ))}
              </div>
            </div>
          </div>
        </>
      )}
      <FooterComponent />
    </div>
  );
};

export default LandingPage;
