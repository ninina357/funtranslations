import React, { useState } from 'react';
import axios from "axios";

function Input(){

  const [text,setText] = useState("");
  const [choice,setChoice] = useState("");
  let [trText,setTrText] = useState ("");

  const handleChange = (e) => {
    setText(e.target.value);
    console.log(text);
  }

  const handleSelectChange = (e) => {
    setChoice(e.target.value);
    console.log(choice);
  }

  const handleSubmit = () => {
    if (choice === "yoda") {
      axios.post('/translate/yoda.json', {text})
      .then (res=> {
        const {translated} = res.data.contents;
        setTrText(translated);
      })
    }
    if (choice === "pig") {
      axios.post('/translate/pig-latin.json', {text})
      .then (res=> {
        const {translated} = res.data.contents;
        setTrText(translated);
      })
    }
    if (choice === "shake") {
      axios.post('/translate/shakespeare.json', {text})
      .then (res=> {
        const {translated} = res.data.contents;
        setTrText(translated);
      })
    }
    if (choice === "morse") {
      axios.post('/translate/morse.json', {text})
      .then (res=> {
        const {translated} = res.data.contents;
        setTrText(translated);
      })
    }
  }

  return(
    <div className="App">
      <h3>Enter your text and select a language</h3>
      <form>
      <textarea name="text" placeholder="enter here" onChange={(e) => handleChange(e)}></textarea>
      <select id="lang" name="lang" onChange={(e) => handleSelectChange(e)}>
        <option value="yoda">Yoda</option>
        <option value="pig">Pig-latin</option>
        <option value="shake">Shakespear</option>
        <option value="morse">Morse Code</option>
      </select>
      <button type="button" onClick={(text) => handleSubmit(text)}>Translate!</button>
      </form>
      <p>{trText}</p>
    </div>
  );
}

export default Input;
