import { useContext, useId, useState } from "react";

import Dropdown from "components/Dropdown/Dropdown";
import ProgressBar from "components/ProgressBar/ProgressBar";
import TertiaryButton from "components/Buttons/Tertiary/Tertiary";
import Separator from "components/Separator/Separator";
import UserAvatar from "components/Avatar/Avatar";
import EllipsisIcon from "assets/icons/ellipsis.svg";
import CaretRightIcon from "assets/icons/caret-right.svg";

import { Budget as BudgetType } from "types/data";
import usePopover from "hooks/usePopover";
import { BudgetsPageContext } from "contexts/budgetsPageContext";
import useToggleEvent from "hooks/useToggleEvent";
import { formatDate, formatNumber } from "utils/helpers";
import { transactions } from "utils/data.json";

// CSS prefix: .budgetcard-
import "./style.css";

type BudgetProps = {
  budget: BudgetType;
};

function Budget({ budget }: BudgetProps) {
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

  const { avatar, name, amount, date } = transactions[0];

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
          <EllipsisIcon />
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
          percentage={(15 / budget.maximum) * 100}
          theme={budget.theme}
        />

        <div className="budgetcard-spend">
          <p
            className="budgetcard-spent"
            style={{ "--border-color": budget.theme } as React.CSSProperties}
          >
            <span>Spent</span>
            <span className="budgetcard-spent-value">${formatNumber(15)}</span>
          </p>
          <p className="budgetcard-remain">
            <span>Remaining</span>
            <span className="budgetcard-remain-value">
              ${formatNumber(budget.maximum - 15)}
            </span>
          </p>
        </div>
      </div>

      {/* Latest Spending */}
      <div className="budgetcard-latspend">
        <div className="budgetcard-latspend-head">
          <p className="budgetcard-latspend-title">Latest Spending</p>

          <TertiaryButton
            label="See All"
            link="/transactions"
            icon={<CaretRightIcon />}
          />
        </div>

        <div className="budgetcard-transactions">
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

          <Separator />

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

          <Separator />

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
        </div>
      </div>
    </section>
  );
}

export default Budget;
