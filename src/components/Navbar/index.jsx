import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import IconButton from "@mui/material/IconButton";
import "./style.scss";

const Index = () => {
  return (
    <div className="product-card-wrapper">
      <div>
        <AppBar className="navbar" position="static">
          <Toolbar>
            <IconButton>{/* <MenuIcon /> */}</IconButton>
            <div className="nav-logo">Pandey Ji Ki Kutiya</div>
            <Typography
              variant="h6"
              component="div"
              sx={{flexGrow: 1}}
            ></Typography>
            {/* <a href="/Login" style={{fontSize: "20px"}}>
              Login
            </a>
            <a href="/Signup">SignUp</a> */}
            <div className="lnk-contect" style={{padding: "5px"}}>
              <a href="/Login" style={{fontSize: "15px"}}>
                Login
              </a>
            </div>
            <div className="lnk-contect" style={{padding: "5px"}}>
              <a href="/Signup" style={{fontSize: "15px"}}>
                SignUp
              </a>
            </div>
            {/* <Button className="btn-login">Login</Button> */}
            {/* <Button className="btn-signup">Signup</Button> */}
            <div className="lnk-contect" style={{padding: "5px"}}>
              <a href="/DashboardMenu" style={{fontSize: "15px"}}>
                Contact
              </a>
            </div>
          </Toolbar>
        </AppBar>
        <br />
        <br />
      </div>
    </div>
  );
};

export default Index;
