import Card from "components/Card/Card";
import CardHeader from "pages/Overview/CardHeader/CardHeader";
import BudgetPotItem from "components/BudgetPotItem/BudgetPotItem";

import PotIcon from "assets/icons/pot.svg";

import data from "utils/data.json";
import { formatNumber } from "utils/helpers";

// CSS prefix: .potssect-
import "./style.css";

function PotsSection() {
  const pots = data.pots;
  const totalSaved = pots.reduce((sum, pot) => sum + pot.total, 0);

  return (
    <Card>
      <section className="potssect">
        <CardHeader title="Pots" linkPath="/pots" linkText="See Details" />

        <div className="potssect-main">
          <div className="potssect-total">
            <span className="potssect-total-icon">
              <PotIcon />
            </span>
            <div>
              <p className="potssect-total-label">Total Saved</p>
              <p className="potssect-total-value">
                ${formatNumber(totalSaved)}
              </p>
            </div>
          </div>
          <div className="potssect-list">
            <BudgetPotItem label="Savings" value={159} theme="#277c78" />

            <BudgetPotItem label="Gift" value={40} theme="#82c9d7" />

            <BudgetPotItem label="Concert Ticket" value={110} theme="#626070" />

            <BudgetPotItem label="New Laptop" value={10} theme="#f2cdac" />
          </div>
        </div>
      </section>
    </Card>
  );
}

export default PotsSection;
