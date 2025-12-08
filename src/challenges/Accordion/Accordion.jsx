import { useState } from "react";
import { questions } from "./AccordionData";
import style from "./Accordion.module.css";

const Accordion = () => {
  const [openId, setOpenId] = useState(null);
  const [isMultiSelect, setIsMultiSelect] = useState(false);
  const [multipleId, setMultipleId] = useState([]);

  const handleClick = (id) => {
    if (isMultiSelect) {
      let temp = [...multipleId];
      if (temp.includes(id)) {
        temp = temp.filter((item) => item !== id);
        setMultipleId(temp);
      } else {
        temp.push(id);
        setMultipleId(temp);
      }
    } else {
      setOpenId((prev) => (prev === id ? null : id));
    }
  };
  const handleMultiSelect = () => {
    setIsMultiSelect((prev) => !prev);
    setMultipleId([]);
    setOpenId(null);
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
            <div>
              <div className={style["questionSection"]}>
                <p>{question.title}</p>
                <p
                  onClick={() => handleClick(question.id)}
                  className={style["toggleSign"]}
                >
                  {isMultiSelect
                    ? multipleId.includes(question.id)
                      ? "-"
                      : "+"
                    : question.id === openId
                    ? "-"
                    : "+"}
                </p>
              </div>
              {isMultiSelect
                ? multipleId.includes(question.id) && <p>{question.info}</p>
                : question.id === openId && <p>{question.info}</p>}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Accordion;
