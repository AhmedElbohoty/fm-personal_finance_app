import { lazy, Suspense, useMemo } from "react";
import { Options } from "highcharts";

import Card from "components/Card/Card";
import CardHeader from "pages/Overview/CardHeader/CardHeader";
import BudgetPotItem from "components/BudgetPotItem/BudgetPotItem";

import { useAppSelector } from "store/store";
import {
  selectBudgets,
  selectBudgetById,
  selectBudgetsIds,
} from "store/appSlice/selectors";
import { Budget } from "types/data";

// CSS .budgets-section
import "./style.css";

const Chart = lazy(() => import("components/Chart/Chart"));

function Budgets() {
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
    <Card>
      <section className="budgets-section">
        <CardHeader
          title="Budgets"
          linkPath="/budgets"
          linkText="See Details"
        />

        <div className="budgets-main">
          <div className="budget-chart">
            <Suspense fallback={<></>}>
              <Chart series={chartSeries} />
            </Suspense>
          </div>
          <div className="budget-list">
            {budgetsIds.map((budgetId) => (
              <BudgetItem key={budgetId} budgetId={budgetId} />
            ))}
          </div>
        </div>
      </section>
    </Card>
  );
}

type BudgetItemProps = { budgetId: Budget["id"] };

function BudgetItem({ budgetId }: BudgetItemProps) {
  const budget = useAppSelector((s) => selectBudgetById(s, budgetId));

  const { id, category, theme, maximum } = budget;
  return (
    <BudgetPotItem key={id} label={category} value={maximum} theme={theme} />
  );
}

export default Budgets;
