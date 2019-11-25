import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const SelectItem = ({ error, value, onChange, options, label }) => {
  console.log(options);
  return (
    <React.Fragment>
      <InputLabel id="select-duration-label">{label}</InputLabel>
      <Select
        error={error}
        labelId="select-duration"
        id="select-duration"
        value={value}
        onChange={onChange}
      >
        {options.map(duration => (
          <MenuItem value={duration}>{duration}</MenuItem>
        ))}
      </Select>
    </React.Fragment>
  )
}

export default SelectItem;