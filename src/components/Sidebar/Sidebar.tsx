import { useState } from "react";

import Link from "components/Sidebar/Link/Link";

import Logo from "assets/logo/logo-large.svg";
import LogoMinimized from "assets/logo/logo-small.svg";
import OverviewIcon from "assets/icons/nav-overview.svg";
import TransactionsIcon from "assets/icons/nav-transactions.svg";
import BudgetsIcon from "assets/icons/nav-budgets.svg";
import PotsIcon from "assets/icons/nav-pots.svg";
import RecurringBillsIcon from "assets/icons/nav-recurring-bills.svg";
import MinimizeIcon from "assets/icons/minimize-menu.svg";
import { useWindowSizeContext } from "contexts/windowSizeContext";

// CSS prefix: .sidebar-
import "./style.css";

export type LinkType = {
  icon: React.ReactNode;
  to: string;
  label: string;
};

const links: LinkType[] = [
  {
    icon: <OverviewIcon />,
    to: "/overview",
    label: "Overview",
  },
  {
    icon: <TransactionsIcon />,
    to: "/transactions",
    label: "Transactions",
  },
  {
    icon: <BudgetsIcon />,
    to: "/budgets",
    label: "Budgets",
  },
  {
    icon: <PotsIcon />,
    to: "/pots",
    label: "Pots",
  },
  {
    icon: <RecurringBillsIcon />,
    to: "/recurring-bills",
    label: "Recurring Bills",
  },
];

function Sidebar() {
  const [isMinimized, setIsMinimized] = useState(false);

  const { isLargeScr } = useWindowSizeContext();

  function handleToggleMinimize() {
    setIsMinimized(!isMinimized);
  }

  return (
    <aside className="sidebar" data-minimized={isMinimized}>
      {isLargeScr && (
        <header className="sidebar-header">
          {isMinimized ? <LogoMinimized /> : <Logo />}
        </header>
      )}

      <nav className="sidebar-nav">
        {links.map((link) => (
          <Link key={link.to} {...link} />
        ))}
      </nav>

      {isLargeScr && (
        <button className="sidebar-toggle-btn" onClick={handleToggleMinimize}>
          <span className="sidebar-toggle-btn-icon">
            <MinimizeIcon />
          </span>
          <span className="sidebar-toggle-btn-label">Minimize Menu</span>
        </button>
      )}
    </aside>
  );
}

export default Sidebar;
