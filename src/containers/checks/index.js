import React, { useState } from 'react';
import { Container, Typography, Grid, Button } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import useStyles from './styles';
import client from '../../client';
import { randomInterval } from '../../utils';

const Checks = () => {
  const [response, setResponse] = useState();
  const [beginDate, setBeginDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const classes = useStyles();
  
  const createContract = () => {
    client
      .createContract({
        employee_id: randomInterval(1, 3), 
        client_id: randomInterval(1, 4), 
        tour_id: randomInterval(1, 4),
        begin_date: beginDate,
        end_date: endDate,
      })
      .then(() => setResponse("Договор успешно создан"))
      .catch(err => setResponse(err.response.data.message))
  }

  return (
    <Container className={classes.root}>
      <Typography variant="h5">
        Проверка на привильность дат при создании договора
      </Typography>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="dd.MM.yyyy"
              margin="normal"
              fullWidth
              id="date-begin"
              label="Дата начала"
              value={beginDate}
              onChange={(date) => setBeginDate(date)}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              margin="normal"
              fullWidth
              format="dd.MM.yyyy"
              id="date-end"
              label="Дата конца"
              value={endDate}
              onChange={(date) => setEndDate(date)}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </Grid>
          <Grid item xs={12}>
          <Button 
            onClick={createContract}
            className={classes.button} 
            color="primary"
            variant="contained"
            fullWidth
          >
              Создать Договор
          </Button>
          </Grid>
        </Grid>
      </MuiPickersUtilsProvider>
      <Typography variant="h5">
        {response}
      </Typography>
    </Container>
  );
};

export default Checks;