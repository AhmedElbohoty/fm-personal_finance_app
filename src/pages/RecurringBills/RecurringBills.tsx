import Heading1 from "components/Heading1/Heading1";
import Card from "components/Card/Card";
import TotalBills from "pages/RecurringBills/TotalBills/TotalBills";
import Summary from "pages/RecurringBills/Summary/Summary";
import Table from "pages/RecurringBills/Table/Table";
import Filters from "pages/RecurringBills/Filters/Filters";
import Providers from "pages/RecurringBills/Providers";

import titles from "utils/documentTitle";
import useDocumentTitle from "hooks/useDocumentTitle";

// CSS prefix: .recurringbills-
import "./style.css";

function RecurringBills() {
  useDocumentTitle(titles.recurring);

  return (
    <Providers>
      <section className="recurringbills">
        <Heading1 text="Recurring Bills" />

        <div className="recurringbills-content">
          <div className="recurringbills-stats">
            <TotalBills />
            <Summary />
          </div>

          <Card classname="recurringbills-card">
            <Filters />
            <Table />
          </Card>
        </div>
      </section>
    </Providers>
  );
}

export default RecurringBills;
