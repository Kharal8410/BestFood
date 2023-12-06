/* eslint-disable @typescript-eslint/no-explicit-any */
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import { useNavigate } from "react-router-dom";
import { Avatar } from "@mui/material";

export default function CardComponent({ item }: any) {
  const navigate = useNavigate();

  return (
    <Card
      className=" mx-auto transition-all duration-300 hover:shadow-md hover:scale-105 w-[300px] sm:w-auto"
      onClick={() => navigate(`/dashboard/${item.id}`)}
    >
      <div className=" flex justify-between">
        <Avatar
          sx={{ bgcolor: "#713f12" }}
          aria-label="recipe"
          className="font-extrabold "
        >
          BF
        </Avatar>

        <Typography level="title-lg">{item.name}</Typography>
      </div>
      <AspectRatio>
        <img
          src={item.image}
          loading="lazy"
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </AspectRatio>

      <div className="flex justify-between">
        <div>
          <Typography level="body-xs">Total price:</Typography>
          <Typography fontSize="lg" fontWeight="lg">
            ${item.price}
          </Typography>
        </div>
        <div>
          <Typography level="body-xs">Type:</Typography>
          <Typography fontSize="lg" fontWeight="lg">
            {item.type}
          </Typography>
        </div>
      </div>

      <div className="hidden sm:block">
        <Typography level="body-xs">Description:</Typography>
        <Typography fontSize="lg" fontWeight="lg">
          {item.description.slice(0, 30)}
        </Typography>
      </div>
    </Card>
  );
}
