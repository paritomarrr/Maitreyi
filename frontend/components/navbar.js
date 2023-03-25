import React from "react";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0";
import {
  faHome,
  faUser,
  faHandHoldingMedical,
  faNotesMedical,
  faFileMedical,
  faCalendarAlt,
  faAward,
  faStar,
  faSignOutAlt,
  faSignInAlt,
  faQuestion,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import CollectionsIcon from "@material-ui/icons/Collections";
// import bgimg from "../components/images/bgimg";
import classes from "./navbar.component.style.js";
import styles from "./navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

let nav = createMuiTheme();
nav = responsiveFontSizes(nav);

const Navbar = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const { user } = useUser();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ borderRight: "#171717" }}>
      {/* <CssBaseline /> */}
      <AppBar
        position="fixed"
        style={{ backgroundColor: "#171717", height: "60px" }}
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Link href="/">
            <h1
              style={{
                fontFamily: "Montserrat",
                fontSize: "150%",
                cursor: "pointer",
              }}
            >
              MAITREYI
            </h1>
          </Link>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        // style={{ borderRight: "none" }}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div
          className={classes.drawerHeader}
          style={{ backgroundColor: "#171717" }}
        >
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />

        <ThemeProvider theme={nav}>
          <div style={{ backgroundColor: "#171717" }} height="30px">
            <List
              className={classes.root}
              style={{ backgroundColor: "#171717" }}
            >
              <ListItem button component="a" href="/homepage">
                <ListItemIcon>
                  <FontAwesomeIcon icon={faHome} style={{ color: "#fff" }} />
                </ListItemIcon>
                <ListItemText>
                  <Typography
                    className={styles.hoverIcon}
                    variant="h6"
                    style={{ color: "#fff", fontFamily: "Montserrat" }}
                  >
                    Home
                  </Typography>
                </ListItemText>
              </ListItem>

              <ListItem button component="a" href="/about">
                <ListItemIcon>
                  <FontAwesomeIcon icon={faUser} style={{ color: "#fff" }} />
                </ListItemIcon>
                <ListItemText>
                  <Typography
                    variant="h6"
                    style={{ color: "#fff", fontFamily: "Montserrat" }}
                  >
                    AboutUs
                  </Typography>
                </ListItemText>
              </ListItem>

              <ListItem button component="a" href="/Gynac">
                <ListItemIcon>
                  <FontAwesomeIcon
                    icon={faHandHoldingMedical}
                    style={{ color: "#fff" }}
                  />
                </ListItemIcon>
                <ListItemText>
                  <Typography
                    variant="h6"
                    style={{ color: "#fff", fontFamily: "Montserrat" }}
                  >
                    GynacHelp
                  </Typography>
                </ListItemText>
              </ListItem>

              <ListItem button component="a" href="/main">
                <ListItemIcon>
                  <FontAwesomeIcon
                    icon={faFileMedical}
                    style={{ color: "#fff" }}
                  />
                </ListItemIcon>
                <ListItemText>
                  <Typography
                    variant="h6"
                    style={{ color: "#fff", fontFamily: "Montserrat" }}
                  >
                    Tips
                  </Typography>
                </ListItemText>
              </ListItem>

              <ListItem button component="a" href="/calender">
                <ListItemIcon>
                  <FontAwesomeIcon
                    icon={faCalendarAlt}
                    style={{ color: "#fff" }}
                  />
                </ListItemIcon>
                <ListItemText>
                  <Typography
                    variant="h6"
                    style={{ color: "#fff", fontFamily: "Montserrat" }}
                  >
                    Calander
                  </Typography>
                </ListItemText>
              </ListItem>

              <ListItem button component="a" href="/analysis">
                <ListItemIcon>
                  <FontAwesomeIcon icon={faAward} style={{ color: "#fff" }} />
                </ListItemIcon>
                <ListItemText>
                  <Typography
                    variant="h6"
                    style={{ color: "#fff", fontFamily: "Montserrat" }}
                  >
                    Quiz
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem button component="a" href="/questions">
                <ListItemIcon>
                  <FontAwesomeIcon
                    icon={faQuestion}
                    style={{ color: "#fff" }}
                  />
                </ListItemIcon>
                <ListItemText>
                  <Typography
                    variant="h6"
                    style={{ color: "#fff", fontFamily: "Montserrat" }}
                  >
                    FAQs
                  </Typography>
                </ListItemText>
              </ListItem>

              <ListItem button component="a" href="/flow">
                <ListItemIcon>
                  <FontAwesomeIcon icon={faStar} style={{ color: "#fff" }} />
                </ListItemIcon>
                <ListItemText>
                  <Typography
                    variant="h6"
                    style={{ color: "#fff", fontFamily: "Montserrat" }}
                  >
                    Wanna Rate Yourself
                  </Typography>
                </ListItemText>
              </ListItem>

              {user ? (
                <ListItem button component="a" href="/api/auth/logout">
                  <ListItemIcon>
                    <FontAwesomeIcon
                      icon={faSignOutAlt}
                      style={{ color: "#fff" }}
                    />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography
                      variant="h6"
                      style={{ color: "#fff", fontFamily: "Montserrat" }}
                    >
                      Logout
                    </Typography>
                  </ListItemText>
                </ListItem>
              ) : (
                <ListItem button component="a" href="/api/auth/login">
                  <ListItemIcon>
                    <FontAwesomeIcon
                      icon={faSignInAlt}
                      style={{ color: "#fff" }}
                    />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography
                      variant="h6"
                      style={{ color: "#fff", fontFamily: "Montserrat" }}
                    >
                      Login
                    </Typography>
                  </ListItemText>
                </ListItem>
              )}
              <ListItem button component="a" href="/social">
                <ListItemIcon>
                  <FontAwesomeIcon icon={faUsers} style={{ color: "#fff" }} />
                </ListItemIcon>
                <ListItemText>
                  <Typography
                    variant="h6"
                    style={{ color: "#fff", fontFamily: "Montserrat" }}
                  >
                    Social Campaigns
                  </Typography>
                </ListItemText>
              </ListItem>
            </List>
          </div>
        </ThemeProvider>
      </Drawer>
    </div>
  );
};
export default Navbar;
