import { Fragment } from "react";

import UserAvatar from "components/Avatar/Avatar";
import Separator from "components/Separator/Separator";
import HighlightText from "components/HighlightText/HighlightText";

import { formatDate, formatNumber } from "utils/helpers";
import { useTransactionsPageContext } from "contexts/transactionsPageContext";
import { selectTransactionById } from "store/appSlice/selectors";
import { useAppSelector } from "store/store";

// CSS prefix: .transtable-
import "./style.css";

function Table() {
  const { transactionsIds } = useTransactionsPageContext();

  return (
    <div className="transtable">
      <div className="transtable-header">
        <span className="transtable-hsender">Recipient / Sender</span>
        <span className="transtable-hcategory">Category</span>
        <span className="transtable-hdate">Transaction Date</span>
        <span className="transtable-hamount">Amount</span>
      </div>
      <div className="transtable-table">
        {!transactionsIds.length && (
          <p className="transtable-table-empty">
            No transactions to be displayed
          </p>
        )}
        {transactionsIds.map((id) => {
          return (
            <Fragment key={id}>
              <Transaction id={id} />
              <Separator />
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}

function Transaction({ id }: { id: string }) {
  const { filter } = useTransactionsPageContext();
  const transaction = useAppSelector((s) => selectTransactionById(s, id));

  const { name, avatar, amount, date, category } = transaction;

  return (
    <div className="transtable-row">
      <div className="transtable-sender-img">
        <UserAvatar src={avatar} alt={name} name={name} />
      </div>
      <span className="transtable-sender-name ellip-text">
        <HighlightText text={name} filter={filter} />
      </span>

      <span className="transtable-category">{category}</span>

      <span className="transtable-date">{formatDate(date)}</span>

      <span className="transtable-amount" data-positive={amount > 0}>
        {amount > 0 ? "+" : "-"}${formatNumber(Math.abs(amount))}
      </span>
    </div>
  );
}

export default Table;
