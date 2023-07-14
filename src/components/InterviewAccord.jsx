import { useState } from "react";
import { arrowdown, arrowup } from "../helper/icons";

const InterviewAccord = ({ id, question, answer }) => {
  const [click, setClick] = useState(false);

  return (
    <div className="container">
      <div>
        <h1>
          {id}. {question}
        </h1>
        <div onClick={() => setClick(!click)}>
          <p> {click ? arrowup : arrowdown} </p>
        </div>
      </div>
      {click && (
        <div>
          <div onClick={() => setClick(false)}></div>
          {answer}
        </div>
      )}
    </div>
  );
};

export default InterviewAccord;
