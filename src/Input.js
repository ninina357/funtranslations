import React, { useState } from 'react';
import axios from "axios";
import "./Style.css";

function Input(){

  const [text,setText] = useState("");
  const [choice,setChoice] = useState("");
  let [trText,setTrText] = useState ("Your translation will appear here");
  var eMessage = "There has been an error with your translation. This translator uses translation services limited to 5 translations an hour. Please wait and refresh to continue."

  const handleChange = (e) => {
    setText(e.target.value);
    console.log(text);
  }

  const handleSelectChange = (e) => {
    setChoice(e.target.value);
    console.log(choice);
  }

  const handleSubmit = () => {

    if(text===""){
      setTrText("Please enter text to translate");
    } 
    else{
      if (choice === "") {
        setTrText("Please select a language");
      }
      if (choice === "select") {
        setTrText("Please select a language");
      }
      if (choice === "yoda") {
        axios.post('/translate/yoda.json', {text})
        .then (res=> {
          const {translated} = res.data.contents;
          setTrText(translated);
        }).catch(err=>{
          alert(eMessage);
        });
      }
      if (choice === "pig") {
        axios.post('/translate/pig-latin.json', {text})
        .then (res=> {
          const {translated} = res.data.contents;
          setTrText(translated);
        }).catch(err=>{
          alert(eMessage);
        });
      }
      if (choice === "shake") {
        axios.post('/translate/shakespeare.json', {text})
        .then (res=> {
          const {translated} = res.data.contents;
          setTrText(translated);
        }).catch(err=>{
          alert(eMessage);
        });
      }
      if (choice === "morse") {
        axios.post('/translate/morse.json', {text})
        .then (res=> {
          const {translated} = res.data.contents;
          setTrText(translated);
        }).catch(err=>{
          alert(eMessage);
        });
      }
    }
  }

  return(
    <div className="App">
      <div class="top">
        <h1>Fun Translations</h1>
        <p class="inst">Just enter your text, select a language, and hit translate!</p>

        <form>
        <textarea name="text" placeholder="enter your text here..." onChange={(e) => handleChange(e)}></textarea>
        <br></br>
        <select id="lang" name="lang" onChange={(e) => handleSelectChange(e)}>
          <option value="select">Select</option>
          <option value="yoda">Yoda</option>
          <option value="pig">Pig-latin</option>
          <option value="shake">Shakespeare</option>
          <option value="morse">Morse Code</option>
        </select>
        <button type="button" onClick={(text) => handleSubmit(text)}>Translate!</button>
        </form>

      </div>

      <div class="bottom">
      <p class="translated">{trText}</p>
      </div>

    </div>
  );
}

export default Input;
