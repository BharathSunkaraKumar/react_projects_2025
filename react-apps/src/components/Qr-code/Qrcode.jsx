import React, { useState } from "react";
import QRCode from "react-qr-code";

const Qrcode = () => {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");
  const handleSubmit = () => {
    setQrCode(input);
    setInput("");
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <h1>QR Code Generator</h1>
        <input
          style={{
            marginTop: "20px",
            padding: "10px 20px",
          }}
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type="text"
          name="name"
          placeholder="Enter Your Name"
        />
        <button
          disabled={input && input.trim() != "" ? false : true}
          style={{
            backgroundColor: "dodgerblue",
            border: "none",
            outline: "none",
            color: "white",
            padding: "8px 20px",
            borderRadius: "5px",
          }}
          onClick={handleSubmit}
        >
          Submit
        </button>
        <div>
          <QRCode id="qr-code" value={qrCode} size={200} bgColor="#ffff" />
        </div>
      </div>
    </div>
  );
};

export default Qrcode;
