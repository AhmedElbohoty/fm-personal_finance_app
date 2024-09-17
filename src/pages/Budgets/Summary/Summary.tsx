import { lazy, Suspense } from "react";
import type { Options } from "highcharts";

import Separator from "components/Separator/Separator";
import BudgetPotItem from "components/BudgetPotItem/BudgetPotItem";

import { useAppSelector } from "store/store";
import { selectAllBudgets } from "store/appSlice/selectors";

// CSS prefix: .budsummary-
import "./style.css";

const Chart = lazy(() => import("components/Chart/Chart"));

function Summary() {
  const budgets = useAppSelector(selectAllBudgets);

  const chartSeries: Options["series"] = [
    {
      type: "pie",
      data: Object.values(budgets).map((budget) => ({
        name: budget.category,
        y: budget.maximum,
        color: budget.theme,
      })),
    },
  ];

  return (
    <section className="budsummary">
      <div className="budsummary-chart">
        <Suspense fallback={<></>}>
          <Chart series={chartSeries} />
        </Suspense>
      </div>

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
