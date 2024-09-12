import { useMemo, useState } from "react";

import Card from "components/Card/Card";
import Filters from "pages/Transactions/Filters/Filters";
import Table from "pages/Transactions/Table/Table";
import Pagination from "components/Pagination/Pagination";
import Heading1 from "components/Heading1/Heading1";

import useDocumentTitle from "hooks/useDocumentTitle";
import titles from "utils/documentTitle";
import { transactions } from "utils/data.json";

// CSS prefix: .transactions-
import "./style.css";

function Transactions() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(transactions.length / itemsPerPage);
  const paginatedTransactions = useMemo(() => {
    return transactions.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
  }, [currentPage]);

  useDocumentTitle(titles.transactions);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <section className="transactions">
      <Heading1 text="Transactions" />

      <Card classname="transactions-card">
        <Filters />
        <Table transactions={paginatedTransactions} />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </Card>
    </section>
  );
}

export default Transactions;
