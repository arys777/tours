import React, { useState, useEffect, useCallback } from 'react';
import { Container, Typography, FormControl, TextField } from '@material-ui/core';

import client from '../../client';
import useStyles from './styles';
import GenerativeTable from '../../components/GenerativeTable';
import { parseData } from '../../utils';

const Indexes = () => {
  const [countryName, setCountryName] = useState();
  const [countries, setCountries] = useState();
  const classes = useStyles();

  useEffect(() => {
    client
      .searchByCountryName(countryName)
      .then(response => setCountries(response.data))
      .catch(err => alert(err.response.data.message))
  }, [countryName]);

  return (
    <Container className={classes.root}>
      <Typography className={classes.title} variant="h5">
        Индекс по имени страны для поиска
      </Typography>
      <FormControl className={classes.formControl}>
        <TextField 
          onChange={event => setCountryName(event.target.value)}
          value={countryName}
          id="country-name" 
          label="Название Страны" 
          variant="outlined"
        />
      </FormControl>
      <GenerativeTable data={parseData(countries)} />
    </Container>
  );
};

export default Indexes;