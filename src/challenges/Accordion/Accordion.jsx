import { useState } from "react";
import { questions } from "./AccordionData";
import style from "./Accordion.module.css";

const Accordion = () => {
  const [openId, setOpenId] = useState([]);
  const [isMultiSelect, setIsMultiSelect] = useState(false);

  const handleClick = (id) => {
    const idIndex = openId.indexOf(id);
    const filtered = openId.filter((item) => item !== id);
    if (isMultiSelect) {
      if (idIndex === -1) {
        setOpenId([...openId, id]);
      } else {
        setOpenId(filtered);
      }
    } else {
      if (idIndex !== -1) {
        setOpenId(filtered);
      } else {
        setOpenId([id]);
      }
    }
  };
  const handleMultiSelect = () => {
    setIsMultiSelect((prev) => !prev);
    setOpenId([]);
  };

  return (
    <>
      <div className={style.multiSelectQtn}>
        <p>Is multiple open accordion allowed?</p>
        <input
          type="checkbox"
          value={isMultiSelect}
          onClick={handleMultiSelect}
        />
      </div>
      <div>
        {questions.map((question) => {
          return (
            <div key={question.id}>
              <div className={style["questionSection"]}>
                <p>{question.title}</p>
                <p
                  onClick={() => handleClick(question.id)}
                  className={style["toggleSign"]}
                >
                  {openId.includes(question.id) ? "-" : "+"}
                </p>
              </div>
              {openId.includes(question.id) && <p>{question.info}</p>}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Accordion;
