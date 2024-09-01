// CSS prefix: .transactions-table-item-
import "./style.css";

type TransactionItemProps = {
  transaction: {
    id: string;
    name: string;
    avatar: string;
    category: string;
    date: string;
    amount: number;
  };
};

function TransactionItem({ transaction }: TransactionItemProps) {
  const { name, avatar, category, date, amount } = transaction;

  return (
    <div className="transaction-item">
      <div className="transaction-item-sender">
        <img src={avatar} alt={name} className="transaction-item-avatar" />
        <span>{name}</span>
      </div>
      <span>{category}</span>
      <span>{date}</span>
      <span
        className={`transaction-item-amount ${
          amount > 0 ? "positive" : "negative"
        }`}
      >
        {amount > 0 ? "+" : "-"}${Math.abs(amount).toFixed(2)}
      </span>
    </div>
  );
}

export default TransactionItem;
