import React, {useEffect, useState} from "react";
import Box from "@mui/material/Box";
import SearchBar from "material-ui-search-bar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import Menucard from "../../components/DashboardMenu/Menucard";
import {foodList} from "../../constants/mockData";
import {FOOD_CATEGORIES} from "../../constants/common";
import Navbar from "../../components/Navbar";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./style.scss";

const Index = () => {
  const [foodData, setFoodData] = useState([]);
  const [searched, setSearched] = useState("");
  const searchHandler = () => {
    if (!searched) {
      setFoodData(foodList);
    } else {
      const filterData = foodList.filter((food) => {
        return food.name.includes(searched);
      });
      // const filterData = foodList.filter((food) => {
      //   return food.name === searched;
      // });
      setFoodData(filterData);
    }
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onload = (error) => {
        reject(error);
      };
    });
  };
  const [categoryType, setCategoryType] = useState([]);
  const [selectData, setSelectData] = useState("");

  const selectHandler = () => {
    // console.log("card");
    if (!selectData) {
      setFoodData(foodList);
    } else {
      const filterFoodData = foodList.filter((foodDetails) => {
        return foodDetails.category === selectData;
      });

      setFoodData(filterFoodData);
    }
  };

  useEffect(() => {
    selectHandler();
  }, [selectData]);

  useEffect(() => {
    const arr = Object.values(FOOD_CATEGORIES);
    setCategoryType(arr);
    setFoodData(foodList);
    console.log("Hay console", FOOD_CATEGORIES);
    console.log("ary", arr);
  }, []);

  const [file, setFile] = useState();
  const [updateBtn, setUpdateBtn] = useState(false);
  const [addFood, setAddFood] = useState({
    id: "",
    name: "",
    qty: "",
    category: "",
    image: "",
    price: "",
  });

  const handleChange = async (event) => {
    let value = event.target.value;
    //console.log("hay", value);
    const tempData = {...addFood};
    if (event.target.name === "name") {
      tempData.name = value;
    } else if (event.target.name === "qty") {
      tempData.qty = value;
    } else if (event.target.name === "category") {
      tempData.category = value;
    } else if (event.target.name === "image") {
      const file = event.target.files[0];

      const isJpgOrPng =
        file.type === "image/jpeg" || file.type === "image/png";
      if (!isJpgOrPng) {
        alert("You can only upload JPG/PNG file!");
      } else {
        const file = event.target.files[0];
        //console.log("file", file);

        const b64 = await convertBase64(file);
        console.log("haaaay");
        console.log("lbl", b64);
        tempData.image = file;
      }
      if (file) {
        let data = new FormData();
        data.append("file", file);
      }
    } else if (event.target.name === "price") {
      tempData.price = value;
    }
    setAddFood(tempData);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "600px",
    minHeight: "400px",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const submitHandler = () => {
    console.log("118");
    if (updateBtn) {
      alert("Status update successfully");
      console.log("Status update successfully");
    } else {
      const teampuser = [...foodData];
      teampuser.push(addFood);
      setFoodData(teampuser);
    }
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <Navbar />

      <div className="Dashboard-menu-wrapper">
        <div style={{padding: "1%", paddingTop: "0px"}}>
          <Grid container spacing={3}>
            <Grid item xs={1} style={{paddingTop: "0px"}}></Grid>
            <Grid item xs={2} style={{paddingTop: "0px", paddingLeft: "0px"}}>
              <input
                value={searched}
                onChange={(event) => setSearched(event.target.value)}
                style={{height: "35px"}}
                // onCancelSearch={() => cancelSearch()}
              />

              <button
                onClick={() => searchHandler()}
                variant="contained"
                size="large"
                style={{height: "40px"}}
              >
                search
              </button>
            </Grid>
            <Grid item xs={1} style={{paddingTop: "0px"}}>
              {" "}
              <FormControl
                variant="standard"
                sx={{m: 1, minWidth: 150}}
                style={{height: "20px"}}
                placeHolder="Search"
              >
                <Select
                  id="select-standard"
                  value={selectData}
                  onChange={(event) => setSelectData(event.target.value)}
                  style={{marginTop: "0px"}}
                >
                  {/* <MenuItem value="">
                    <em value={1}>None</em>
                  </MenuItem> */}

                  {categoryType.map((cat) => {
                    return <MenuItem value={cat}>{cat}</MenuItem>;
                  })}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={4} style={{paddingTop: "0px"}}></Grid>
            <Grid item xs={3} style={{textAlign: "end", paddingTop: "0px"}}>
              <Button variant="contained" size="large" onClick={handleOpen}>
                Add Product
              </Button>
              <Grid item xs={1} style={{paddingTop: "0px"}}></Grid>
            </Grid>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <div style={{display: "flex"}}>
                  <div style={{width: "30%", paddingTop: "5px"}}>
                    <label className="formlbl">Name:</label>
                  </div>

                  <TextField
                    id="standard-basic"
                    label="Enter name"
                    variant="standard"
                    name="name"
                    onChange={handleChange}
                    value={addFood.name}
                    style={{width: "50%"}}
                  />
                </div>
                <div style={{display: "flex "}}>
                  <div style={{width: "30%"}}>
                    <label className="formlbl">Quantity:</label>
                  </div>

                  <TextField
                    id="standard-basic"
                    label="Enter Qty"
                    variant="standard"
                    name="qty"
                    onChange={handleChange}
                    value={addFood.qty}
                    style={{width: "50%"}}
                  />
                </div>
                <div style={{display: "flex"}}>
                  <div style={{width: "30%", paddingTop: "5px"}}>
                    <label className="formlbl">Category:</label>
                  </div>

                  <TextField
                    id="standard-basic"
                    label="Enter category"
                    variant="standard"
                    name="category"
                    onChange={handleChange}
                    value={addFood.category}
                    style={{width: "50%"}}
                  />
                </div>
                <div style={{display: "flex"}}>
                  <div style={{width: "30%", paddingTop: "5px"}}>
                    <label className="formlbl">Image:</label>
                  </div>

                  <TextField
                    id="standard-basic"
                    type="file"
                    label="Standard"
                    variant="standard"
                    name="image"
                    onChange={handleChange}
                    // value={addFood.image}
                    style={{width: "50%"}}
                  />
                  <img src={file} />
                  {/* <img src={tempData.image}></img> */}
                </div>
                <div style={{display: "flex"}}>
                  <div style={{width: "30%", paddingTop: "5px"}}>
                    <label className="formlbl">Price:</label>
                  </div>

                  <TextField
                    id="standard-basic"
                    label="Enter price"
                    variant="standard"
                    name="price"
                    onChange={handleChange}
                    value={addFood.price}
                    style={{width: "50%"}}
                  />
                </div>

                <div style={{marginTop: "7%"}}>
                  <Button
                    variant="contained"
                    href="#contained-buttons"
                    onClick={handleClose}
                    style={{marginRight: "70%"}}
                  >
                    Close
                  </Button>
                  <Button
                    variant="contained"
                    href="#contained-buttons"
                    onClick={() => {
                      console.log(addFood);
                      submitHandler();
                      setAddFood((preval) => {
                        return {
                          ...preval,
                          name: "",
                          qty: "",
                          category: "",
                          image: "",
                          peice: "",
                        };
                      });
                      handleClose();
                      setUpdateBtn(true);
                    }}
                  >
                    {"Add"}
                  </Button>
                </div>
              </Box>
            </Modal>
          </Grid>
        </div>
        <div className="Topheader">
          <Grid container>
            <Grid item xs={4} className="ofr-iage">
              50% on your first order
            </Grid>

            <Grid className="topheading" item xs={8} style={{}}>
              Welcome To Pandey Ji Ki Kutiya
            </Grid>
          </Grid>
        </div>
        <div
          style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}
        >
          {foodData.map((card, i) => (
            <Menucard img={card.image} name={card.name} />
          ))}
          {foodData.length <= 0 ? "Empty" : ""}
        </div>
        {/* <div style={{display: "flex", overflow: "wrap"}}>
          {cards.map((card, i) => (
            <DashboardCard img={card.image} name={card.name} />
          ))}
        </div> */}
      </div>
    </Box>
  );
};

export default Index;
