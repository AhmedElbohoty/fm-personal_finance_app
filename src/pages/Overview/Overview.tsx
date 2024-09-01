import Card from "components/Card/Card";
import Balance from "pages/Overview/Balance/Balance";
import Pots from "pages/Overview/Pots/Pots";
import Budgets from "pages/Overview/Budgets/Budgets";
import Transactions from "pages/Overview/Transactions/Transactions";
import RecurringBills from "pages/Overview/RecurringBills/RecurringBills";

function Overview() {
  return (
    <div className="overview">
      <h1>Overview</h1>
      <Card>
        <Balance />
      </Card>
      <div className="overview-grid">
        <Card>
          <Pots />
        </Card>
        <Card>
          <Budgets />
        </Card>
      </div>
      <div className="overview-grid">
        <Card>
          <Transactions />
        </Card>
        <Card>
          <RecurringBills />
        </Card>
      </div>
    </div>
  );
}

export default Overview;
