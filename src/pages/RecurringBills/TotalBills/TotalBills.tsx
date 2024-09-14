import BillsIcons from "assets/icons/recurring-bills.svg";

import data from "utils/data.json";
import { formatNumber } from "utils/helpers";

// CSS prefix: .totalbills-
import "./style.css";

function TotalBills() {
  const bills = data.transactions.reduce(
    (t, c) => (c.recurring && c.amount < 0 ? (t += c.amount) : (t += 0)),
    0
  );

  return (
    <div className="totalbills-cont">
      <span className="totalbills-icon">
        <BillsIcons />
      </span>

      <div className="totalbills-total">
        <p className="totalbills-total-label ellip-text">Total Bills</p>
        <p className="totalbills-total-value ellip-text">
          ${formatNumber(Math.abs(bills))}
        </p>
      </div>
    </div>
  );
}

export default TotalBills;
