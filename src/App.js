import React, {useState} from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import './App.css';


const App = () => {
  const [linkText, setLinkText] = useState("");
  const [shortLink, setShortLink] = useState("");

  async function handleClick(e) {
    e.preventDefault();
    try {
      var response = await fetch('http://localhost:9000/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({link: linkText}),
    })
  } catch (err) {
    alert("Error adding new link, please email support at heols.linkshortener@gmail.com. Please include the date and approximate time you recieved the error.");
    console.log(err);
  }
    
    var body = await response.json();
    setShortLink(body.shortLink)
  }

  function handleChange(e) {
    setLinkText(e.target.value);
  }

  return (
    <>
      <h1>Welcome to <strong><span style={{color: "#0b5ed7"}}>Shortlink Me</span></strong></h1>
      <p>No signup necessary! Enter your URL below for a free shortened link you can use <strong>anywhere!</strong></p>
            <InputGroup className="w-40 mx-auto">
                <FormControl
                onChange={handleChange}
                name="url-to-shorten"
                placeholder="URL"
                aria-label="URL to shorten"
                aria-describedby="basic-addon2"
                />
                <Button name="shorten-url-btn" onClick={handleClick} type="submit" variant="primary" id="button-addon2">Shorten URL</Button>
            </InputGroup>
            <a href={shortLink}>{shortLink}</a>
      <p style={{fontSize: ".75rem"}}>Copyright 2021 @ Hope Olson Studio</p>
    </>
  )
}

export default App;