import React, { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, makeStyles } from '@material-ui/core';

import client from '../../client';
import GenerativeTable from '../../components/GenerativeTable';

const useStyles = makeStyles({
  root: {
    marginTop: 10,
    marginBottom: 10
  },
  table: {
    minWidth: 650,
  },
});

const SimpleTable = () => {
  const classes = useStyles();
  const location = useLocation();
  const [data, setData] = useState();
  
  useEffect(() => {
    client
      .getEntityData(location.pathname)
      .then(result => setData(result.data))
      .catch(err => alert(err.message))
  }, [location]);

  const tableData = useCallback(() => {
    if(data) {
      return {
        headers: Object.keys(data[0]),
        rows: data.map(row => Object.values(row))
      }
    } else {
      return {
        headers: [],
        rows: [],
      }
    }
  }, [data]);

  return (
    <Container className={classes.root}>
      <GenerativeTable data={tableData()} />
    </Container>
  );
};

export default SimpleTable;