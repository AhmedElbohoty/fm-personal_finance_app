import { useContext, useId, useState } from "react";

import SvgIcon from "components/SvgIcon/SvgIcon";
import SecondaryBtn from "components/Buttons/Secondary/Secondary";
import ProgressBar from "components/ProgressBar/ProgressBar";
import { formatPercentage } from "components/ProgressBar/helpers";
import Dropdown from "components/Dropdown/Dropdown";

import type { Pot } from "types/data";
import usePopover from "hooks/usePopover";
import useToggleEvent from "hooks/useToggleEvent";
import { PotsPageContext } from "contexts/potsPageContext";
import { formatNumber } from "utils/helpers";
import { selectPotById } from "store/appSlice/selectors";
import { useAppSelector } from "store/store";

// CSS prefix: .potcard-
import "./style.css";

type PotProps = {
  potId: Pot["id"];
};

function Pot({ potId }: PotProps) {
  const floatId = useId();
  const {
    setEditPot,
    setIsPotsFormOpened,
    setDeletePot,
    setAddToPot,
    setWithdrawFromPot,
  } = useContext(PotsPageContext);
  const { refElem, floatElem } = usePopover();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pot = useAppSelector((s) => selectPotById(s, potId));

  useToggleEvent(floatId, (state) => {
    // @ts-expect-error TODO: fix this
    if (state.newState === "closed") {
      setIsDropdownOpen(false);
    }
  });

  function onClickAddMoney() {
    setAddToPot(pot);
  }

  function onClickWithdraw() {
    setWithdrawFromPot(pot);
  }

  function onCLickOptIcon() {
    setIsDropdownOpen(!isDropdownOpen);
  }

  const percentage = (pot.total / pot.target) * 100;
  const options = [
    {
      label: "Edit Pot",
      onClick: () => {
        setEditPot(pot);
        setIsPotsFormOpened(true);
      },
    },
    { label: "Delete Pot", isDanger: true, onClick: () => setDeletePot(pot) },
  ];

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
          <SvgIcon path="ellipsis" />
        </span>

        {isDropdownOpen && (
          // @ts-expect-error will be resolved in react 19
          <div id={floatId} ref={floatElem} popover="auto">
            <Dropdown options={options} />
          </div>
        )}
      </header>

      {/* Main */}
      <div className="potcard-main">
        <div className="potcard-main-progress">
          <ProgressBar
            theme={pot.theme}
            percentage={percentage}
            topLeftLabel="Total Saved"
            topRightLabel={`$${formatNumber(pot.total)}`}
            bottomLeftLabel={`${formatPercentage(percentage)}%`}
            bottomRightLabel={`Target of $${formatNumber(pot.target, 0)}`}
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
