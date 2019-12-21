import React, { useState, useEffect, useCallback } from 'react';
import { Container, Typography, CircularProgress } from '@material-ui/core';

import client from '../../client';
import useStyles from './styles';
import GenerativeTable from '../../components/GenerativeTable';
import { parseData } from '../../utils';

const Reports = () => {
  const [incomeSumByEmployees, setIncomeSumByEmployees] = useState();
  const [clientsByAddress, setClientsByAddress] = useState();
  const [toursByCountry, setToursByCountry] = useState();
  const [tourByPrice, setTourByPrice] = useState();
  const [popularServices, setPopularServices] = useState();
  const classes = useStyles();

  const REPORT_QUERIES = [
    { url: '/incomeSumByEmployees', setter: setIncomeSumByEmployees },
    { url: '/clientsByAddress', setter: setClientsByAddress, params: { address: 'Address 2' } },
    { url: '/toursByCountry', setter: setToursByCountry, params: { country: 'Turkey' } },
    { url: '/tourByPrice', setter: setTourByPrice, params: { from: 1000, to: 2500 } },
    { url: 'popularServices', setter: setPopularServices }
  ];

  useEffect(() => {
    Promise.all(
      REPORT_QUERIES.map(({ url, setter, params={} }) =>
        client
          .getEntityData(url, { params })
          .then(({ data }) => setter(data))
      )
    )
  }, []);

  const tableData = useCallback(() => {
    return [
      { key: 'incomeSumByEmployees', data: parseData(incomeSumByEmployees), title: 'Сумма прихода по каждому из сотрудников в текущем месяце' },
      { key: 'clientsByAddress', data: parseData(clientsByAddress), title: 'Список клиентов, проживающих по адресу «Address 2»' },
      { key: 'toursByCountry', data: parseData(toursByCountry), title: 'Список туров в Турцию' },
      { key: 'tourByPrice', data: parseData(tourByPrice), title: 'Стоимость туров, стоимость которых находится в диапазоне от «1000» до «2500»' },      
      { key: 'popularServices', data: parseData(popularServices), title: 'Какой вид услуги больше всего затребован клиентами?' },
    ];
  }, [tourByPrice, incomeSumByEmployees, clientsByAddress, toursByCountry, popularServices]);

  return (
    <Container className={classes.root}>
      {tableData().map(({ key, data, title }) => (
        <Container className={classes.reportContainer} key={key}>
          <Typography className={classes.title} variant="h5">{title}</Typography>
          {data.headers.length > 0 ? (
            <GenerativeTable data={data} />
          ) : (
            <CircularProgress thickness={5} size={30}/>
          )}
        </Container>
      ))}
    </Container>
  );
};

export default Reports;
