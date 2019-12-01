import React, { useState, useEffect } from 'react';
import { Container, Typography, FormControl, TextField } from '@material-ui/core';

import GenerativeTable from '../../../components/GenerativeTable';
import useStyles from '../styles';

import client from '../../../client';
import { parseData } from '../../../utils';

const EmployeeContracts = props => {
  const [id, setId] = useState(false);
  const [contracts, setContracts] = useState();

  const classes = useStyles();

  useEffect(() => {
    client
      .getEntityData('/employeeContracts', { params: { id } })
      .then(({ data }) => setContracts(data))
      .catch(() => setContracts(false))
  }, [id]);

  return (
    <Container className={classes.rootInner}>
      <Typography variant="h5">
        1. Из таблицы Договора выбрать строки по условию: договора, оформленные «I-ым» сотрудников в текущем году (*код сотрудника задавать как параметр)
      </Typography>
      <FormControl className={classes.formControl}>
        <TextField 
          onChange={event => setId(event.target.value)}
          value={id}
          id="employee-id" 
          label="Код Сотрудника" 
          type="number"
          variant="outlined"
        />
      </FormControl>
      <GenerativeTable data={parseData(contracts)} />
    </Container>
  );
};

export default EmployeeContracts;