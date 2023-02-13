import React, {useState} from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import Typography from "@mui/material/Typography";
// import "./style.scss";

const Index = (props) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="card" style={{padding: "3%"}}>
      <Card sx={{maxWidth: 250}} className="full-card">
        <img src={props.img} alt="img" width={"250px"} height={"150px"} />
        <CardContent>
          <Typography>{props.id}</Typography>
          <Typography
            className="card-heading"
            gutterBottom
            variant="h5"
            component="div"
          >
            {props.name}
          </Typography>
        </CardContent>
      </Card>
      {/* <Index1 /> */}
    </div>
  );
};

export default Index;
