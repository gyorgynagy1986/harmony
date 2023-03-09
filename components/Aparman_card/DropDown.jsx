import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const BasicSelect = ({chooseMessage, button}) => {

 const [apartment, setApartment] = React.useState(button);

  console.log(apartment, 'from Drop')

  const handleChange = (event) => {
    setApartment(event.target.value);
};


  return (
    <Box sx={{ minWidth: 50 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Apartman</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={apartment}
          onChange={handleChange}
          label='Apartman'
        >
          <MenuItem value={'1'}>Egyhálószobás apartman</MenuItem>
          <MenuItem value={'2'}>Stúdió apartman</MenuItem>
          <MenuItem value={'3'}>Családi apartman</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default BasicSelect