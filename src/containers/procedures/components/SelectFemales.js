import React, { useState, useEffect } from 'react';
import { Container, Typography } from '@material-ui/core';

import GenerativeTable from '../../../components/GenerativeTable';
import useStyles from '../styles';

import client from '../../../client';
import { parseData } from '../../../utils';

const SelectFemales = () => {
  const [clients, setClients] = useState();

  const classes = useStyles();

  useEffect(() => {
    client
      .getEntityData('/females18_25')
      .then(({ data }) => setClients(data))
  }, []);

  return (
    <Container className={classes.rootInner}>
      <Typography variant="h5">
        2. Из таблицы Клиенты выбрать строки по условию: женщины в возрасте от 18 до 25 лет
      </Typography>
      <GenerativeTable data={parseData(clients)} />
    </Container>
  );
};

SelectFemales.propTypes = {
  
};

export default SelectFemales;