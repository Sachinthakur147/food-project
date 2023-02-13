import React, {useEffect, useState} from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./style.scss";

const Index = () => {
  const [users, setusers] = useState([]);
  const [isFood, setIsFood] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    let value = event.target.value;
    const tempData = {...isFood};
    if (event.target.name === "name") {
      tempData.name = value;
    } else if (event.target.name === "mobile") {
      tempData.mobile = value;
    } else if (event.target.name === "email") {
      tempData.email = value;
    } else if (event.target.name === "password") {
      tempData.password = value;
    }
    setIsFood(tempData);
  };

  const submitHandler = () => {
    console.log("118");

    const teampuser = [...users];
    teampuser.push(isFood);
    setusers(teampuser);
  };

  return (
    <Box className="signup-page-wrapper">
      <div className="mainpage">
        <Grid container spacing={3}>
          <Grid item xs={6} className="signup-grid"></Grid>

          <Grid item xs={6} className="textfield">
            <div style={{paddingTop: "10%"}}>
              <div className="page-heading" style={{marginRight: "10%"}}>
                Sing Up
              </div>
              <div style={{display: "flex", paddingTop: "14%"}}>
                <div
                  style={{
                    width: "20%",
                    textAlign: "initial",
                    marginLeft: "15%",
                  }}
                >
                  <label style={{fontSize: "25px", color: "white"}}>
                    Name :
                  </label>
                </div>
                <div style={{width: "40%"}}>
                  <TextField
                    type="text"
                    label="Enter mobile no."
                    name="name"
                    onChange={handleChange}
                    value={isFood.name}
                  />
                </div>
              </div>
              <div style={{display: "flex", paddingTop: "4%"}}>
                <div
                  style={{
                    width: "20%",
                    textAlign: "initial",
                    marginLeft: "15%",
                  }}
                >
                  <label style={{fontSize: "25px", color: "white"}}>
                    Mobile No :
                  </label>
                </div>
                <div style={{width: "40%"}}>
                  <TextField
                    type="number"
                    label="Enter mobile"
                    style={{color: "white"}}
                    name="mobile"
                    onChange={handleChange}
                    value={isFood.mobile}
                  />
                </div>
              </div>
              <div style={{display: "flex", paddingTop: "4%"}}>
                <div
                  style={{
                    width: "20%",
                    textAlign: "initial",
                    marginLeft: "15%",
                  }}
                >
                  <label style={{fontSize: "25px", color: "white"}}>
                    Email :
                  </label>
                </div>
                <div style={{width: "40%"}}>
                  <TextField
                    type="text"
                    label="Enter email"
                    name="email"
                    style={{color: "white"}}
                    onChange={handleChange}
                    value={isFood.email}
                  />
                </div>
              </div>
              <div style={{display: "flex", paddingTop: "4%"}}>
                <div
                  style={{
                    width: "20%",
                    textAlign: "initial",
                    marginLeft: "15%",
                  }}
                >
                  <label style={{fontSize: "25px", color: "white"}}>
                    Password :
                  </label>
                </div>
                <div style={{width: "40%"}}>
                  <TextField
                    label="Enter password"
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={isFood.password}
                  />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  paddingTop: "10%",
                  justifyContent: "space-around",
                  textAlign: "start",
                }}
              >
                <div>
                  <Button
                    variant="outlined"
                    style={{fontSize: "20px", fontWeight: "700"}}
                  >
                    Cancel
                  </Button>
                </div>
                <div>
                  <Button
                    variant="contained"
                    style={{fontSize: "20px", fontWeight: "700"}}
                    onClick={() => {
                      console.log(isFood);
                      submitHandler();
                      setIsFood((preval) => {
                        return {
                          ...preval,
                          name: "",
                          mobile: "",
                          email: "",
                          password: "",
                        };
                      });
                    }}
                  >
                    Register
                  </Button>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </Box>
  );
};

export default Index;
