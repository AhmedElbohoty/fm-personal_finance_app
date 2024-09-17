import Card from "components/Card/Card";
import Filters from "pages/Transactions/Filters/Filters";
import Table from "pages/Transactions/Table/Table";
import Providers from "pages/Transactions/Providers";
import Pagination from "components/Pagination/Pagination";
import Heading1 from "components/Heading1/Heading1";

import useDocumentTitle from "hooks/useDocumentTitle";
import titles from "utils/documentTitle";
import { useTransactionsPageContext } from "contexts/transactionsPageContext";

// CSS prefix: .transactions-
import "./style.css";

function Transactions() {
  useDocumentTitle(titles.transactions);

  return (
    <Providers>
      <section className="transactions">
        <Heading1 text="Transactions" />

        <Card classname="transactions-card">
          <Filters />
          <Table />
          <Pages />
        </Card>
      </section>
    </Providers>
  );
}

function Pages() {
  const { totalPages, currentPage, setCurrentPage, transactionsIds } =
    useTransactionsPageContext();

  if (!transactionsIds.length) return <></>;

  return (
    <Pagination
      totalPages={totalPages}
      currentPage={currentPage}
      onPageChange={setCurrentPage}
    />
  );
}

export default Transactions;
