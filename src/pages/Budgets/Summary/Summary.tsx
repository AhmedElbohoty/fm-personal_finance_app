import Separator from "components/Separator/Separator";
import BudgetPotItem from "components/BudgetPotItem/BudgetPotItem";

// CSS prefix: .budsummary-
import "./style.css";

function Summary() {
  return (
    <section className="budsummary">
      <div className="budsummary-chart">CHART</div>

      <div className="budsummary-stats">
        <h2 className="budsummary-h2">Spending Summary</h2>

        <div className="budsummary-spend">
          <BudgetPotItem
            label="Entertainment"
            value={15}
            total={50}
            theme="var(--c-green)"
          />

          <Separator />

          <BudgetPotItem
            label="Bills"
            value={150}
            total={750}
            theme="var(--c-cyan)"
          />

          <Separator />

          <BudgetPotItem
            label="Dining Out"
            value={133}
            total={75}
            theme="var(--c-yellow)"
          />

          <Separator />

          <BudgetPotItem
            label="Personal Care"
            value={40}
            total={100}
            theme="var(--c-navy)"
          />
        </div>
      </div>
    </section>
  );
}

export default Summary;
