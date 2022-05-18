import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 60,
  },
}));

const SizeDropdown = ({ HandleChange, Size,HandleClose,HandleOpen,Open}) => {
  const classes = useStyles();
  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="demo-controlled-open-select-label">Size</InputLabel>
      <Select
        labelId="demo-controlled-open-select-label"
        id="demo-controlled-open-select"
        open={Open}
        onClose={HandleClose}
        onOpen={HandleOpen}
        value={Size}
        onChange={HandleChange}
      >
        <MenuItem value=""></MenuItem>
        <MenuItem value="XS">XS</MenuItem>
        <MenuItem value="S">S</MenuItem>
        <MenuItem value="M">M</MenuItem>
        <MenuItem value="L">L</MenuItem>
        <MenuItem value="XL">XL</MenuItem>
        <MenuItem value="XXl">XXl</MenuItem>
      </Select>
    </FormControl>
  )
}
export default SizeDropdown;