import data from "utils/data.json";

// CSS prefix: .pots-section-
import "./style.css";

function PotsSection() {
  const pots = data.pots;
  const totalSaved = pots.reduce((sum, pot) => sum + pot.total, 0);

  return (
    <section className="pots-section">
      <div className="section-header">
        <h2>Pots</h2>
        <a href="/pots">See Details ▶</a>
      </div>
      <div className="total-saved">
        <span className="icon">$</span>
        <h3>Total Saved</h3>
        <p>${totalSaved.toFixed(2)}</p>
      </div>
      <div className="pots-list">
        {pots.map((pot) => (
          <div key={pot.name} className="pot-item">
            <span>{pot.name}</span>
            <span>${pot.total.toFixed(2)}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PotsSection;
