import { Fragment } from "react";

import UserAvatar from "components/Avatar/Avatar";
import DueIcon from "assets/icons/bill-due.svg";
import PaidIcon from "assets/icons/bill-paid.svg";

import { transactions } from "utils/data.json";
import { formatDate } from "utils/helpers";

// CSS prefix: .rectable-
import "./style.css";

function Table() {
  const bills = transactions;

  return (
    <div className="rectable">
      <div className="rectable-header">
        <span className="rectable-hsender">Bill Title</span>
        <span className="rectable-hdate">Due Date</span>
        <span className="rectable-hamount">Amount</span>
      </div>
      <div className="rectable-table">
        {bills.map((bill) => {
          const { id, name, date, avatar, amount } = bill;
          return (
            <Fragment key={id}>
              <div className="rectable-row">
                <div className="rectable-sender">
                  <div className="rectable-sender-img">
                    <UserAvatar src={avatar} alt={name} name={name} />
                  </div>
                  <span className="rectable-sender-name ellip-text">
                    {name}
                  </span>
                </div>

                {/* TODO */}
                <div className="rectable-date" data-due={id === "5"}>
                  <span>{formatDate(date)}</span>

                  <div className="rectable-date-icon">
                    {id !== "5" ? <PaidIcon /> : <DueIcon />}
                  </div>
                </div>

                <span className="rectable-amount" data-due={id === "5"}>
                  {amount}
                </span>
              </div>
              <span className="rectable-sep"></span>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default Table;
