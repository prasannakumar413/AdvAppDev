import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import DrawerComp from "./Drawer";

const Header = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <React.Fragment>
      <AppBar sx={{ background: "#063970" }}>
        <Toolbar>
          <CardGiftcardIcon sx={{ transform: "scale(2)" }} />
          {isMatch ? (
            <>
              <Typography sx={{ fontSize: "2rem", paddingLeft: "10%", color: "#fff" }}>
                GIFT WRAP
              </Typography>
              <DrawerComp />
            </>
          ) : (
            <> 
              <Typography variant="h6" component="div" sx={{ fontSize: "2.1rem", flexGrow: 1, textAlign: "center", color: "#fff" }}>
                GIFT WRAP
              </Typography>
              <Tabs
                sx={{ marginLeft: "auto" }}
                indicatorColor="secondary"
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                <Tab label="Products" component={Link} to="/products" />
                <Tab label="Services" component={Link} to="/services" />
                <Tab label="About Us" component={Link} to="/aboutus" />
                <Tab label="Contact" component={Link} to="/contact" />
              </Tabs>
              <Button
                sx={{
                  backgroundColor: "#4caf50",
                  color: "#fff",
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  transition: "background-color 0.3s ease",
                  marginLeft: "10px",
                }}
              >
                <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
                  LOGIN
                </Link>
              </Button>
              <Button
                sx={{
                  backgroundColor: "#1976d2",
                  color: "#fff",
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  transition: "background-color 0.3s ease",
                  marginLeft: "10px",
                }}
              >
                <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
                  SIGN UP
                </Link>
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
