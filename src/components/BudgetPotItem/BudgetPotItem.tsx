import { formatNumber } from "utils/helpers";

// CSS prefix: .budgetpotitem-
import "./style.css";

type BudgetPotItemProps = {
  label: string;
  value: number;
  total?: number;
  theme?: string;
};

function BudgetPotItem({
  label,
  value,
  total,
  theme = "var(--c-beige-100)",
}: BudgetPotItemProps) {
  return (
    <div
      className="budgetpotitem"
      style={{ "--border-color": theme } as React.CSSProperties}
    >
      <p className="budgetpotitem-label ellip-text">{label}</p>
      <p className="budgetpotitem-value">
        <span>${formatNumber(value)}</span>
        {total && (
          <span className="budgetpotitem-total">of ${formatNumber(total)}</span>
        )}
      </p>
    </div>
  );
}

export default BudgetPotItem;
