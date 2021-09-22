import { Typography } from '@material-ui/core';
import React, { useState } from 'react';
import scholarship from "./scholarships.json";
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
    buttonColor: {
        backgroundColor: "#aa5042",
        color: '#ffffff'
    },
    customizeToolbar: {
        minHeight: 36
    },
    smallToolBar: {
        minHeight: 15
    },
    details: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    leftPadding: {
        paddingLeft: 20
    }
  }));

export default function ScholarshipComponent() {
    const classes = useStyles();
    const items = []
    const majorsList = Object.keys(scholarship)
    const [selectedMajor, setSelectedMajor] = useState('Computer Science');
    console.log(selectedMajor)

            scholarship[selectedMajor].map((item, index) =>
                items.push(
                    <div>
                        <Card>
                            <CardContent>
                                <Typography>
                                <Box fontWeight="fontWeightBold">
                                    {item.name}
                                </Box>
                                <Box>
                                    {item.description}
                                </Box>
                                </Typography>
                                <Button variant="contained" href={item.link} target="_blank" className={classes.buttonColor}>
                                        Go to Scholarship
                                </Button>
                            </CardContent>
                        </Card>
                        <Toolbar className={classes.smallToolBar}/>
                    </div>
                )
            )
    return (
        <div>
            
            <Card>
                <div className={classes.details}>
                    <Typography>
                        <Box fontWeight="fontWeightBold" fontSize="h5.fontSize" className={classes.leftPadding}>
                            College scholarships
                        </Box>
                    </Typography>
                    <CardContent>
                        <Autocomplete
                            id="filter-demo"
                            options={majorsList}
                            onChange={(e, value) => value === null ? setSelectedMajor('Computer Science') : setSelectedMajor(value)}
                            defaultValue={'Computer Science'}
                            style={{ width: 300}}
                            renderInput={(params) => <TextField {...params} label="Filter By Major" variant="outlined" />}
                        />
                    </CardContent>
                </div> 
                <Divider />
                <Toolbar className={classes.smallToolBar}/>
                <CardContent>
                    {items}
                </CardContent>
            </Card>
            <Toolbar className={classes.customizeToolbar}/>
                <div className={classes.details}>
                    <Typography>
                        <Box fontWeight="fontWeightBold">
                            More scholarships available at: 
                        </Box>
                    </Typography>
                    <div className={classes.leftPadding} >
                        <Button variant="contained" color="primary" href="https://www.listsofscholarships.com/" target="_blank" size="small">
                            https://www.listsofscholarships.com/
                        </Button>
                    </div>
            
                </div>
        </div>
    )
}