import { Fragment } from "react";

import UserAvatar from "components/Avatar/Avatar";
import DueIcon from "assets/icons/bill-due.svg";
import PaidIcon from "assets/icons/bill-paid.svg";
import Separator from "components/Separator/Separator";

import { useAppSelector } from "store/store";
import { selectMonthlyRecurringBills } from "store/appSlice/selectors";
import {
  formatMonthlyDate,
  formatNumber,
  isBillDue,
  isBillPaid,
} from "utils/helpers";

// CSS prefix: .rectable-
import "./style.css";

function Table() {
  const recurrBills = useAppSelector(selectMonthlyRecurringBills);

  return (
    <div className="rectable">
      <div className="rectable-header">
        <span className="rectable-hsender">Bill Title</span>
        <span className="rectable-hdate">Due Date</span>
        <span className="rectable-hamount">Amount</span>
      </div>
      <div className="rectable-table">
        {recurrBills.map((bill) => {
          const { id, name, date, avatar, amount } = bill;

          const isPaid = isBillPaid(date);
          const isDue = isBillDue(date);

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

                <div
                  className="rectable-date"
                  data-paid={isPaid}
                  data-due={isDue}
                >
                  <span>{formatMonthlyDate(date)}</span>

                  <div className="rectable-date-icon">
                    {isPaid && <PaidIcon />}
                    {isDue && <DueIcon />}
                  </div>
                </div>

                <span className="rectable-amount" data-due={isDue}>
                  ${formatNumber(Math.abs(amount))}
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
