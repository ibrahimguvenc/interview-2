import React from "react";
import InterviewAccord from "./InterviewAccord";
import data from "../helper/data";

const Questions = () => {
  console.log(data);
  return (
    <div>
      {data.map((item) => (
        <InterviewAccord key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Questions;
