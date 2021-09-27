import React, { useState } from "react";
import "./accordian.css";
function AcoordianCard({ ques, ans, index, open, setOpen }) {
  const [close, setClose] = useState(false);

  function clickHandler() {
    if (open === null || open !== index) {
      setOpen(index);
    } else {
      setOpen(null);
    }
  }

  return (
    <div className="card">
      <div className="card-header">
        <h3>{ques}</h3>
        <button className="card-btn" onClick={() => clickHandler()}>
          open
        </button>
      </div>

      {open === index && (
        <div>
          <h3>{ans}</h3>
        </div>
      )}
    </div>
  );
}

export default AcoordianCard;
