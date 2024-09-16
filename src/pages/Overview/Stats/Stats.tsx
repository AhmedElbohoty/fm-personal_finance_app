import { useAppSelector } from "store/store";

import { formatNumber } from "utils/helpers";
import { selectBalance } from "store/appSlice/selectors";

// CSS prefix: .ovstats-
import "./style.css";

function Stats() {
  const { current, income, expenses } = useAppSelector(selectBalance);

  return (
    <section className="ovstats-sect">
      <div className="ovstats-card ovstats-current">
        <h3 className="ovstats-h3">Current Balance</h3>
        <p className="ovstats-value">${formatNumber(current)}</p>
      </div>
      <div className="ovstats-card">
        <h3 className="ovstats-h3">Income</h3>
        <p className="ovstats-value">${formatNumber(income)}</p>
      </div>
      <div className="ovstats-card">
        <h3 className="ovstats-h3">Expenses</h3>
        <p className="ovstats-value">${formatNumber(expenses)}</p>
      </div>
    </section>
  );
}

export default Stats;
