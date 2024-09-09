import { MouseEventHandler } from "react";

// CSS prefix: .secondbtn-
import "./style.css";

type SecondaryProps = {
  label: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

function Secondary({ label, onClick }: SecondaryProps) {
  return (
    <button className="secondbtn" onClick={onClick}>
      <span className="secondbtn-label ellip-text">{label}</span>
    </button>
  );
}

export default Secondary;
