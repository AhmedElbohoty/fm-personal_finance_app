import Card from "components/Card/Card";
import CardHeader from "pages/Overview/CardHeader/CardHeader";

import data from "utils/data.json";

// CSS .budgets-section
import "./style.css";

function Budgets() {
  const budgets = data.budgets;
  const totalSpent = data.transactions
    .filter((t) => t.amount < 0)
    .reduce((sum, t) => sum + Math.abs(t.amount), 0);
  const totalBudget = budgets.reduce((sum, budget) => sum + budget.maximum, 0);

  return (
    <Card>
      <section className="budgets-section">
        <CardHeader
          title="Budgets"
          linkPath="/budgets"
          linkText="See Details"
        />
        <div className="budget-chart">
          {/* Implement a circular chart component here */}
          <div className="chart-center">
            <p>${totalSpent.toFixed(2)}</p>
            <span>of ${totalBudget.toFixed(2)} limit</span>
          </div>
        </div>
        <div className="budget-list">
          {budgets.map((budget) => (
            <div key={budget.category} className="budget-item">
              <span>{budget.category}</span>
              <span>${budget.maximum.toFixed(2)}</span>
            </div>
          ))}
        </div>
      </section>
    </Card>
  );
}

export default Budgets;
