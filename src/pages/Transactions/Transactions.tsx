import { useState } from "react";
import Card from "components/Card/Card";
import Filters from "pages/Transactions/Filters/Filters";
import Table from "pages/Transactions/Table/Table";
import Pagination from "components/Pagination/Pagination";
import data from "utils/data.json";

// CSS prefix: .transactions-
import "./style.css";

function Transactions() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(data.transactions.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const paginatedTransactions = data.transactions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <section className="transactions">
      <h1>Transactions</h1>
      <Card>
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
