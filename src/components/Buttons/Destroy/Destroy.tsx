import type { MouseEventHandler } from "react";

// CSS prefix: .destroybtn-
import "./style.css";

type DestroyProps = {
  label: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  type?: "submit" | "reset" | "button";
};

function Destroy({ label, onClick, type = "button" }: DestroyProps) {
  return (
    <button className="destroybtn" onClick={onClick} type={type}>
      <span className="destroybtn-label">{label}</span>
    </button>
  );
}

export default Destroy;
