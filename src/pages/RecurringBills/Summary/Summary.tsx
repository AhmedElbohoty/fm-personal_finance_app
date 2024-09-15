import Separator from "components/Separator/Separator";

// CSS prefix: .billsummary-
import "./style.css";

// TODO: implement dynamic values

function Summary() {
  return (
    <div className="billsummary-cont">
      <p className="billsummary-label">Summary</p>

      <div className="billsummary-items">
        <div className="billsummary-item">
          <p className="billsummary-item-label ellip-text">Paid Bills</p>
          <p className="billsummary-item-value">4 ($190.00)</p>
        </div>

        <Separator />

        <div className="billsummary-item">
          <p className="billsummary-item-label ellip-text">Total Upcoming</p>
          <p className="billsummary-item-value">4 ($194.98)</p>
        </div>

        <Separator />

        <div className="billsummary-item" data-due="true">
          <p className="billsummary-item-label ellip-text">Due Soon</p>
          <p className="billsummary-item-value">2 ($59.98)</p>
        </div>
      </div>
    </div>
  );
}

export default Summary;
