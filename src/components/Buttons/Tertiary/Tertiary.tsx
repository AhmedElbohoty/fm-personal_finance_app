import { type ReactElement } from "react";
import { Link, type To } from "react-router-dom";

// CSS prefix: .tertiarybtn-
import "./style.css";

type TertiaryProps = {
  label: string;
  link?: To;
  icon?: ReactElement;
};

function TertiaryButton({ label, link, icon }: TertiaryProps) {
  if (link) {
    return (
      <Link to={link} className="tertiarybtn">
        <span>{label}</span>
        {icon && <span className="tertiarybtn-icon">{icon}</span>}
      </Link>
    );
  }

  return (
    <button className="tertiarybtn">
      <span>{label}</span>
      {icon && <span className="tertiarybtn-icon">{icon}</span>}
    </button>
  );
}

export default TertiaryButton;
