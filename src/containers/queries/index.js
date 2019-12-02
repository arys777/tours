import React, { useState, useEffect, useCallback } from 'react';
import { Container, Typography, Button, CircularProgress } from '@material-ui/core';
import { printComponent } from "react-print-tool";

import client from '../../client';
import useStyles from './styles';
import GenerativeTable from '../../components/GenerativeTable';
import { parseData } from '../../utils';

const Queries = () => {
  const classes = useStyles();
  const [firstContract, setFirstContract] = useState();
  const [financeReport, setFinanceReport] = useState({
    sum: 0,
    history: [],
  });
  const [toursSoldThisYear, setToursSoldThisYear] = useState();

  const [financeReportData, setFinanceReportDate] = useState({
    employee_id: 1,
    date_start: '2019-01-01',
    date_end: '2019-12-03',
  });

  useEffect(() => {
    Promise.all([
      client.getEntityData('/firstContract').then(({ data }) => setFirstContract(data)),
      client.getEntityData('/toursSoldThisYear').then(({ data }) => setToursSoldThisYear(data)),
    ]);
  }, []);

  useEffect(() => {
    client.getEntityData('/financeReport', { params: financeReportData }).then(({ data }) => setFinanceReport(data));
  },[financeReportData]);
  console.log({firstContract, financeReport, toursSoldThisYear });
  return (
    <Container>
      <Typography className={classes.title} variant="h4">Запросы</Typography>
      <Container className={classes.reportContainer} key='firstContract'>
        <Typography className={classes.title} variant="h5">1. «I-ый» договор</Typography>
        <GenerativeTable data={parseData(firstContract)} />
      </Container>
      <Container className={classes.reportContainer} key='financeReport'>
  <Typography className={classes.title} variant="h5">2. Финансовый отчет на {financeReportData.date_start} : {financeReportData.date_end}, сотрудника: {financeReportData.employee_id}</Typography>
        <Typography className={classes.title} variant="h5">Сумма: {financeReport.sum}</Typography>
        <Typography className={classes.title} variant="h5">История платежей:</Typography>
        <GenerativeTable data={parseData(financeReport.history)} />
      </Container>
      <Container className={classes.reportContainer} key='toursSoldThisYear'>
        <Typography className={classes.title} variant="h5">3. Список туров, реализованных в текущем году</Typography>
        <GenerativeTable data={parseData(toursSoldThisYear)} />
      </Container>
    </Container>
  );
};

export default Queries;