import titles from "utils/documentTitle";
import useDocumentTitle from "hooks/useDocumentTitle";

// CSS prefix: .recurringbills-
import "./style.css";

function RecurringBills() {
  useDocumentTitle(titles.recurring);

  return <div>RecurringBills</div>;
}

export default RecurringBills;
