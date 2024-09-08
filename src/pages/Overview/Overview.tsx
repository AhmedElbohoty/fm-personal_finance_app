import Heading1 from "components/Heading1/Heading1";
import Stats from "pages/Overview/Stats/Stats";
import Pots from "pages/Overview/Pots/Pots";
import Budgets from "pages/Overview/Budgets/Budgets";
import Transactions from "pages/Overview/Transactions/Transactions";
import RecurringBills from "pages/Overview/RecurringBills/RecurringBills";

import "./style.css";

function Overview() {
  return (
    <div className="overview">
      <Heading1 text="Overview" />

      <Stats />

      <div className="overview-grid-cont">
        <div className="overview-grid">
          <Pots />
          <Transactions />
        </div>
        <div className="overview-grid">
          <Budgets />
          <RecurringBills />
        </div>
      </div>
    </div>
  );
}

export default Overview;
