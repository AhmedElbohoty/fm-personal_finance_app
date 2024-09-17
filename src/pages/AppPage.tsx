import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Sidebar from "components/Sidebar/Sidebar";
import Providers from "providers/Providers";

const Overview = React.lazy(() => import("pages/Overview/Overview"));
const Transactions = React.lazy(
  () => import("pages/Transactions/Transactions")
);
const Budgets = React.lazy(() => import("pages/Budgets/Budgets"));
const Pots = React.lazy(() => import("pages/Pots/Pots"));
const RecurringBills = React.lazy(
  () => import("pages/RecurringBills/RecurringBills")
);

// CSS prefix: .apppage-
import "./style.css";

function AppPage() {
  return (
    <Providers>
      <div className="apppage">
        {/* TODO: add topbar notification */}
        <Sidebar />
        <main className="apppage-main">
          <Routes>
            <Route
              path="/overview"
              element={
                <Suspense fallback={<></>}>
                  <Overview />
                </Suspense>
              }
            />
            <Route
              path="/transactions"
              element={
                <Suspense fallback={<></>}>
                  <Transactions />
                </Suspense>
              }
            />
            <Route
              path="/budgets"
              element={
                <Suspense fallback={<></>}>
                  <Budgets />
                </Suspense>
              }
            />
            <Route
              path="/pots"
              element={
                <Suspense fallback={<></>}>
                  <Pots />
                </Suspense>
              }
            />
            <Route
              path="/recurring-bills"
              element={
                <Suspense fallback={<></>}>
                  <RecurringBills />
                </Suspense>
              }
            />
            <Route path="*" element={<Navigate to="/overview" replace />} />
          </Routes>
        </main>
      </div>
    </Providers>
  );
}

export default AppPage;
