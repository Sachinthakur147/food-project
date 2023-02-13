import React, {useEffect, useState} from "react";
import Box from "@mui/material/Box";
import SearchBar from "material-ui-search-bar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import DashboardCard from "../../components/DashboardCard";
import {foods} from "../../constants/dashboardData";

import Navbar from "../../components/Navbar";

const Index = () => {
  const [users, setusers] = useState();
  const [searched, setSearched] = useState();

  const requestSearch = (searchedVal) => {
    // const tempusers = [...users];
    const filteredRows = users.filter((user) => {
      return `${user.name}${user.email}${user.mobile}${user.address}`
        .toLowerCase()
        .includes(searchedVal.toLowerCase());
    });
    setusers(filteredRows);
  };

  const cancelSearch = () => {
    setSearched("");
    requestSearch(searched);
  };
  return (
    <Box>
      <Navbar />

      <div className="Dashboard-wrapper">
        <div style={{}}>
          <Grid container spacing={3}>
            <Grid item xs={1}></Grid>
            <Grid item xs={2}>
              <SearchBar
                value={searched}
                onChange={(searchVal) => requestSearch(searchVal)}
                onCancelSearch={() => cancelSearch()}
              />
            </Grid>
            <Grid item xs={5}></Grid>
            <Grid item xs={3} style={{textAlign: "end"}}>
              <Button variant="contained">
                <a href="/Addproduct" style={{color: "white"}}>
                  Add Product
                </a>
              </Button>
              <Grid item xs={1}></Grid>
            </Grid>
          </Grid>
        </div>
        <div
          style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}
        >
          {foods.map((card, i) => (
            <DashboardCard img={card.image} name={card.name} />
          ))}
        </div>
      </div>
    </Box>
  );
};

export default Index;
