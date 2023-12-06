import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { FaFacebook, FaTiktok, FaWhatsapp, FaInstagram } from "react-icons/fa";

const FooterComponent = () => {
  return (
    <div className="bg-yellow-900 h-auto py-8 mt-5 rounded-md">
      <div className="container mx-auto flex flex-col md:flex-row justify-between text-white">
        <div className="mb-4 md:mb-0">
          <Typography variant="h6" className="mb-2">
            Learn Best Food
          </Typography>
          <ul>
            <li>
              <Link href="/aboutus" className="text-decoration-none text-white">
                About
              </Link>
            </li>
            <li>Careers</li>
          </ul>
        </div>

        <div className="mb-4 md:mb-0">
          <Typography variant="h6" className="mb-2">
            Opening Hours
          </Typography>
          <ul>
            <li>Sun - Fri: 8 AM - 10 PM</li>
            <li>Sat: 8 AM - 11 AM</li>
          </ul>
        </div>

        <div>
          <Typography variant="h6" className="mb-2">
            Contact Us
          </Typography>
          <div className="flex gap-2">
            <FaFacebook />
            <FaInstagram />
            <FaTiktok />
            <FaWhatsapp />
          </div>
          <p className="mt-2">Email: bestfood@gmail.com</p>
        </div>
      </div>
      <div className="mt-6">
        <Typography
          variant="body2"
          color="text.secondary"
          className="text-center md:text-left p-2 text-lime-50 text-lg"
        >
          {"Copyright © "}
          <Link
            color="inherit"
            href="/dashboard"
            className="ms-2 me-2 text-decoration-none"
          >
            Best Food
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </div>
    </div>
  );
};

export default FooterComponent;
