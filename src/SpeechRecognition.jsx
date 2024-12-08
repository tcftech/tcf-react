import React, { useState } from "react";

const SpeechToText = () => {
  const [text, setText] = useState("");
  const [isListening, setIsListening] = useState(false);

  const startListening = () => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = "en-US";
    recognition.interimResults = true;
    recognition.continuous = true;

    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);

    recognition.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map(result => result[0].transcript)
        .join(" ");
      setText(transcript);
    };

    recognition.start();
  };

  const stopListening = () => {
    const recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognition.stop();
    setIsListening(false);
  };

  return (
    <div>
      <h1>Speech to Text</h1>
      <button onClick={startListening} disabled={isListening}>Start Listening</button>
      <button onClick={stopListening} disabled={!isListening}>Stop Listening</button>
      <p>{text}</p>
    </div>
  );
};

export default SpeechToText;
