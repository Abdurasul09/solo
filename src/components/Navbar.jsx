import * as React from "react";
import {
  Container,
  Form,
  FormControl,
  Modal,
  Nav,
  Navbar,
} from "react-bootstrap";
import { useNavigate } from "react-router";
import { clientContext } from "../contexts/ClientContext";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import { authContext } from "../contexts/AuthContext";
import { Logout } from "@mui/icons-material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import SignUpModal from "./auth/SignUpModal";
import SignInModal from "./auth/SignInModal";
import Badge from "@mui/material/Badge";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import clover from "../helpers/img/elbaLogo2.png";

export default function Navibar() {
  const { getProducts, productsCountIncart, productsCountInFavorites } =
    React.useContext(clientContext);
  const { logOut, user, adminEmail } = React.useContext(authContext);

  let object = new URLSearchParams(window.location.search);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const navigate = useNavigate();

  function filterProducts(key, value) {
    object.set(key, value);
    let newURL = `${window.location.pathname}?${object.toString()}`;
    navigate(newURL);
    getProducts();
  }

  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [showLogin, setShowLogin] = React.useState(false);
  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMod = () => {
    setAnchorEl(null);
  };

  // const handleChange = (event) => {
  //   setAuth(event.target.checked);
  // };

  let temp;
  if (user.email === adminEmail) {
    temp = (
      <Link to="/admin">
        <Button color="success" variant="contained">
          Войти как админ
        </Button>
      </Link>
    );
  }

  let profile;
  if (user) {
    profile = (
      <>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenu}
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorEl)}
          onClose={handleCloseMod}
        >
          <MenuItem onClick={handleCloseMod}>{user.email}</MenuItem>
          <MenuItem>
            <Button
              onClick={() => {
                logOut();
                handleCloseMod();
              }}
              variant="contained"
              color="error"
            >
              Выйти
            </Button>
          </MenuItem>
          <MenuItem
            onClick={() => {
              logOut();
              handleCloseMod();
            }}
          >
            {temp}
          </MenuItem>
        </Menu>
      </>
    );
  } else {
    profile = (
      <>
        <Button
          color="inherit"
          onClick={handleShowLogin}
          style={{
            fontFamily: "Francois One, sans-serif",
            letterSpacing: "1px",
            fontSize: "16px",
          }}
        >
          Sign In
        </Button>
        <Button
          color="inherit"
          onClick={handleShow}
          style={{
            fontFamily: "Francois One, sans-serif",
            letterSpacing: "1px",
            fontSize: "16px",
          }}
        >
          Sign Up
        </Button>
      </>
    );
  }

  return (
    <div>
      <div className="firstNav "></div>

      <Navbar className="appbar " expand="lg">
        <Container fluid>
          <Link to="/">
            <Navbar.Brand href="#">
              <img
                style={{
                  objectFit: "contain",
                  width: "65px",
                  marginLeft: "10px",
                }}
                src={clover}
                alt="logo"
              />
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Form className="d-flex navbar">
              <TextField
                id="standard-basic"
                variant="standard"
                type="search"
                placeholder="Поиск"
                className="me-2 inp"
                aria-label="Search"
                onChange={(e) => filterProducts("q", e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <Link to="/cart">
                <div style={{ marginRight: "10px" }}>
                  <Badge badgeContent={productsCountIncart} color="error">
                    <ShoppingCartIcon />
                  </Badge>
                </div>
              </Link>
              <Link to="favorites">
                <Badge badgeContent={productsCountInFavorites} color="error">
                  <FavoriteIcon />
                </Badge>
              </Link>

              {profile}
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <SignUpModal handleClose={handleClose} show={show} />
      <SignInModal handleCloseLogin={handleCloseLogin} showLogin={showLogin} />
    </div>
  );
}
