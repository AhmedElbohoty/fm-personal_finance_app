import Separator from "components/Separator/Separator";

import { useAppSelector } from "store/store";
import { selectRecurBillsDetails } from "store/appSlice/selectors";
import { formatNumber } from "utils/helpers";

// CSS prefix: .billsummary-
import "./style.css";

// TODO: implement dynamic values

function Summary() {
  const { totalBills, totalCount, paidCount, paidTotal, dueTotal, dueCount } =
    useAppSelector(selectRecurBillsDetails);

  return (
    <div className="billsummary-cont">
      <p className="billsummary-label">Summary</p>

      <div className="billsummary-items">
        <div className="billsummary-item">
          <p className="billsummary-item-label ellip-text">Paid Bills</p>
          <p className="billsummary-item-value">
            {paidCount} (${formatNumber(paidTotal)})
          </p>
        </div>

        <Separator />

        <div className="billsummary-item">
          <p className="billsummary-item-label ellip-text">Total Upcoming</p>
          <p className="billsummary-item-value">
            {totalCount - paidCount} (${formatNumber(totalBills - paidTotal)})
          </p>
        </div>

        <Separator />

        <div className="billsummary-item" data-due="true">
          <p className="billsummary-item-label ellip-text">Due Soon</p>
          <p className="billsummary-item-value">
            {dueCount} (${formatNumber(dueTotal)})
          </p>
        </div>
      </div>
    </div>
  );
}

export default Summary;
