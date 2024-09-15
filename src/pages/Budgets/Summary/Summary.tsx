// CSS prefix: .budsummary-
import "./style.css";

function Summary() {
  return (
    <section className="budsummary">
      <div className="budsummary-chart">CHART</div>

      <div className="budsummary-stats">
        <h2 className="budsummary-h2">Spending Summary</h2>

        <div className="budsummary-spend">
          <div className="budsummary-spend-item">
            <h3
              className="budsummary-spend-h3"
              style={
                { "--border-color": "var(--c-green)" } as React.CSSProperties
              }
            >
              Entertainment
            </h3>
            <p className="budsummary-spend-value">
              <span>$15.00</span>{" "}
              <span className="budsummary-spend-total">of $50.00</span>
            </p>
          </div>

          <span className="budsummary-spend-sep"></span>

          <div className="budsummary-spend-item">
            <h3
              className="budsummary-spend-h3"
              style={
                { "--border-color": "var(--c-cyan)" } as React.CSSProperties
              }
            >
              Bills
            </h3>
            <p className="budsummary-spend-value">
              <span>$150.00</span>{" "}
              <span className="budsummary-spend-total">of $750.00</span>
            </p>
          </div>

          <span className="budsummary-spend-sep"></span>

          <div className="budsummary-spend-item">
            <h3
              className="budsummary-spend-h3"
              style={
                { "--border-color": "var(--c-yellow)" } as React.CSSProperties
              }
            >
              Dining Out
            </h3>
            <p className="budsummary-spend-value">
              <span>$133.00</span>{" "}
              <span className="budsummary-spend-total">of $75.00</span>
            </p>
          </div>

          <span className="budsummary-spend-sep"></span>

          <div className="budsummary-spend-item">
            <h3
              className="budsummary-spend-h3"
              style={
                { "--border-color": "var(--c-navy)" } as React.CSSProperties
              }
            >
              Personal Care
            </h3>
            <p className="budsummary-spend-value">
              <span>$40.00</span>{" "}
              <span className="budsummary-spend-total">of $100.00</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Summary;
