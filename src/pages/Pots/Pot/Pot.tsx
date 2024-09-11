import { useContext, useId, useState } from "react";

import EllipsisIcon from "assets/icons/ellipsis.svg";
import SecondaryBtn from "components/Buttons/Secondary/Secondary";
import ProgressBar from "components/ProgressBar/ProgressBar";
import Dropdown from "components/Dropdown/Dropdown";

import type { Pot } from "types/data";
import usePopover from "hooks/usePopover";
import useToggleEvent from "hooks/useToggleEvent";
import { PotsPageContext } from "contexts/potsPageContext";

// CSS prefix: .potcard-
import "./style.css";

type PotProps = {
  pot: Pot;
};

function Pot({ pot }: PotProps) {
  const floatId = useId();
  const { setEditPot, setIsPotsFormOpened } = useContext(PotsPageContext);
  const { refElem, floatElem } = usePopover();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useToggleEvent(floatId, (state) => {
    // @ts-expect-error TODO: fix this
    if (state.newState === "closed") {
      setIsDropdownOpen(false);
    }
  });

  function onClickAddMoney() {}

  function onClickWithdraw() {}

  function onCLickOptIcon() {
    setIsDropdownOpen(!isDropdownOpen);
  }

  function formatNumber(num: number) {
    let precision = num < 10 ? 3 : 4;

    if (Number.isInteger(num)) precision--;

    return num.toPrecision(precision);
  }

  const percentage = (pot.total / pot.target) * 100;
  return (
    <section className="potcard">
      {/* Header */}
      <header className="potcard-head">
        <span
          style={{ backgroundColor: pot.theme }}
          className="potcard-head-theme"
        ></span>

        <p className="potcard-head-name ellip-text">{pot.name}</p>

        <span
          ref={refElem}
          className="potcard-head-icon"
          onClick={onCLickOptIcon}
        >
          <EllipsisIcon />
        </span>

        {isDropdownOpen && (
          // @ts-expect-error will be resolved in react 19
          <div id={floatId} ref={floatElem} popover="auto">
            <Dropdown
              options={[
                {
                  label: "Edit Pot",
                  onClick: () => {
                    setEditPot(pot);
                    setIsPotsFormOpened(true);
                  },
                },
                { label: "Delete Pot", isDanger: true, onClick: () => {} },
              ]}
            />
          </div>
        )}
      </header>

      {/* Main */}
      <div className="potcard-main">
        <div className="potcard-main-saved">
          <p className="potcard-main-saved-label ellip-text">Total Saved</p>
          <p className="potcard-main-saved-value ellip-text">
            ${pot.total.toFixed(2)}
          </p>
        </div>
        <div className="potcard-main-progress">
          <ProgressBar
            theme={pot.theme}
            percentage={percentage}
            leftLabel={`${formatNumber(percentage)}%`}
            rightLabel={`Target of $${pot.target.toLocaleString()}`}
          />
        </div>
      </div>

      {/* Footer */}
      <footer className="potcard-footer">
        <SecondaryBtn label="+ Add Money" onClick={onClickAddMoney} />
        <SecondaryBtn label="Withdraw" onClick={onClickWithdraw} />
      </footer>
    </section>
  );
}

export default Pot;
