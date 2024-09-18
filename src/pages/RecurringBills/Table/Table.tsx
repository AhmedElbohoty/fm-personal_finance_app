import { Fragment, useContext } from "react";

import UserAvatar from "components/Avatar/Avatar";
import Separator from "components/Separator/Separator";
import HighlightText from "components/HighlightText/HighlightText";
import SvgIcon from "components/SvgIcon/SvgIcon";

import { useAppSelector } from "store/store";
import { selectTransactionById } from "store/appSlice/selectors";
import {
  formatMonthlyDate,
  formatNumber,
  isBillDue,
  isBillPaid,
} from "utils/helpers";
import { Transaction } from "types/data";
import { BillsPageContext } from "contexts/billsPageContext";

// CSS prefix: .rectable-
import "./style.css";

function Table() {
  const { transactionsIds } = useContext(BillsPageContext);

  return (
    <div className="rectable">
      <div className="rectable-header">
        <span className="rectable-hsender">Bill Title</span>
        <span className="rectable-hdate">Due Date</span>
        <span className="rectable-hamount">Amount</span>
      </div>
      <div className="rectable-table">
        {!transactionsIds.length && (
          <p className="rectable-table-empty">
            No transactions to be displayed
          </p>
        )}
        {transactionsIds.map((id) => {
          return (
            <Fragment key={id}>
              <Row id={id} />

              <Separator />
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}

function Row({ id }: { id: Transaction["id"] }) {
  const { search } = useContext(BillsPageContext);
  const transaction = useAppSelector((s) => selectTransactionById(s, id));

  const { name, date, avatar, amount } = transaction;

  const isPaid = isBillPaid(date);
  const isDue = isBillDue(date);

  return (
    <div className="rectable-row">
      <div className="rectable-sender">
        <div className="rectable-sender-img">
          <UserAvatar src={avatar} alt={name} name={name} />
        </div>
        <span className="rectable-sender-name ellip-text">
          <HighlightText text={name} filter={search} />
        </span>
      </div>

      <div className="rectable-date" data-paid={isPaid} data-due={isDue}>
        <span>{formatMonthlyDate(date)}</span>

        <div className="rectable-date-icon">
          {isPaid && <SvgIcon path="bill-paid" />}
          {isDue && <SvgIcon path="bill-due" />}
        </div>
      </div>

      <span className="rectable-amount" data-due={isDue}>
        ${formatNumber(Math.abs(amount))}
      </span>
    </div>
  );
}

export default Table;
