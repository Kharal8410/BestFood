/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import CardComponent from "../../components/Card";
import logo from "../../assets/img/logo.png";
import FooterComponent from "../../components/Footer";
import Loader from "../../components/Loader";
import axios from "axios";
import NavbarComponent from "../../components/Navbar";
import { Input } from "@mui/material";

const Dashboard = () => {
  const [food, setFood] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState<any>(null);

  const getData = async () => {
    try {
      const resp = await axios.get("http://localhost:3000/food");
      setFood(resp.data.data);
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

  const handleFilter = (type: any) => {
    setCategory(type);
  };

  const filteredFood = food
    .filter((item) => (category ? item.category === category : true))
    .filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <>
      <NavbarComponent />
      <br />
      {loading ? (
        <Loader />
      ) : (
        <div className="m-3  ">
          <div className="flex justify-center items-center mb-6 mt-12">
            <img
              src={logo}
              alt="Logo"
              className="rounded-full h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 xl:h-32 xl:w-32 mb-3 border-2 border-yellow-900 shadow-lg"
            />
          </div>

          <h4 className=" mt-7 text-center text-yellow-900 font-extrabold text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            OUR MENU
          </h4>

          <div className="flex justify-center items-center mt-4">
            <Input
              type="text"
              placeholder="Search by name.. "
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="ring-yellow-900 focus:ring-yellow-900 p-2 me-2"
            />
            <button
              onClick={() => setSearchQuery("")}
              className="bg-yellow-900 text-white py-2 px-4 rounded focus:outline-none"
            >
              Clear
            </button>
          </div>

          <div className="flex flex-col items-center mt-4 gap-2 sm:flex-row sm:justify-center">
            <button
              className={`${
                category === null ? "bg-yellow-900 text-white" : "bg-gray-300"
              } py-2 px-4 rounded focus:outline-none w-full sm:w-auto`}
              onClick={() => handleFilter(null)}
            >
              All
            </button>
            <button
              className={`${
                category === "vegetarian"
                  ? "bg-yellow-900 text-white"
                  : "bg-gray-300"
              } py-2 px-4 rounded focus:outline-none w-full sm:w-auto`}
              onClick={() => handleFilter("vegetarian")}
            >
              Vegetarian
            </button>
            <button
              className={`${
                category === "non-veg"
                  ? "bg-yellow-900 text-white"
                  : "bg-gray-300"
              } py-2 px-4 rounded focus:outline-none w-full sm:w-auto`}
              onClick={() => handleFilter("non-veg")}
            >
              Non-Vegetarian
            </button>
          </div>

          <div className="flex flex-wrap justify-evenly gap-5 mt-12 mx-3 py-6">
            {filteredFood.map((item) => (
              <CardComponent key={item.id} item={item} />
            ))}
          </div>
        </div>
      )}
      <FooterComponent />
    </>
  );
};

export default Dashboard;
