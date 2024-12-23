import React, { useState } from "react";

const DeepgramExample = () => {
  const [text, setText] = useState("");
  const [isListening, setIsListening] = useState(false);
  const deepgramApiKey = "c1d77a5b05c30b981b0e8ccd3be3ed469333cd09";

  const startListening = async () => {
    const socket = new WebSocket(
      "wss://api.deepgram.com/v1/listen",
      ["token", deepgramApiKey]
    );

    socket.onopen = () => {
      setIsListening(true);
      console.log("Connected to Deepgram");

      navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
        const mediaRecorder = new MediaRecorder(stream);
        mediaRecorder.ondataavailable = (event) => {
          if (event.data.size > 0 && socket.readyState === 1) {
            socket.send(event.data);
          }
        };
        mediaRecorder.start(250); // Send audio in small chunks
      });
    };

    socket.onmessage = (message) => {
      const receivedData = JSON.parse(message.data);
      if (receivedData.channel && receivedData.channel.alternatives[0]) {
        const transcript = receivedData.channel.alternatives[0].transcript;
        setText((prevText) => prevText + " " + transcript);
      }
    };

    socket.onerror = (error) => {
      console.error("WebSocket error:", error);
      setIsListening(false);
    };

    socket.onclose = () => {
      console.log("Connection closed");
      setIsListening(false);
    };
  };

  const stopListening = () => {
    setIsListening(false);
  };

  return (
    <div>
      <h1>Speech to Text (Deepgram API)</h1>
      <button onClick={startListening} disabled={isListening}>
        Start Listening
      </button>
      <button onClick={stopListening} disabled={!isListening}>
        Stop Listening
      </button>
      <h3>Transcription:</h3>
      <p>{text}</p>
    </div>
  );
};

export default DeepgramExample;
