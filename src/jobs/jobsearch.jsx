import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },

  table: {
    minWidth: 650,
  },
}));

function createData(name, jobType, location, education) {
  return { name, jobType, location, education};
}

// Data ("name", Job Type, Location , Education Level)
const rows = [
  createData('Google', 'Software Engineer', 'Mountain View, CA', 'Bachelors Degree'),
  createData('Apple', 'Product Design Engineer', 'Cupertino, CA', 'Bachelors Degree'),
  createData('IBM',  'Full-Stack Developer', 'San Jose, CA', 'Bachelors Degree'),
  createData('Walgreens', 'Cashier Clerk', 'San Francisco, CA', 'None'),
  createData('Safeway', 'Store Assistant', 'Los Angelos, CA', 'None'),
  createData('H&M', 'Sales Associate', 'Irvine, CA', 'None'),
  createData('Judicial Council of California', 'Assistant Deputy Clerk', 'San Francisco, CA', 'High School Degree'),
  createData('Int-Learn', 'Online Tutor', 'San Francisco, CA/Remote', 'High School Degree'),
  createData('Amazon', 'Software Developer', 'Palo Alto, CA', 'Bachelors Degree'),
  createData('Convent & Stuart Hall', 'After School Program Staff', 'San Francisco, CA', 'High School Degree'),
];

export default function ControlledOpenSelect() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const [open, setOpen] = React.useState(false);
//event handler for education type
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
//event handler for job type.
  const [jobtype, setjob] = React.useState('');
  const [open1, setOpen1] = React.useState(false);

  const handleChange1 = (event1) => {
    setjob(event1.target.value1);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };

  const handleOpen1 = () => {
    setOpen1(true);
  };
//event handler for location/area
  const [location, setLocation] = React.useState('');
  const [open2, setOpen2] = React.useState(false);

  const handleChange2 = (event2) => {
    setLocation(event2.target.value2);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const handleOpen2 = () => {
    setOpen2(true);
  };

  //event handler for Salary Range
  const [salary, setSalary] = React.useState('');
  const [open3, setOpen3] = React.useState(false);

  const handleChange3 = (event3) => {
    setLocation(event3.target.value3);
  };

  const handleClose3 = () => {
    setOpen3(false);
  };

  const handleOpen3 = () => {
    setOpen3(true);
  };

  return (
    <div>

      <Card>
        <CardContent>
            <Box><font size = "+2" ><b>Job Search</b></font> </Box> <br></br><Divider/> <br></br>
            {/* <b>Filter By: </b> */}
            {/* Filter by Education level */}
            {/* <FormControl className={classes.formControl}>
              <InputLabel id="demo-controlled-open-select-label">Education</InputLabel>
              <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                value={age}
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Middle School Education</MenuItem>
                <MenuItem value={20}>High School Diploma</MenuItem>
                <MenuItem value={30}>Bachelors Degree</MenuItem>
                <MenuItem value={40}>Masters Degree</MenuItem>
                <MenuItem value={50}>PHD Degree</MenuItem>
              </Select>
            </FormControl>
        
            {/* Filter by Job Type */}
            {/* <FormControl className={classes.formControl}>
              <InputLabel id="demo-controlled-open-select-label">Job Type</InputLabel>
              <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                open1={open1}
                onClose1={handleClose1}
                onOpen1={handleOpen1}
                value1={jobtype}
                onChange={handleChange1}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Technology/Sciences</MenuItem>
                <MenuItem value={20}>Health</MenuItem>
                <MenuItem value={30}>Business</MenuItem>
                <MenuItem value={40}>Natural Resources</MenuItem>
                <MenuItem value={50}>Education</MenuItem>
              </Select>
            </FormControl> */}
        
            {/* Location/Area Job filter */}
            {/* <FormControl className={classes.formControl}>
              <InputLabel id="demo-controlled-open-select-label">Location</InputLabel>
              <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                open2={open2}
                onClose2={handleClose2}
                onOpen2={handleOpen2}
                value2={location}
                onChange={handleChange2}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Bay Area</MenuItem>
                <MenuItem value={20}>Northern California</MenuItem>
                <MenuItem value={30}>Central Coast</MenuItem>
                <MenuItem value={40}>Southern California</MenuItem>
              </Select>
            </FormControl> */}
        
            {/* Salary Type filter */}
            {/* <FormControl className={classes.formControl}>
              <InputLabel id="demo-controlled-open-select-label">Salary Range</InputLabel>
              <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                open3={open3}
                onClose3={handleClose3}
                onOpen3={handleOpen3}
                value3={salary}
                onChange={handleChange3}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Under $40000</MenuItem>
                <MenuItem value={20}>$40000-$55000</MenuItem>
                <MenuItem value={30}>$55000-$65000</MenuItem>
                <MenuItem value={40}>$65000-$85000</MenuItem>
                <MenuItem value={50}>$85000+</MenuItem>
              </Select>
            </FormControl>  */}
{/* 
          <br></br>
          <br></br> */}

          {/*Table for Job selection Data */}
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Company Name</TableCell>
                  <TableCell align="right">Job Type</TableCell>
                  <TableCell align="right">Location</TableCell>
                  <TableCell align="right">Education Level</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.jobType}</TableCell>
                    <TableCell align="right">{row.location}</TableCell>
                    <TableCell align="right">{row.education}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </div>   
  );
}
