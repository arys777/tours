import React, { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Container } from '@material-ui/core';

import client from '../../client';

const useStyles = makeStyles({
  root: {
    marginTop: 10,
    marginBottom: 10
  },
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

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
        header: Object.keys(data[0]),
        rows: data.map(row => Object.values(row))
      }
    } else {
      return {
        header: [],
        rows: [],
      }
    }
  }, [data]);
  console.log(tableData());

  return (
    <Container className={classes.root}>
      <Paper>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              {tableData().header.map(el => <TableCell>{el}</TableCell>)}
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData().rows.map(row => (
              <TableRow key={row}>
                {row.map(cell => <TableCell>{cell}</TableCell>)}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Container>
  );
};

export default SimpleTable;