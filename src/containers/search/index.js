import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';

import useStyles from './styles';
import client from '../../client';
import images from '../../images';

function Search() {
  const classes = useStyles();
  const [countryId, setCountryId] = React.useState(null);
  const [tourId, setTourId] = React.useState(null);
  const [duration, setDuration] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [maxPrice, setMaxPrice] = React.useState();
  const [searchData, setSearchData] = React.useState({
    countries: [],
    durations: [],
    tours: []
  });
  const [data, setData] = React.useState([]);
  const [errors, setErrors] = React.useState({
    countryId: false,
    tourId: false
  });

  React.useEffect(() => {
    client
      .getSearchData()
      .then(result => setSearchData(result.data));
  }, []);
  console.log(data);
  const handleButtonClick = () => {
    setSuccess(false);
    setLoading(true);

    client
      .search({ countryId, tourId, duration, maxPrice })
      .then(result => setData(result.data))
      .then(() => {
        setSuccess(true);
        setLoading(false);
      })
      .catch(err => {
        alert(err.message);
        setSuccess(false);
        setLoading(false);
      })
  };
  
  return (
    <Container>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <FormControl className={classes.formControl}>
              <InputLabel id="select-place-label">Куда лететь</InputLabel>
              <Select
                error={errors.countryId}
                labelId="select-place-label"
                id="select-place"
                value={countryId}
                onChange={event => setCountryId(event.target.value)}
              >
                <MenuItem value={null}>Любой</MenuItem>
                {searchData.countries.map(country => (
                  <MenuItem value={country.CountryId} key={country.CountryId}>{country.CountryName}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl className={classes.formControl}>
              <InputLabel id="select-tours-label">Выберите тур</InputLabel>
              <Select
                error={errors.tourId}
                labelId="select-tours-label"
                id="select-tours"
                value={tourId}
                onChange={event => setTourId(event.target.value)}
              >
                <MenuItem value={null}>Любой</MenuItem>
                {searchData.tours.map(tour => (
                  <MenuItem value={tour.TourId} key={tour.TourId}>{tour.TourName}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl className={classes.formControl}>
              <InputLabel id="select-duration-label">Выберите длительность</InputLabel>
              <Select
                error={errors.tourId}
                labelId="select-duration"
                id="select-duration"
                value={duration}
                onChange={event => setDuration(event.target.value)}
              >
                <MenuItem value={null}>Любой</MenuItem>
                {searchData.durations.map(duration => (
                  <MenuItem value={duration} key={duration}>{duration}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl className={classes.formControl}>
              <TextField 
                onChange={event => setMaxPrice(event.target.value)}
                value={maxPrice}
                id="standard-basic" 
                label="Цена тура до" 
                type="number" 
                />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              fullWidth
              color="primary"
              disabled={loading}
              onClick={handleButtonClick}
            >
              Искать!
            </Button>
          </Grid>
          <Grid item xs={12}>
            {loading && (
            <div style={{display: 'flex', justifyContent: 'center'}}>
              <CircularProgress thickness={5} size={30}/>
            </div>
            )}
          </Grid>
          {data.map(tour => (
            <Grid item xs={12}>
              <Paper className={classes.root}>
                <Grid container>
                  <Grid item xs={2}>
                    <img style={{ maxWidth: "100%" }} src={images[Math.floor(Math.random() * 10)]} alt={tour.TourName} />
                  </Grid>
                  <Grid item xs={10}>
                    <div style={{ margin: 10 }}>
                      <Typography variant="h5" component="h3">
                        {`${tour.CountryName}, ${tour.TourName}`}
                      </Typography>
                      <Typography component="p">
                        Цена: {tour.TourPrice} тенге<br/>
                        Длительность: {tour.TourDuration} дней
                      </Typography>
                    </div>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </div>
    </Container>
  );
}

export default Search;
