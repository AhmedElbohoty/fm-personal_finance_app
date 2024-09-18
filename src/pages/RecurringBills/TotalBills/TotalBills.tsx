import SvgIcon from "components/SvgIcon/SvgIcon";

import { formatNumber } from "utils/helpers";
import { useAppSelector } from "store/store";
import { selectRecurBillsDetails } from "store/appSlice/selectors";

// CSS prefix: .totalbills-
import "./style.css";

function TotalBills() {
  const { totalBills } = useAppSelector(selectRecurBillsDetails);

  return (
    <div className="totalbills-cont">
      <span className="totalbills-icon">
        <SvgIcon path="recurring-bills" />
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
