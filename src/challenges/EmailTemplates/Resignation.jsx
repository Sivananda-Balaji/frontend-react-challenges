import style from "./EmailTemplates.module.css";

const Resignation = ({ userName, userCompany, effectiveDate, lastDate }) => {
  return (
    <div>
      <p>Hi,</p>
      <p>
        Please accept this email as my formal resignation from {userCompany}. I
        have taken this decision as I have got a different/better work
        opportunity and would like to pursue my career in the same.
      </p>
      <p>
        {`Request you to consider my letter of resignation effective from 
        ${effectiveDate}.`}
        I understand that as per the policy I am required to serve a notice
        period of 60 days and my last working day accordingly shall be{" "}
        {lastDate}.
      </p>
      <p>
        I would request you to consider if an early release is possible. I am
        grateful to {userCompany} and looking forward to your support.
      </p>
      <div className={style.signature}>
        <p>Thanks and Regards,</p>
        <p>{userName}</p>
      </div>
    </div>
  );
};

export default Resignation;
