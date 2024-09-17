import Card from "components/Card/Card";
import CardHeader from "pages/Overview/CardHeader/CardHeader";
import BudgetPotItem from "components/BudgetPotItem/BudgetPotItem";

import PotIcon from "assets/icons/pot.svg";

import { formatNumber } from "utils/helpers";
import {
  selectPotById,
  selectPotsIds,
  selectPotsTotal,
} from "store/appSlice/selectors";
import { useAppSelector } from "store/store";

// CSS prefix: .potssect-
import "./style.css";

function PotsSection() {
  const potsIds = useAppSelector(selectPotsIds);
  const totalSaved = useAppSelector(selectPotsTotal);

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
            {potsIds.map((potId) => (
              <Item key={potId} potId={potId} />
            ))}
          </div>
        </div>
      </section>
    </Card>
  );
}

function Item({ potId }: { potId: string }) {
  const pot = useAppSelector((s) => selectPotById(s, potId));

  return (
    <BudgetPotItem
      key={pot.id}
      label={pot.name}
      value={pot.total}
      theme={pot.theme}
    />
  );
}

export default PotsSection;
