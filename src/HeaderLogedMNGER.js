import React from 'react'
import  './styles/App.css';
import logo from './images/Blue logo-cropped.png';
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MNGDash from './MngrDashBoard';
import Logout from './Logout';
import Footer from './Footer';
import { getUser } from './Utils/Common';
import Profile from './Utils/Profile';
import Announcement from './Utils/Announcement';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  const user = getUser();
  if(user.roll === "Manager"){
  }else{
    window.location.href = "/EmpDashBoard";
  }
  

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      
      {value === index && (
        <Box p={5}>
          <Typography>{children}</Typography>
        </Box>
      )}
      
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function HeaderLoged() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);



  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <div className={classes.root}>
        <img src={logo} id="logo" alt="Logo"></img>
      <AppBar position="static" color="default">
        <Tabs value={value} onChange={handleChange} variant="fullWidth" indicatorColor="primary" textColor="primary" centered>
          <Tab label="Profile" {...a11yProps(0)} />
          <Tab label="Chat" {...a11yProps(1)} />
          <Tab label="Actions" {...a11yProps(2)} />
          <Tab label="Announcements" {...a11yProps(3)} />
          <Tab label="Logout" {...a11yProps(4)} style={{backgroundColor:'orange'}} />
          
        </Tabs>
        </AppBar>
      
      <TabPanel value={value} index={0}>
        <Profile/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={2}>
        <MNGDash/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Announcement/>
      </TabPanel>
      <TabPanel value={value} index={4} >
        <Logout/>
      </TabPanel>
      
    </div>
    <Footer/>
    </div>
  );
}
