import { Fragment } from "react";

import Card from "components/Card/Card";
import CardHeader from "pages/Overview/CardHeader/CardHeader";
import UserAvatar from "components/Avatar/Avatar";

import type { Transaction } from "types/data";
import { useAppSelector } from "store/store";
import { selectAllTransactions } from "store/appSlice/selectors";

// CSS prefix: .transactions-section-
import "./style.css";

function Transactions() {
  const transactions = useAppSelector(selectAllTransactions).slice(0, 5);

  return (
    <Card>
      <section className="transactions-section">
        <CardHeader
          title="Transactions"
          linkPath="/transactions"
          linkText="View All"
        />

        <ul className="transactions-list">
          {transactions.map((transaction, index) => (
            <Fragment key={index}>
              <Transaction key={index} transaction={transaction} />
              <span className="transaction-line"></span>
            </Fragment>
          ))}
        </ul>
      </section>
    </Card>
  );
}

type TransactionProps = {
  transaction: Transaction;
};

function Transaction({ transaction }: TransactionProps) {
  const { name, avatar, date, amount } = transaction;

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    signDisplay: "always",
  });

  return (
    <li className="transaction-item">
      <div className="transaction-avatar">
        <UserAvatar src={avatar} alt="User avatar" name={name} />
      </div>

      <p className="transaction-name ellip-text">{name}</p>
      <p className="transaction-amount" data-income={amount > 0}>
        {formatter.format(amount)}
      </p>

      <p className="transaction-date">
        {new Date(date).toLocaleDateString("en-US", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        })}
      </p>
    </li>
  );
}

export default Transactions;
