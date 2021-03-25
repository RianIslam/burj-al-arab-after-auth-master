import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import Button from '@material-ui/core/Button';

import React, { useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {UserContext} from '../../App'





const Book = () => {
    const {bedType} = useParams();

    const [loggedInUser,setLoggedInUser] = useContext(UserContext);

    const [selectedDate, setSelectedDate] = useState({
        checkIn:new Date(),
        checkOut:new Date()
    });

    const handleDateChange = (date) => {
      setSelectedDate(date);
    };
    return (
        <div style={{textAlign: 'center'}}>
            <h1>Hello,{loggedInUser.name}! {bedType} Room.</h1>
            <p>Want a <Link to="/home">different room?</Link> </p>

            <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Date picker inline"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Date picker dialog"
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        
      </Grid>
      <Button variant="contained" color="primary">
  Book Now
</Button>
    </MuiPickersUtilsProvider>



        </div>
    );
};

export default Book;