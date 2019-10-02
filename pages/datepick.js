import React, { Fragment, useState } from 'react';
import { DatePicker } from '@material-ui/pickers';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
function BasicDatePicker(props) {

  const [selectedDate, handleDateChange] = useState(new Date());

  return (
  <MuiPickersUtilsProvider utils={MomentUtils}>>
    <Fragment>
      <DatePicker
        label="Basic example"
        value={selectedDate}
        onChange={handleDateChange}
        animateYearScrolling
      />

      <DatePicker
        autoOk
        label="Clearable"
        clearable
        disableFuture
        value={selectedDate}
        onChange={handleDateChange}
      />

      <DatePicker
        disableFuture
        openTo="year"
        label="Date of birth"
        views={['year', 'month', 'date']}
        value={selectedDate}
        onChange={handleDateChange}
      />
    </Fragment>
  </MuiPickersUtilsProvider>
  );
}

export default BasicDatePicker;