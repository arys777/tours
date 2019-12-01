import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:7777',
  timeout: 1000,
});

const search = ({ countryId, tourId, duration, maxPrice }) => 
  instance.get('/searchTours', {
    params: {
      country_id: countryId,
      tour_id: tourId,
      duration,
      max_price: maxPrice
    }
  });

const getSearchData = () => instance.get('/searchData');

const createPayment = params => instance.post('/createPayment', params);

const createContract = params => instance.post('/createContract', params);

const searchByCountryName = countryName => instance.get('/searchByCountryName', { params: {
  country_name: countryName 
}});

const getEntityData = instance.get;

export default {
  search,
  getSearchData,
  getEntityData,
  createPayment,
  createContract,
  searchByCountryName,
};