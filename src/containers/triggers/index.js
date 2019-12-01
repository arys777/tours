import React, { useState, useEffect } from 'react';
import { Container, Typography, Button } from '@material-ui/core';
import io from 'socket.io-client';

import useStyles from './styles';
import client from  '../../client';
import GenerativeTable from '../../components/GenerativeTable';
import { parseData, randomInterval } from '../../utils';

const socket = io.connect('http://localhost:7777');

const Triggers = () => {
  const [history, setHistory] = useState();
  const classes = useStyles();

  useEffect(() => {
    socket.on('history', setHistory)
    client
      .getEntityData('/history')
      .then(({ data }) => setHistory(data));
  }, []);

  const addPayment = () => {
    socket
      .emit('addPayment', { 
        employee_id: randomInterval(1, 3), 
        client_id: randomInterval(1, 4), 
        amount: randomInterval(1000, 100000),
        tour_id: randomInterval(1, 4),
      })
  }

  return (
    <Container className={classes.root}>
      <Typography variant="h5">
        При добавлении новой записи в таблицу Payments, данные будут записываться в таблицу History
      </Typography>
      <Button 
        onClick={addPayment}
        className={classes.button} 
        color="primary"
        variant="contained"
        fullWidth
      >
          Добавить запись в таблицу Payments
      </Button>
      <GenerativeTable data={parseData(history)} />
    </Container>
  );
};

export default Triggers;