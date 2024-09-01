import { Transaction } from "types/data";

type TableProps = {
  transactions: Transaction[];
};

function Table({ transactions }: TableProps) {
  return (
    <div className="transactions-table">
      <div className="transactions-table-header">
        <span>Recipient / Sender</span>
        <span>Category</span>
        <span>Transaction Date</span>
        <span>Amount</span>
      </div>
      {transactions.map((transaction) => (
        <div key={transaction.date} className="transactions-table-row">
          <div className="transactions-table-sender">
            <img src={transaction.avatar} alt={transaction.name} />
            <span>{transaction.name}</span>
          </div>
          <span>{transaction.category}</span>
          <span>{new Date(transaction.date).toLocaleDateString()}</span>
          <span
            className={`transactions-table-amount ${
              transaction.amount > 0 ? "positive" : "negative"
            }`}
          >
            {transaction.amount > 0 ? "+" : "-"}$
            {Math.abs(transaction.amount).toFixed(2)}
          </span>
        </div>
      ))}
    </div>
  );
}

export default Table;
