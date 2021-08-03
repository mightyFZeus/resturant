import React,{useState, useEffect} from 'react'
import {AppBar, Drawer, Toolbar, List, ListItem,IconButton} from '@material-ui/core'
import MenuIcon from "@material-ui/icons/Menu";
import useStyles from './Styles'
import './Styles.css'

const NavBar = () => {
    const [isDesktop, setDesktop] = useState(window.innerWidth > 900);
  const [drawer, setDrawer] = useState(false);
  const toggleDrawer = (open) => (event) => setDrawer(open);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 900);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });
  const classes = useStyles()
    return (
        <div>
            {isDesktop?<div>
        <AppBar
        position='relative'
        className={classes.appbar}

      >
        <Toolbar>
            <p>Figo</p>
          <ul>
            <li>Home</li>
            <li>Menu</li>
            <li>Services</li>
            <li>Sign In</li>
    
          </ul>
        </Toolbar>
      </AppBar>
      </div>: 
      <div>
        <AppBar className={classes.appbar} >
            <Toolbar>
            <p>Figo</p>
                <div className={classes.menu}>
                  <IconButton  onClick={toggleDrawer(true)}>
                    <MenuIcon />
                  </IconButton>
                  <Drawer
                  
                    className={classes.test}
                    anchor={"right"}
                    open={drawer}
                    onClose={toggleDrawer(false)}
                  > 
                    <List>
                      <ListItem>
                        Home
                      </ListItem>
                      <ListItem>
                       Menu
                      </ListItem>
                      <ListItem>
                       Services
                      </ListItem>
                      <ListItem>
                       Sign in 
                      </ListItem>
                    </List>

                  </Drawer>

                </div>
            </Toolbar>
          </AppBar>  
      </div>
      }
   
        </div>
    )
}

export default NavBar
