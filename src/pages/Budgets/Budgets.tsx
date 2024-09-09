import useDocumentTitle from "hooks/useDocumentTitle";
import titles from "utils/documentTitle";

// CSS prefix: .budgets-
import "./style.css";

function Budgets() {
  useDocumentTitle(titles.budgets);

  return <div>Budgets</div>;
}

export default Budgets;
