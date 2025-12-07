import { useState } from "react";
import { questions } from "./AccordionData";
import style from "./Accordion.module.css";

const Accordion = () => {
  const [openId, setOpenId] = useState(null);

  const handleClick = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return questions.map((question) => {
    return (
      <div>
        <div className={style["questionSection"]}>
          <p>{question.title}</p>
          <p
            onClick={() => handleClick(question.id)}
            className={style["toggleSign"]}
          >
            {question.id === openId ? "-" : "+"}
          </p>
        </div>
        {question.id === openId && <p>{question.info}</p>}
      </div>
    );
  });
};

export default Accordion;
