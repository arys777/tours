import React, { useState, useEffect } from 'react';
import { Container, Typography, FormControl, TextField } from '@material-ui/core';

import useStyles from '../styles';
import client from '../../../client';

const ContractDuration = () => {
  const [id, setId] = useState(false);
  const [duration, setDuration] = useState();

  const classes = useStyles();

  useEffect(() => {
    client
      .getEntityData('/contractDuration', { params: { id } })
      .then(({ data }) => setDuration(data.Duration))
      .catch(() => setDuration(false))
  }, [id]);

  return (
    <Container className={classes.rootInner}>
      <Typography variant="h5">
        4. Вычислить общую длительность «I-го» договора в днях по таблице Договора (*номер договора задавать как параметр)
      </Typography>
      <FormControl className={classes.formControl}>
        <TextField 
          onChange={event => setId(event.target.value)}
          value={id}
          id="employee-id" 
          label="Код Договора" 
          type="number"
          variant="outlined"
        />
      </FormControl>
      {duration && (
        <Typography variant="subtitle1">
          Длительность: {duration} дней
        </Typography>
      )}
    </Container>
  );
};

export default ContractDuration;