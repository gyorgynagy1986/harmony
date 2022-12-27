import React, { useState } from "react";
import Styles from '../styles/Contact.module.css'




export default function App( {afterSernd , btnColorHandeler} ) {
  
  const [send, setSend] = useState('küldés')
  const [query, setQuery] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
   
  });


  const emailhandeler = () => {
    setTimeout(() => {
      setSend('Küldés.')
    }, "300")
    setTimeout(() => {
      setSend('Küldés..')
    }, "600") 
    setTimeout(() => {
      setSend('Küldés...')
    }, "900")
    
    setTimeout(() => {
      setSend('Elküldve')
    }, "1800")

    setTimeout(() => {
      afterSernd(true)
    }, "1800")

    setTimeout(() => {
      setSend('Küldés')
    }, "20000")
    setTimeout(() => {
      afterSernd(false)
    }, "20000")
  }

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
    fetch("https://getform.io/f/7d4e23a1-0ed6-4000-ae4f-7fee2e4af4e4", {
      method: "POST",
      body: formData
    }).then(() => {
      setQuery({ name: "", email: "", number: "", message: "", })
      console.log('this is done')
      emailhandeler();
    });
  };
  return (
    <div className="App">
      <form onSubmit={formSubmit}>
        <div className={Styles.inputContainer} >
          <label>Teljes Név*</label>
          <input
            type="text"
            name="name"
            required
            placeholder=""
            className="form-control"
            value={query.name}
            onChange={handleParam()}
          />
        </div>
        <div className={Styles.inputContainer}>
          <label>Email cím*</label>
          <input
            type="email"
            name="email"
            required
            placeholder=""
            className="form-control"
            value={query.email}
            onChange={handleParam()}
          />
        </div>
        <div className={Styles.inputContainer}>
          <label>Telefonszám</label>
          <input
            type="text"
            name="number"
            required
            placeholder=""
            className="form-control"
            value={query.number}
            onChange={handleParam()}
          />
        </div>
        <div className={Styles.inputContainer}>
          <label>Message*</label>
          <textarea
            type="text"
            name="message"
            required
            placeholder=""
            className="form-control"
            value={query.message}
            onChange={handleParam()}
          />
        </div>
        <button className={ `${Styles.inputBtn} ${send.includes('Elküldve') === true ? Styles.inputBtnColor : ''}`}  type="submit">{send}</button>
      </form>
    </div>
  );
}