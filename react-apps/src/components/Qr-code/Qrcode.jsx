import React, { useState } from "react";

const Qrcode = () => {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");
  const handleSubmit = () => {
    setQrCode(input);
    setInput("");
  };
  console.log("hi");
  return (
    <div>
      <div>
        <input
          onChange={() => {
            setInput(e.target.value);
          }}
          value={input}
          type="text"
          name="name"
          placeholder="Enter Your Name"
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div>
        <Qrcode id="qr-code" value={qrCode} size={400} />
      </div>
    </div>
  );
};

export default Qrcode;
