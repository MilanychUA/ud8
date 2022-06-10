import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import AttachMoneyTwoToneIcon from "@mui/icons-material/AttachMoneyTwoTone";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import ItemsData from "../../store/items-context";

const NavBar = () => {
  const show = useContext(ItemsData);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Button
            sx={{ paddingRight: 5 }}
            onClick={show.showDiscount}
            variant="text"
            color="inherit"
            startIcon={<AttachMoneyTwoToneIcon />}
          >
            Discount
          </Button>
          <Button
                onClick={show.showNewItem}

            variant="text"
            color="inherit"
            startIcon={<CreateNewFolderIcon />}
          >
            NewItem
          </Button>
          <Grid container justifyContent="flex-end">
            <Link to="/items">
              <Button color="inherit" variant="text">
                Items
              </Button>
            </Link>
            <Link to="/cart">
              <Button color="inherit" variant="text">
                Cart
              </Button>
            </Link>
            <Link to="/discount">
              <Button color="inherit" variant="text">
                Discount
              </Button>
            </Link>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
