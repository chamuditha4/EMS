import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Header from './Header';
import Footer from './Footer';
import Progress from './Progress';
import Attendance from './Attendance';
import Leave from './Leave';
import SalaryTab from './Tabs/SalaryTab';
import JobTabs from './Tabs/JobTabs';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
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
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function EmpDashBoard() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
        <Header />
        <div className={classes.root}>
        <AppBar position="static" color="default">
            <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            scrollButtons="auto"
            text-align="center"
            aria-label="scrollable auto tabs example"
            >
            <Tab label="Progress" {...a11yProps(0)} />
            <Tab label="Jobs" {...a11yProps(1)} />
            <Tab label="Leave" {...a11yProps(2)} />
            <Tab label="Salary And OT" {...a11yProps(3)} />
            <Tab label="Attendance" {...a11yProps(4)} />
            </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
            <Progress/>
        </TabPanel>
        <TabPanel value={value} index={1}>
            <JobTabs/>
        </TabPanel>
        <TabPanel value={value} index={2}>
            <Leave/>
        </TabPanel>
        <TabPanel value={value} index={3}>
            <SalaryTab/>
        </TabPanel>
        <TabPanel value={value} index={4}>
            <Attendance/>
        </TabPanel>
        
        </div>
        <Footer/>
    </div>
  );
}