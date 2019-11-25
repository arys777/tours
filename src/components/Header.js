import React from 'react';
import { Link, useRouteMatch, useLocation } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { 
  Menu as MenuIcon, 
  Search as SearchIcon, 
  Map as MapIcon,
  Work as WorkIcon,
  FlightLand as FlightLandIcon,
  Person as PersonIcon
} from '@material-ui/icons';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import { get } from 'lodash';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
}));

const Header = () => {
  const searchMatch = useRouteMatch({path: '/search'});
  const clientsMatch = useRouteMatch({path: '/clients'});
  const employeesMatch = useRouteMatch({path: '/employees'});
  const countriesMatch = useRouteMatch({path: '/countries'});
  const toursMatch = useRouteMatch({path: '/tours'});
  const location = useLocation();
  const classes = useStyles();
  console.log(location);
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = open => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setDrawerOpen(open);
  };

  const DrawerLink = ({ text, icon, to, selected }) => (
    <MenuItem component={Link} to={{
      pathname: `/${to}`,
      state: {
          title: text
        }
      }} 
      selected={selected}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={text} />
    </MenuItem>
  )

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <DrawerLink to='search' text='Поиск' icon={<SearchIcon />} selected={!!searchMatch} />
      </List>
      <Divider />
      <List>
        <DrawerLink to='clients' text='Клиенты' icon={<PersonIcon />} selected={!!clientsMatch} />
        <DrawerLink to='employees' text='Сотрудники' icon={<WorkIcon />} selected={!!employeesMatch}/>
        <DrawerLink to='countries' text='Страны' icon={<MapIcon />} selected={!!countriesMatch}/>
        <DrawerLink to='tours' text='Туры' icon={<FlightLandIcon />} selected={!!toursMatch}/>
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton 
            edge="start" 
            className={classes.menuButton} 
            color="inherit" 
            aria-label="menu" 
            onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {get(location, 'state.title') || 'Поиск'}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer open={drawerOpen} onClose={toggleDrawer(false)}>
        {sideList('left')}
      </Drawer>
    </div>
  );
};

export default Header;