import type { MouseEventHandler } from "react";

// CSS prefix: .primarybtn-
import "./style.css";

type PrimaryProps = {
  label: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "submit" | "reset" | "button";
};

// TODO: handle disabled button
function Primary({ label, onClick = () => {}, type = "button" }: PrimaryProps) {
  return (
    <button className="primarybtn" onClick={onClick} type={type}>
      <span className="primarybtn-label">{label}</span>
    </button>
  );
}

export default Primary;
