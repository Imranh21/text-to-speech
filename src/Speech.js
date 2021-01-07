import React, { useState } from "react";
import { useSpeechSynthesis } from "react-speech-kit";

const Speech = () => {
  const [value, setValue] = useState("");
  const { speak } = useSpeechSynthesis();
  return (
    <div className="container">
      <h1 className="heading">Text To Speech</h1>
      <textarea
        className="textarea"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></textarea>
      <button className="btn" onClick={() => speak({ text: value })}>
        Speech
      </button>
    </div>
  );
};
export default Speech;
