import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./style.scss";

const Index = () => {
  return (
    <Box className="login-page-wrapper">
      <div className="full-page">
        <Grid container spacing={3}>
          <Grid item xs={6}></Grid>

          <Grid item xs={6}>
            <div style={{paddingTop: "10%"}}>
              <div className="page-heading" style={{marginRight: "10%"}}>
                Sing In
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
                    Mobile No. :
                  </label>
                </div>
                <div style={{width: "40%"}}>
                  <TextField
                    type="text"
                    label="Enter mobile no."
                    style={{backgroundColor: "gray"}}
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
                    style={{color: "white", backgroundColor: "gray"}}
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
                    type="password"
                    label="Enter name"
                    style={{backgroundColor: "gray"}}
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
                <div style={{width: "30%", marginLeft: "3%"}}>
                  <label style={{fontSize: "15px", color: "white"}}>
                    <a>Forgot Password</a>
                  </label>
                </div>
                <div>
                  <Button
                    variant="contained"
                    style={{fontSize: "20px", fontWeight: "700"}}
                  >
                    Login
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
