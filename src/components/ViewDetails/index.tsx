/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavbarComponent from "../Navbar";
import Loader from "../Loader";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";
import FooterComponent from "../Footer";
import { FaFacebook, FaWhatsapp, FaInstagram } from "react-icons/fa";
import logo from "../../assets/img/logo.png";
import { FaLongArrowAltLeft } from "react-icons/fa";

const ViewDetail = () => {
  const [food, setFood] = useState<any>({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const getDataById = async () => {
    try {
      const resp = await axios.get(`http://localhost:3000/food/${id}`);
      setFood(resp.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  useEffect(() => {
    getDataById();
  }, [id]);

  return (
    <>
      <NavbarComponent />
      <br />
      <br />

      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="mt-12 mx-auto max-w-7xl">
            <div>
              <div className="flex justify-center items-center mb-6 mt-12">
                <img
                  src={logo}
                  alt="Logo"
                  className="rounded-full h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 xl:h-32 xl:w-32 mb-1 border-2 border-yellow-900 shadow-lg"
                />
              </div>
              <h4 className="text-center text-yellow-900 font-extrabold text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                Best Food
              </h4>
            </div>
            <div className="flex items-center justify-between p-1 md:p-8">
              <div className="flex items-center justify-between p-1 md:p-8">
                <a
                  href="/dashboard"
                  className="flex items-center text-decoration-none text-yellow-900 text-lg"
                >
                  <FaLongArrowAltLeft className="mr-2" />
                  Back to Menu
                </a>
              </div>
            </div>
            <div className="border border-gray-300 shadow-lg rounded-lg p-4">
              <div className="flex items-center justify-between border-b border-gray-300 p-2">
                <Avatar
                  sx={{ bgcolor: "#713f12" }}
                  aria-label="recipe"
                  className="font-extrabold"
                >
                  BF
                </Avatar>
                <Typography variant="h5" className="text-yellow-900">
                  {food.data.name}
                </Typography>
              </div>
              <div className="flex flex-col md:flex-row items-center md:items-stretch p-2 gap-4 ">
                <div className="w-full md:w-1/2 ">
                  <img
                    src={food.data.image}
                    loading="lazy"
                    alt={food.data.name}
                    className="w-full "
                  />
                </div>

                <div className="w-full md:w-1/2 bg-yellow-100 p-2 rounded-lg">
                  <div className="flex gap-1 border p-1">
                    <div className="w-full md:w-1/2">
                      <img
                        src={food.data.image}
                        loading="lazy"
                        alt={food.data.name}
                        className="w-full"
                      />
                    </div>
                    <div className="w-full md:w-1/2">
                      <img
                        src={food.data.image}
                        loading="lazy"
                        alt={food.data.name}
                        className="w-full"
                      />
                    </div>
                  </div>
                  <Typography variant="body1" className="text-justify">
                    {food.data.description}
                  </Typography>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between p-2">
                <div className="mb-2 sm:mb-0">
                  <Typography variant="body2">Total price:</Typography>
                  <Typography variant="h6" className="text-yellow-900">
                    ${food.data.price}
                  </Typography>
                </div>
                <div className="mb-2 sm:mb-0">
                  <Typography variant="body2">Type:</Typography>
                  <Typography variant="h6" className="text-yellow-900">
                    {food.data.type}
                  </Typography>
                </div>
                <div>
                  <Typography variant="body2" className="mb-2">
                    Share:
                  </Typography>
                  <Typography
                    variant="h6"
                    className="flex flex-col sm:flex-row gap-2 text-yellow-900"
                  >
                    <FaFacebook />
                    <FaInstagram />
                    <FaWhatsapp />
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      <FooterComponent />
    </>
  );
};

export default ViewDetail;
