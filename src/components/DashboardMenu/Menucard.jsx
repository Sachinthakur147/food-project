import React, {useState} from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import Typography from "@mui/material/Typography";
import "./style.scss";

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
    <div className="product-card-wrapper" style={{padding: "2%"}}>
      <Card sx={{maxWidth: 345}} className="full-card">
        <img src={props.img} alt="img" width={"300px"} height={"200px"} />
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
          <div className="stricon">
            <StarBorderIcon />
            <StarBorderIcon />
            <StarBorderIcon />
            <StarBorderIcon />
            <StarHalfIcon />
          </div>
          <Typography
            className="crdDetails"
            variant="body2"
            color="text.secondary"
            style={{fontSize: "20px"}}
          >
            Qty:{props.qty}
            <Button onClick={handleIncrement}>-</Button> 1{" "}
            <Button onClick={handleDecrement}>+</Button>
          </Typography>

          <div>
            <div className="card-content">
              Size:{props.size}&nbsp;&nbsp;&nbsp;&nbsp;
              <div style={{display: "flex"}}>
                <div style={{backgroundColor: "yellow", borderRadius: "50%"}}>
                  M
                </div>{" "}
                &nbsp;&nbsp;{" "}
                <div style={{backgroundColor: "yellow", borderRadius: "50%"}}>
                  &nbsp;L&nbsp;
                </div>
              </div>
            </div>
          </div>
        </CardContent>
        <CardActions>
          <div className="footerContent">
            <label
              style={{
                fontWeight: "800",
                fontSize: "30px",
                fontStyle: "italic",
              }}
            >
              $ 150
            </label>

            <div style={{marginLeft: "50px"}}>
              <Button variant="contained">Add To Card</Button>
            </div>
          </div>
        </CardActions>
      </Card>
      {/* <Index1 /> */}
    </div>
  );
};

export default Index;
