import EllipsisIcon from "assets/icons/ellipsis.svg";
import SecondaryBtn from "components/Buttons/Secondary/Secondary";
import ProgressBar from "components/ProgressBar/ProgressBar";

import type { Pot } from "types/data";

// CSS prefix: .potcard-
import "./style.css";

type PotProps = {
  pot: Pot;
};

function Pot({ pot }: PotProps) {
  function onClickAddMoney() {}

  function onClickWithdraw() {}

  const percentage = (pot.total / pot.target) * 100;

  function formatNumber(num: number) {
    let precision = num < 10 ? 3 : 4;

    if (Number.isInteger(num)) precision--;

    return num.toPrecision(precision);
  }

  return (
    <section className="potcard">
      {/* Header */}
      <header className="potcard-head">
        <span
          style={{ backgroundColor: pot.theme }}
          className="potcard-head-theme"
        ></span>

        <p className="potcard-head-name ellip-text">{pot.name}</p>

        <span className="potcard-head-icon">
          <EllipsisIcon />
        </span>
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
