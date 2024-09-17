import { Fragment, lazy, Suspense, useMemo } from "react";
import type { Options } from "highcharts";

import Separator from "components/Separator/Separator";
import BudgetPotItem from "components/BudgetPotItem/BudgetPotItem";

import { useAppSelector } from "store/store";
import {
  selectBudgets,
  selectBudgetById,
  selectBudgetsIds,
  selectMonthlySpent,
} from "store/appSlice/selectors";
import { Budget } from "types/data";

// CSS prefix: .budsummary-
import "./style.css";

const Chart = lazy(() => import("components/Chart/Chart"));

function Summary() {
  const budgetsIds = useAppSelector(selectBudgetsIds);
  const budgets = useAppSelector(selectBudgets);
  const chartData = useMemo(() => {
    return budgetsIds.map((id) => ({
      name: budgets[id].category,
      y: budgets[id].maximum,
      color: budgets[id].theme,
    }));
  }, [budgets, budgetsIds]);

  const chartSeries: Options["series"] = [
    {
      type: "pie",
      data: chartData,
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
          {budgetsIds.map((budgetId) => (
            <Fragment key={budgetId}>
              <BudgetItem budgetId={budgetId} />
              <Separator />
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

type BudgetItemProps = { budgetId: Budget["id"] };

function BudgetItem({ budgetId }: BudgetItemProps) {
  const budget = useAppSelector((s) => selectBudgetById(s, budgetId));
  const spent = useAppSelector((s) => selectMonthlySpent(s, budget.category));

  const { id, category, theme, maximum } = budget;
  return (
    <BudgetPotItem
      key={id}
      label={category}
      value={spent}
      theme={theme}
      total={maximum}
    />
  );
}

export default Summary;
