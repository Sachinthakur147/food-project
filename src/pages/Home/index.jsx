import React, {useEffect, useState} from "react";
import Box from "@mui/material/Box";
import Navbar from "../../components/Navbar";
import Productcard from "../../components/Productcard";
import "./style.scss";
import {foodList} from "../../constants/mockData";

// import Index1 from "../../components/Productcard/index1";
// import Productcard from "../../components/Productcard";

const Homepage = () => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    setCardData([foodList[19], foodList[10], foodList[12], foodList[15]]);
  }, []);
  return (
    <Box>
      <Navbar />
      <div className="Home-page-wrraper">
        <div className="fullpage">
          <div className="header-img ">
            <div className="header-title"> Welcome To Pandey Ji Ki Kutiya</div>
          </div>
          <div></div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {cardData.map((card, i) => (
              <Productcard
                img={card.image}
                name={card.name}
                Qty="1"
                Size="M  L"
              />
            ))}
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Homepage;
