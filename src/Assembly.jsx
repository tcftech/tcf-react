import React, { useState } from "react";

const AssemblyAIExample = () => {
  const [text, setText] = useState("");
  const [audio, setAudio] = useState(null);
  const apiKey = "0774cd69f5ce4bb59b9c7adcd3617505";

  const uploadAudio = (event) => {
    setAudio(event.target.files[0]);
  };

  const transcribeAudio = async () => {
    // Upload audio
    const formData = new FormData();
    formData.append("file", audio);

    const uploadResponse = await fetch("https://api.assemblyai.com/v2/upload", {
      method: "POST",
      headers: { authorization: apiKey },
      body: formData,
    });

    const uploadData = await uploadResponse.json();

    // Request transcription
    const transcriptionResponse = await fetch("https://api.assemblyai.com/v2/transcript", {
      method: "POST",
      headers: {
        authorization: apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ audio_url: uploadData.upload_url }),
    });

    const transcriptionData = await transcriptionResponse.json();

    // Poll for completion
    const interval = setInterval(async () => {
      const statusResponse = await fetch(
        `https://api.assemblyai.com/v2/transcript/${transcriptionData.id}`,
        { headers: { authorization: apiKey } }
      );

      const statusData = await statusResponse.json();
      if (statusData.status === "completed") {
        clearInterval(interval);
        setText(statusData.text);
      }
    }, 2000);
  };

  return (
    <div>
      <h1>Speech to Text (AssemblyAI)</h1>
      <input type="file" accept="audio/*" onChange={uploadAudio} />
      <button onClick={transcribeAudio} disabled={!audio}>   
        Transcribe
      </button>
      <h3>Transcription:</h3>
      <p>{text}</p>
    </div>
  );
};

export default AssemblyAIExample;
