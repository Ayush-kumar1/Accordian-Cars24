import React, { useState } from "react";
import AcoordianCard from "./AcoordianCard";
import "./accordian.css";

function Accordian() {
  const [open, setOpen] = useState(null);
  let arr = [
    {
      ques: "How can I get driving Licence in India?",
      ans: "Visit the Sarathi website and download the driving license application form. Fill in the form as per the instructions provided on the screen and click on 'Submit' In the case of minor applicants, the form is to be printed out and Part D is to be filled out and signed by the parent/guardian at the nearest RTO",
    },
    {
      ques: "How can I get driving Licence in Jharkhand?",
      ans: "Step 1: Visit the Regional Transport Office (RTO) in your jurisdiction",
    },
    {
      ques: "What is the fees of driving Licence?",
      ans: "In All Cities in UAE like Dubai, Abudhabi, Sharjah, Ajman, Ummul Quain, Rasal Khaimah, Al-ain Fujairah etc",
    },
    {
      ques: "What is the age limit for driving Licence?",
      ans: "The current minimum driving age is 18 years, but people are allowed to apply for driving licences at the age of 17 years and six months so they can obtain their licence when they turn",
    },
  ];

  return (
    <div>
      <h1>Accordian Component</h1>

      <div className="container">
        {arr.map((elem, index) => (
          <AcoordianCard
            key={elem.ques}
            ques={elem.ques}
            ans={elem.ans}
            index={index}
            open={open}
            setOpen={setOpen}
          />
        ))}
      </div>
    </div>
  );
}

export default Accordian;
