import type { MouseEventHandler } from "react";

// CSS prefix: .primarybtn-
import "./style.css";

type PrimaryProps = {
  label: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "submit" | "reset" | "button";
  isDisabled?: boolean;
};

function Primary({
  label,
  onClick = () => {},
  type = "button",
  isDisabled = false,
}: PrimaryProps) {
  return (
    <button
      className="primarybtn"
      onClick={onClick}
      type={type}
      disabled={isDisabled}
    >
      <span className="primarybtn-label">{label}</span>
    </button>
  );
}

export default Primary;
