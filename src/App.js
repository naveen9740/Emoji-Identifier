import React, { useState } from "react";
import "./styles.css";

export default function App() {
  let emojiDictionary = {
    "😊": "Smiling",
    "😎": "Handsome",
    "😥": "Sad",
    "😪": "Sleepy",
    "😆": "Funny"
  };
  let emojisWeKnow = Object.keys(emojiDictionary);
  let [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    let userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "No idea";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Emoji Identifier </h1>
      <input onChange={emojiInputHandler}></input>
      <h2>{meaning}</h2>
      <h3>Emojis we know</h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2.2rem", padding: "1rem", cursor: "pointer" }}
            keys={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
