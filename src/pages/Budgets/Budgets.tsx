import Providers from "pages/Budgets/Providers";
import BudgetForm from "pages/Budgets/BudgetForm/BudgetForm";
import DeleteBudget from "pages/Budgets/DeleteBudget/DeleteBudget";
import Heading1 from "components/Heading1/Heading1";
import PrimaryBtn from "components/Buttons/Primary/Primary";

import useDocumentTitle from "hooks/useDocumentTitle";
import titles from "utils/documentTitle";
import { useBudgetsPageContext } from "contexts/budgetsPageContext";

// CSS prefix: .budgetspage-
import "./style.css";

function Budgets() {
  useDocumentTitle(titles.budgets);

  return (
    <Providers>
      <div className="budgetspage">
        <Top />

        <div className="potspage-grid"></div>
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
    <div className="potspage-top">
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
