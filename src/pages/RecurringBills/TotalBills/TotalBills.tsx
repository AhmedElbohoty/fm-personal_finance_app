import BillsIcons from "assets/icons/recurring-bills.svg";

import { formatNumber } from "utils/helpers";
import { useAppSelector } from "store/store";
import { selectMonthlyBillsDetails } from "store/appSlice/selectors";

// CSS prefix: .totalbills-
import "./style.css";

function TotalBills() {
  const { totalBills } = useAppSelector(selectMonthlyBillsDetails);

  return (
    <div className="totalbills-cont">
      <span className="totalbills-icon">
        <BillsIcons />
      </span>

      <div className="totalbills-total">
        <p className="totalbills-total-label ellip-text">Total Bills</p>
        <p className="totalbills-total-value ellip-text">
          ${formatNumber(totalBills)}
        </p>
      </div>
    </div>
  );
}

export default TotalBills;
