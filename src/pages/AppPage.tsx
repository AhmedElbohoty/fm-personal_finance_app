import { Routes, Route, Navigate } from "react-router-dom";

import Sidebar from "components/Sidebar/Sidebar";
import Overview from "pages/Overview/Overview";
import Transactions from "pages/Transactions/Transactions";
import Budgets from "pages/Budgets/Budgets";
import Pots from "pages/Pots/Pots";
import RecurringBills from "pages/RecurringBills/RecurringBills";

// CSS prefix: .apppage-
import "./style.css";

function AppPage() {
  return (
    <div className="apppage">
      {/* TODO: add topbar notification */}
      <Sidebar />
      <main className="apppage-main">
        <Routes>
          <Route path="/overview" element={<Overview />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/budgets" element={<Budgets />} />
          <Route path="/pots" element={<Pots />} />
          <Route path="/recurring-bills" element={<RecurringBills />} />
          <Route path="*" element={<Navigate to="/overview" replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default AppPage;
