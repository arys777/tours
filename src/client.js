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

const getEntityData = instance.get;

export default {
  search,
  getSearchData,
  getEntityData
};