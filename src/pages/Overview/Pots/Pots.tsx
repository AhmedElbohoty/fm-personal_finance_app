import Card from "components/Card/Card";
import CardHeader from "pages/Overview/CardHeader/CardHeader";

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
            <div className="potssect-list-item">
              <span
                style={{ backgroundColor: "#277c78" }}
                className="potssect-list-color"
              ></span>
              <p className="potssect-list-name ellip-text">Savings</p>
              <p className="potssect-list-value">$159</p>
            </div>
            <div className="potssect-list-item">
              <span
                style={{ backgroundColor: "#82c9d7" }}
                className="potssect-list-color"
              ></span>
              <p className="potssect-list-name ellip-text">Gift</p>
              <p className="potssect-list-value">$40</p>
            </div>
            <div className="potssect-list-item">
              <span
                style={{ backgroundColor: "#626070" }}
                className="potssect-list-color"
              ></span>
              <p className="potssect-list-name ellip-text">Concert Ticket</p>
              <p className="potssect-list-value">$110</p>
            </div>
            <div className="potssect-list-item">
              <span
                style={{ backgroundColor: "#f2cdac" }}
                className="potssect-list-color"
              ></span>
              <p className="potssect-list-name ellip-text">New Laptop</p>
              <p className="potssect-list-value">$10</p>
            </div>
          </div>
        </div>
      </section>
    </Card>
  );
}

export default PotsSection;
