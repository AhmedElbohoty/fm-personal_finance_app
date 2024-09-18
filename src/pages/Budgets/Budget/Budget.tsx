import { Fragment, useContext, useId, useState } from "react";

import Dropdown from "components/Dropdown/Dropdown";
import ProgressBar from "components/ProgressBar/ProgressBar";
import TertiaryButton from "components/Buttons/Tertiary/Tertiary";
import Separator from "components/Separator/Separator";
import UserAvatar from "components/Avatar/Avatar";
import SvgIcon from "components/SvgIcon/SvgIcon";
import BudgetPotItem from "components/BudgetPotItem/BudgetPotItem";

import type {
  Budget as BudgetType,
  Transaction as TransactionType,
} from "types/data";
import usePopover from "hooks/usePopover";
import { BudgetsPageContext } from "contexts/budgetsPageContext";
import useToggleEvent from "hooks/useToggleEvent";
import { formatDate, formatNumber } from "utils/helpers";
import { useAppSelector } from "store/store";
import {
  selectBudgetById,
  selectLatestTransactionsIds,
  selectMonthlySpent,
  selectTransactionById,
} from "store/appSlice/selectors";

// CSS prefix: .budgetcard-
import "./style.css";

type BudgetProps = {
  budgetId: BudgetType["id"];
};

function Budget({ budgetId }: BudgetProps) {
  const budget = useAppSelector((s) => selectBudgetById(s, budgetId));
  const spent = useAppSelector((s) => selectMonthlySpent(s, budget.category));
  const latestSpendingsIds = useAppSelector((s) =>
    selectLatestTransactionsIds(s, budget.category)
  );
  const floatId = useId();
  const { setDeleteBudget, setIsBudgetsFormOpened, setEditBudget } =
    useContext(BudgetsPageContext);
  const { refElem, floatElem } = usePopover();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useToggleEvent(floatId, (state) => {
    // @ts-expect-error TODO: fix this
    if (state.newState === "closed") {
      setIsDropdownOpen(false);
    }
  });

  function onCLickOptIcon() {
    setIsDropdownOpen(!isDropdownOpen);
  }

  const options = [
    {
      label: "Edit Budget",
      onClick: () => {
        setEditBudget(budget);
        setIsBudgetsFormOpened(true);
      },
    },
    {
      label: "Delete Budget",
      isDanger: true,
      onClick: () => setDeleteBudget(budget),
    },
  ];

  const remaining = budget.maximum <= spent ? 0 : budget.maximum - spent;
  return (
    <section className="budgetcard-cont">
      {/* Header */}
      <header className="budgetcard-head">
        <span
          style={{ backgroundColor: budget.theme }}
          className="budgetcard-head-theme"
        ></span>

        <p className="budgetcard-head-name ellip-text">{budget.category}</p>

        <span
          ref={refElem}
          className="budgetcard-head-icon"
          onClick={onCLickOptIcon}
        >
          <SvgIcon path="ellipsis" />
        </span>

        {isDropdownOpen && (
          // @ts-expect-error will be resolved in react 19
          <div id={floatId} ref={floatElem} popover="auto">
            <Dropdown options={options} />
          </div>
        )}
      </header>

      {/* Bar */}
      <div className="budgetcard-bar-cont">
        <p className="budgetcard-bar-max">
          Maximum of ${formatNumber(budget.maximum)}
        </p>

        <ProgressBar
          percentage={(spent / budget.maximum) * 100}
          theme={budget.theme}
        />

        <div className="budgetcard-spend">
          <BudgetPotItem label="Spent" value={spent} theme={budget.theme} />

          <BudgetPotItem label="Remaining" value={remaining} />
        </div>
      </div>

      {/* Latest Spending */}
      <div className="budgetcard-latspend">
        <div className="budgetcard-latspend-head">
          <p className="budgetcard-latspend-title">Latest Spending</p>

          <TertiaryButton
            label="See All"
            link={`/transactions?category=${budget.category}`}
            icon={<SvgIcon path="caret-right" />}
          />
        </div>

        <div className="budgetcard-transactions">
          {latestSpendingsIds.map((transId) => {
            return (
              <Fragment key={transId}>
                <Transaction transId={transId} />
                <Separator />
              </Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
}

type TransactionProps = {
  transId: TransactionType["id"];
};
function Transaction({ transId }: TransactionProps) {
  const transaction = useAppSelector((s) => selectTransactionById(s, transId));

  const { avatar, name, amount, date } = transaction;
  return (
    <div className="budgetcard-transitem">
      <div className="budgetcard-transitem-user">
        <UserAvatar src={avatar} alt={name} name={name} />

        <p className="ellip-text">{name}</p>
      </div>

      <div className="budgetcard-transitem-detail">
        <p className="budgetcard-transitem-amount">
          {amount > 0 ? "+" : "-"}${formatNumber(Math.abs(amount))}
        </p>
        <p className="budgetcard-transitem-date">{formatDate(date)}</p>
      </div>
    </div>
  );
}

export default Budget;
