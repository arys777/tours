import React from 'react';
import { Container } from '@material-ui/core';

import EmployeeContracts from './components/EmployeeContracts';
import AddCountries from './components/AddCountries';
import SelectFemales from './components/SelectFemales';

import useStyles from './styles';
import ContractDuration from './components/ContractDuration';

const Procedures = props => {
  const classes = useStyles();

  return (
    <Container className={classes.root} >
      <EmployeeContracts />
      <SelectFemales />
      <AddCountries />
      <ContractDuration />
    </Container>
  );
};

export default Procedures;