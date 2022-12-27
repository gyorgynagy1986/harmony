import React, { useState } from "react";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DatePicker, DateRangePicker } from '@mui/x-date-pickers';
import TextField from '@mui/material/TextField';
import { hu } from "date-fns/locale";
import DateFnsUtils from "@date-io/date-fns";
import { Input } from 'semantic-ui-react'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';



export default function App() {


  const [value, setValue] = useState(new Date())

  console.log(value);


  const [send, setSend] = useState('küldés')
  const [query, setQuery] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
    
  });


  // let startDateToString = dateRange[0]?.toDateString('YYYY/mm/dd');  
  // let endDateToString = dateRange[1]?.toDateString('MM/dd/yyyy');
  
  //query.startDate = startDateToString;
  //query.endDate = endDateToString;
//


  // Update inputs value
  const handleParam = () => (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuery((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };
  // Form Submit function
  const formSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(query).forEach(([key, value]) => {
      formData.append(key, value);
    });

    console.log();
    fetch("", {
      method: "POST",
      body: formData
    }).then(() => {
      setQuery({ name: "", email: "", number: "", message: "", })
      console.log('this is done')
      setSend('Elküldve')
    });
  };
  return (
    <div className="App">
      <form onSubmit={formSubmit}>
        <div>
          <div>
            <label>Name</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Name"
              className="form-control"
              value={query.name}
              onChange={handleParam()}
            />
            </div>
            <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="Email"
              className="form-control"
              value={query.email}
              onChange={handleParam()}
            />
          </div>
          <div>
            <label>number</label>
            <input
              type="text"
              name="number"
              required
              placeholder="number"
              className="form-control"
              value={query.number}
              onChange={handleParam()}
            />
          </div>
          <div>
            <label>Message</label>
            <input
              type="text"
              name="message"
              required
              placeholder="Message"
              className="form-control"
              value={query.message}
              onChange={handleParam()}
            />
          </div>
        </div>
        <div>
        <LocalizationProvider locale={hu} utils={DateFnsUtils} dateAdapter={AdapterDateFns}>
            <DatePicker
              label='Érkezés'
              format="yyyy/MM/dd"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>    
        </div>
        <Button variant="contained" style={{background: '#515151'}} endIcon={<SendIcon />}>
         {}send </Button>
      </form>
    </div>
  );
}