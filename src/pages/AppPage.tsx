import React, { Suspense, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Sidebar from "components/Sidebar/Sidebar";
import Providers from "providers/Providers";
import ClipLoader from "components/ClipLoader/ClipLoader";

const Overview = React.lazy(() => import("pages/Overview/Overview"));
const Transactions = React.lazy(
  () => import("pages/Transactions/Transactions")
);
const Budgets = React.lazy(() => import("pages/Budgets/Budgets"));
const Pots = React.lazy(() => import("pages/Pots/Pots"));
const Signup = React.lazy(() => import("pages/Signup/Signup"));
const RecurringBills = React.lazy(
  () => import("pages/RecurringBills/RecurringBills")
);

// CSS prefix: .apppage-
import "./style.css";

function AppPage() {
  const [isLogin, setIsLogin] = useState(
    window.localStorage.getItem("personal_finances_logged_in") === "true"
  );

  if (!isLogin) {
    return (
      <div className="apppage">
        <Routes>
          <Route
            path="/signup"
            element={
              <Suspense>
                <Signup setIsLogin={setIsLogin} />
              </Suspense>
            }
          />
          <Route
            path="/login"
            element={
              <Suspense>
                <Signup login setIsLogin={setIsLogin} />
              </Suspense>
            }
          />

          <Route path="*" element={<Navigate to="/signup" replace />} />
        </Routes>
      </div>
    );
  }

  return (
    <Providers>
      <div className="apppage">
        <Sidebar />
        <main className="apppage-main">
          <Routes>
            <Route
              path="/overview"
              element={
                <Suspense fallback={<PageLoader />}>
                  <Overview />
                </Suspense>
              }
            />
            <Route
              path="/transactions"
              element={
                <Suspense fallback={<PageLoader />}>
                  <Transactions />
                </Suspense>
              }
            />
            <Route
              path="/budgets"
              element={
                <Suspense fallback={<PageLoader />}>
                  <Budgets />
                </Suspense>
              }
            />
            <Route
              path="/pots"
              element={
                <Suspense fallback={<PageLoader />}>
                  <Pots />
                </Suspense>
              }
            />
            <Route
              path="/recurring-bills"
              element={
                <Suspense fallback={<PageLoader />}>
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

function PageLoader() {
  return (
    <div className="apppage-loader">
      <ClipLoader />
    </div>
  );
}

export default AppPage;
