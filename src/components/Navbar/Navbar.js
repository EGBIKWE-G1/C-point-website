import React, { useState } from "react";
import {
  AppBar,
  CssBaseline,
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Button,
  Container,
  useMediaQuery,
} from "@material-ui/core";
import { Menu as MenuIcon, Close as CloseIcon } from "@material-ui/icons";
import { useTheme } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

import { Images } from "../../shared/themes";
import useStyles from "./styles";
import menuItems from "../../shared/data/MenuItems";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const classes = useStyles();
  const history = useHistory();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleButtonClick = (pageURL) => {
    history.push(pageURL);
    if (isMobile) handleDrawerToggle();
  };

  const drawer = (
    <div>
      <List>
        {menuItems.map((text, index) => (
          <ListItem
            onClick={() => handleButtonClick(text.pageURL)}
            button
            key={index}
          >
            <ListItemText primary={text.menuTitle} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <Container style={{ overflow: "hidden" }}>
        <CssBaseline />
        <AppBar
          position="static"
          elevation="0"
          style={{ background: "transparent" }}
        >
          <Toolbar className={`${classes.toolbar} ${classes.iconStyles}`}>
            <Button onClick={() => handleButtonClick("/")}>
              <img
                src={Images.completeLogo}
                alt="Logo"
                className={classes.title}
              />
            </Button>
            {isMobile ? (
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                className={classes.menuButton}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <div className={classes.headerOptions}>
                {menuItems.map((item) => (
                  <Button
                    onClick={() => handleButtonClick(item.pageURL)}
                    classes={{
                      label: classes.label,
                    }}
                  >
                    {item.menuTitle}
                  </Button>
                ))}
              </div>
            )}
          </Toolbar>
        </AppBar>

        <nav className={classes.drawer}>
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              variant="temporary"
              anchor={theme.direction === "rtl" ? "right" : "left"}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              <IconButton
                onClick={handleDrawerToggle}
                className={classes.closeMenuButton}
              >
                <CloseIcon />
              </IconButton>
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
      </Container>
    </div>
  );
};

export default Navbar;
