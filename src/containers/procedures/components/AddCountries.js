import React, { useState } from 'react';
import { Container, Typography, Button } from '@material-ui/core';

import GenerativeTable from '../../../components/GenerativeTable';
import useStyles from '../styles';

import client from '../../../client';
import { parseData } from '../../../utils';

const AddCountries = () => {
  const [countries, setCountries] = useState();

  const classes = useStyles();

  const addCountries = () => {
    client
      .getEntityData('/add3countries')
      .then(({ data }) => setCountries(data))
  };

  return (
    <Container className={classes.rootInner}>
      <Typography variant="h5">
        3. Вставить три новых строки в таблицу Страны
      </Typography>
      <Button 
        onClick={addCountries}
        className={classes.button} 
        color="primary"
        variant="contained"
        fullWidth
      >
          Добавить 3 страны
      </Button>
      <GenerativeTable data={parseData(countries)} />
    </Container>
  );
};

export default AddCountries;