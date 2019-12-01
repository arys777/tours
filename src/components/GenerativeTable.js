import React from 'react';
import { 
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Table,
  makeStyles 
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    marginTop: 10,
    marginBottom: 10
  },
  table: {
    minWidth: 650,
  },
});

const GenerativeTable = ({ data: { headers, rows } }) => {
  const classes = useStyles();

  return (
    <Paper>
      <Table className={classes.table} aria-label="generative-table">
        <TableHead>
          <TableRow>
            {headers.map((el, i) => <TableCell key={`${el}_${i}`}>{el}</TableCell>)}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row}>
              {row.map((cell, i) => <TableCell key={`${cell}_${i}`}>{cell}</TableCell>)}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default GenerativeTable;