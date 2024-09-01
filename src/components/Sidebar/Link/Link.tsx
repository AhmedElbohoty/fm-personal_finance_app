import { Link, useLocation } from "react-router-dom";

// CSS prefix: .sidebar-link
import "./style.css";

type LinkItemProps = {
  icon: React.ReactNode;
  to: string;
  label: string;
};

function LinkItem({ icon, to, label }: LinkItemProps) {
  const { pathname } = useLocation();
  const isActive = pathname === to;

  return (
    <Link to={to} className="sidebar-link" data-active={isActive}>
      <div className="sidebar-link-icon">{icon}</div>
      <span className="sidebar-link-label">{label}</span>
    </Link>
  );
}

export default LinkItem;
