import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

// import LocationComponent from './location.jsx'
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        padding: 20
    },
    container: {
        maxHeight: 440,
    },
    boldFont: {
        fontWeight: props => props.fontWeight,
    },
    rowColor: {
        '&:nth-of-type(odd)': {
            'background-color': '#AF9164',
        },
        '&:nth-of-type(even)': {
            backgroundColor: '#AE9060',
        },
    },
}));

const columns = [
    { id: 'city', label: 'City', minWidth: 200 },
    { id: 'name', label: 'Name of Food Bank', minWidth: 230 },
    { id: 'address', label: 'Address', minWidth: 170 },
    { id: 'info', label: 'Contact Information', minWidth: 100 }
];

// Got from Stack Overflow to have phone number formatted https://stackoverflow.com/questions/8358084/regular-expression-to-reformat-a-us-phone-number-in-javascript
function formatPhoneNumber(phoneNumberString) {
    var cleaned = ('' + phoneNumberString).replace(/\D/g, '')
    var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
    if (match) {
        return '(' + match[1] + ') ' + match[2] + '-' + match[3]
    }
    return null
}

function createData(city, name, address, info) {
    info = formatPhoneNumber(info);
    // city = linkToGoogleMaps(city);
    return { city, name, address, info };
}

// FOR FILTERING line 61-87
const originalFoodTable = [
    createData('Los Angeles', 'Los Angeles Regional Food Bank', '1734 E 41st St, Los Angeles, CA 90058', '3232343030'),
    createData('Santa Cruz', 'Food Distribution Center - Santa Cruz AIDS Project', '313 Front St, Santa Cruz, CA 95060', '8314273900'),
    createData('Los Angeles', 'Food Pantry Lax', '355 E Beach Ave, Inglewood, CA 90302', '3106775597'),
    createData('San Francisco', 'Food Distribution Center - Economic Opportunity Council Of San Francisco', '1426 Fillmore St, San Francisco, CA 94115', '4157495930'),
    createData('San Jose', 'Second Harvest of Silicon Valley', '750 Curtner Ave, San Jose, CA 95125', '4082668866'),
    createData('San Jose', 'Food Distribution Center - Sacred Heart Community Service', '1381 S 1st St, San Jose, CA 95110', '4082782160'),
    createData('Los Angeles', 'Los Angeles World Harvest Food Bank', '3100 Venice Blvd, Los Angeles, CA 90019', '2137462227'),
    createData('Sacramento', 'Food Distribution Center - Sacramento Bread of Life', '7510 24th St, Sacramento, CA 95822', '9164276848'),
    createData('Sacramento', 'Sacramento Food Bank & Family Services', '3333 3rd Ave, Sacramento, CA 95817', '9164561980'),
    createData('San Francisco', 'Food Distribution Center - San Francisco Day Labor Program', 'Raza Centro Legal, San Francisco, CA 94103', '4152525375'),
    createData('Santa Cruz', 'Food Distribution Center - Community Action Board Of Santa Cruz County, Inc.', '501 Soquel Ave, Santa Cruz, CA 95062', '4084571741'),
    createData('Santa Cruz', 'Food Distribution Center - Homeless Services Center', '115 Coral St, Santa Cruz, CA 95060', '8314586020'),
    createData('San Francisco', 'Food Distribution Center - Youth with a Mission', '357 Ellis St, San Francisco, CA 94102', '4158856543'),
    createData('Los Angeles', 'Food Distribution Center - Los Angeles Mission', '303 E 5th St, Los Angeles, CA 90013', '2136291227'),
    createData('Los Angeles', 'Food Distribution Center - Hunger Action Los Angeles', '961 S Mariposa Ave, Los Angeles, CA 90006', '2133888228'),
    createData('Sacramento', 'Food Distribution Center - Sacramento County Dept. Of Human Assistance', '2433 Marconi Ave, Sacramento, CA 95821', '9169850133'),
    createData('Sacramento', 'Food Distribution Center - Sacramento City/county Hunger Commission', '2125 19th St, Sacramento, CA 95818', '9164424731'),
    createData('San Francisco', 'Food Distribution Center - Mission Bay Community Church', '32 Ocean Ave, San Francisco, CA 94112', '4157874751'),
    createData('San Jose', 'Food Distribution Center - Tower Foundation Of San Jose State University', '1 Washington Square, San Jose, CA 95112', '4089241508'),
    createData('Sacramento', 'River City Food Bank', '1800 28th St, Sacramento, CA 95816', '9164462627'),
    createData('San Francisco', 'San Francisco-Marin Food Bank', '900 Pennsylvania Ave, San Francisco, CA 94107', '4152821900'),
    createData('San Jose', 'South Valley FISH Food Pantry', '5100 Camden Ave, San Jose, CA 95124', '4086694949'),
    createData('San Jose', 'Food Distribution Center - Operation Share', '479 Blossom Hill Rd, San Jose, CA 95123', '4082241190'),
    createData('Santa Cruz', 'Food Distribution Center - Calvary Food Pantry', '532 Center St, Santa Cruz, CA 95060', '8314238787'),
    createData('Santa Cruz', 'Food Distribution Center - Welfare And Low Income Support Network, Inc.', '407 Broadway, Santa Cruz, CA 95060', '8314589070')
];

const cities = [
    { city: 'Santa Cruz' },
    { city: 'Sacramento' },
    { city: 'Los Angeles' },
    { city: 'San Jose' },
    { city: 'San Francisco' },
];

export default function StickyHeadTable() {
    const props = { fontWeight: 'bold', ['background-color']: 'blue', color: 'red' };
    const classes = useStyles(props);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    // FOR FILTERING line 102
    let [foodTable, setFoodTable] = React.useState(originalFoodTable);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    // FOR FILTERING lines 112-123
    const handleCityChange = (city) => {
        // Do the filtering of cities here
        if (city === null || city === '') {
            setFoodTable(originalFoodTable);
        } else {
            setFoodTable(foodTable.filter((row) => {
                return row.city === city;
            }));
        }
        console.log(city);
    };

    return (
        <Paper className={classes.root}>
            <Typography variant="h5">
                <Box fontWeight="fontWeightBold">
                    Find a Food Bank near you!
                </Box>
            </Typography>
            <div style={{ width: 300 }}>
                {/* FOR FILTERING lines 135-149 */}
                <Autocomplete
                    freeSolo
                    id="free-solo-2-demo"
                    options={cities.map((option) => option.city)}
                    onChange={(c, value) => handleCityChange(value)}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Search city of food bank"
                            margin="normal"
                            variant="outlined"
                        />
                    )}
                />
            </div>
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow className={classes.tableRow}>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth, 'background-color': '#AA5042' }}
                                    className={classes.boldFont}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {/* FOR FILTERING */}
                        {foodTable.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                    {columns.map((column) => {
                                        const value = row[column.id];
                                        return (
                                            <TableCell key={column.id} align={column.align}>
                                                {column.format && typeof value === 'number' ? column.format(value) : value}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10]}
                component="div"
                count={foodTable.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper>
    );
}
