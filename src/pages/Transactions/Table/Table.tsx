import { Fragment } from "react";

import UserAvatar from "components/Avatar/Avatar";
import Separator from "components/Separator/Separator";

import { formatDate, formatNumber } from "utils/helpers";
import { Transaction } from "types/data";

// CSS prefix: .transtable-
import "./style.css";

type TableProps = { transactions: Transaction[] };

function Table({ transactions }: TableProps) {
  return (
    <div className="transtable">
      <div className="transtable-header">
        <span className="transtable-hsender">Recipient / Sender</span>
        <span className="transtable-hcategory">Category</span>
        <span className="transtable-hdate">Transaction Date</span>
        <span className="transtable-hamount">Amount</span>
      </div>
      <div className="transtable-table">
        {transactions.map((transaction) => {
          const { id, name, avatar, amount, date, category } = transaction;
          return (
            <Fragment key={id}>
              <div className="transtable-row">
                <div className="transtable-sender-img">
                  <UserAvatar src={avatar} alt={name} name={name} />
                </div>
                <span className="transtable-sender-name ellip-text">
                  {name}
                </span>

                <span className="transtable-category">{category}</span>

                <span className="transtable-date">{formatDate(date)}</span>

                <span className="transtable-amount" data-positive={amount > 0}>
                  {amount > 0 ? "+" : "-"}${formatNumber(Math.abs(amount))}
                </span>
              </div>
              <Separator />
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default Table;
