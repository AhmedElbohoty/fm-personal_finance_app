import Card from "components/Card/Card";
import CardHeader from "pages/Overview/CardHeader/CardHeader";
import BudgetPotItem from "components/BudgetPotItem/BudgetPotItem";

import { useAppSelector } from "store/store";
import { selectAllBudgets } from "store/appSlice/selectors";

// CSS .budgets-section
import "./style.css";

function Budgets() {
  const budgets = useAppSelector(selectAllBudgets);

  return (
    <Card>
      <section className="budgets-section">
        <CardHeader
          title="Budgets"
          linkPath="/budgets"
          linkText="See Details"
        />

        <div className="budgets-main">
          <div className="budget-chart">CHART</div>
          <div className="budget-list">
            {budgets.map((budget) => (
              <BudgetPotItem
                key={budget.id}
                label={budget.category}
                value={budget.maximum}
                theme={budget.theme}
              />
            ))}
          </div>
        </div>
      </section>
    </Card>
  );
}

export default Budgets;
