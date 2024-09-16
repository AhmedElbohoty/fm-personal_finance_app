import Providers from "pages/Budgets/Providers";
import BudgetForm from "pages/Budgets/BudgetForm/BudgetForm";
import DeleteBudget from "pages/Budgets/DeleteBudget/DeleteBudget";
import Summary from "pages/Budgets/Summary/Summary";
import Budget from "pages/Budgets/Budget/Budget";
import Heading1 from "components/Heading1/Heading1";
import PrimaryBtn from "components/Buttons/Primary/Primary";

// TODO: Add extexntions to imports
import useDocumentTitle from "hooks/useDocumentTitle";
import { useBudgetsPageContext } from "contexts/budgetsPageContext";
import titles from "utils/documentTitle.ts";
import { useAppSelector } from "store/store";
import { selectBudgetsIds } from "store/appSlice/selectors";

// CSS prefix: .budgetspage-
import "./style.css";

function Budgets() {
  const budgetsIds = useAppSelector(selectBudgetsIds);
  useDocumentTitle(titles.budgets);

  return (
    <Providers>
      <div className="budgetspage">
        <Top />

        <div className="budgetspage-grid">
          <Summary />

          <div className="budgetspage-budgets">
            {budgetsIds.map((id) => (
              <Budget key={id} budgetId={id} />
            ))}
          </div>
        </div>
      </div>

      <Forms />
    </Providers>
  );
}

function Top() {
  const { setIsBudgetsFormOpened } = useBudgetsPageContext();
  function onClickAddNewBudget() {
    setIsBudgetsFormOpened(true);
  }

  return (
    <div className="budgetspage-top">
      <Heading1 text="Budgets" />

      <PrimaryBtn label="+ Add New Budget" onClick={onClickAddNewBudget} />
    </div>
  );
}

function Forms() {
  const { isBudgetsFormOpened, deleteBudget } = useBudgetsPageContext();

  if (isBudgetsFormOpened) return <BudgetForm />;
  if (deleteBudget) return <DeleteBudget />;

  return <></>;
}

export default Budgets;
