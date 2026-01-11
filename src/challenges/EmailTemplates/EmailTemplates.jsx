import { useState } from "react";
import style from "./EmailTemplates.module.css";
import Resignation from "./Resignation";

const EmailTemplates = () => {
  const [templates, setTemplates] = useState("");
  const [userName, setUserName] = useState("");
  const [userCompany, setUserCompany] = useState("");
  const [effectiveDate, setEffectiveDate] = useState("");
  const [lastDate, setLastDate] = useState("");
  const handleSelect = (e) => {
    const { value } = e.target;
    setTemplates(value);
    setUserName("");
    setUserCompany("");
    setEffectiveDate("");
    setLastDate("");
  };
  return (
    <div className={style.container}>
      <div className={style.templateContainer}>
        <label htmlFor="emailTemplate">Template:</label>
        <select id="emailTemplate" onChange={handleSelect} value={templates}>
          <option value="">Please Select</option>
          <option value="RESIGNATION">Resignation</option>
        </select>
      </div>
      <div className={style.infoContainer}>
        <div>
          <label htmlFor="userName">Name: </label>
          <input
            id="userName"
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="userCompany">Company Name: </label>
          <input
            id="userCompany"
            type="text"
            value={userCompany}
            onChange={(e) => setUserCompany(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="effectiveDate">Effective Date: </label>
          <input
            id="effectiveDate"
            type="date"
            value={effectiveDate}
            onChange={(e) => setEffectiveDate(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="lastDate">Last Date: </label>
          <input
            id="lastDate"
            type="date"
            value={lastDate}
            onChange={(e) => setLastDate(e.target.value)}
          />
        </div>
      </div>
      <hr />
      <div>
        {templates === "RESIGNATION" && (
          <Resignation
            userName={userName}
            userCompany={userCompany}
            effectiveDate={effectiveDate}
            lastDate={lastDate}
          />
        )}
      </div>
    </div>
  );
};

export default EmailTemplates;
