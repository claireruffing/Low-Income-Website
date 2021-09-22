/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function LocationFoodBank() {
    return (
        <div style={{ width: 300 }}>
            <Autocomplete
                freeSolo
                id="free-solo-2-demo"
                disableClearable
                options={cities.map((option) => option.city)}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Search city of food bank"
                        margin="normal"
                        variant="outlined"
                        InputProps={{ ...params.InputProps, type: 'search' }}
                    />
                )}
            />
        </div>
    );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const cities = [
    { city: 'Santa Cruz'},
    { city: 'Sacramento'},
    { city: 'Los Angeles'},
    { city: 'San Jose'},
    { city: 'San Francisco'},
];
