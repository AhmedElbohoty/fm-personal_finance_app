import Card from "components/Card/Card";
import CardHeader from "pages/Overview/CardHeader/CardHeader";

import { formatNumber } from "utils/helpers";
import { useAppSelector } from "store/store";
import { selectRecurBillsDetails } from "store/appSlice/selectors";

// CSS prefix: .recurbills
import "./style.css";

function RecurringBills() {
  const { totalBills, paidTotal, dueTotal } = useAppSelector(
    selectRecurBillsDetails
  );

  return (
    <Card>
      <section className="recurbills-section">
        <CardHeader
          title="Recurring Bills"
          linkPath="/recurring-bills"
          linkText="See Details"
        />
        <ul className="recurbills-list">
          <li className="recurbills-item">
            <p className="recurbills-item-label ellip-text">Paid Bills</p>
            <p className="recurbills-item-value">${formatNumber(paidTotal)}</p>
          </li>
          <li className="recurbills-item">
            <p className="recurbills-item-label ellip-text">Total Upcoming</p>
            <p className="recurbills-item-value">
              ${formatNumber(totalBills - paidTotal)}
            </p>
          </li>
          <li className="recurbills-item">
            <p className="recurbills-item-label ellip-text">Due Soon</p>
            <p className="recurbills-item-value">${formatNumber(dueTotal)}</p>
          </li>
        </ul>
      </section>
    </Card>
  );
}

export default RecurringBills;
