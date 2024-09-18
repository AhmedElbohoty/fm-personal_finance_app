import { useState } from "react";

import Link from "components/Sidebar/Link/Link";
import SvgIcon from "components/SvgIcon/SvgIcon";

import Logo from "assets/logo/logo-large.svg";
import LogoMinimized from "assets/logo/logo-small.svg";

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
    icon: <SvgIcon path="nav-overview" />,
    to: "/overview",
    label: "Overview",
  },
  {
    icon: <SvgIcon path="nav-transactions" />,
    to: "/transactions",
    label: "Transactions",
  },
  {
    icon: <SvgIcon path="nav-budgets" />,
    to: "/budgets",
    label: "Budgets",
  },
  {
    icon: <SvgIcon path="nav-pots" />,
    to: "/pots",
    label: "Pots",
  },
  {
    icon: <SvgIcon path="nav-recurring-bills" />,
    to: "/recurring-bills",
    label: "Recurring bills",
  },
];

function Sidebar() {
  const [isMinimized, setIsMinimized] = useState(false);

  const { isLargeScr } = useWindowSizeContext();

  function handleToggleMinimize() {
    setIsMinimized(!isMinimized);
  }

  return (
    <>
      <div className="sidebar-placeholder" data-minimized={isMinimized}></div>
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
              <SvgIcon path="minimize-menu" />
            </span>
            <span className="sidebar-toggle-btn-label">Minimize Menu</span>
          </button>
        )}
      </aside>
    </>
  );
}

export default Sidebar;
