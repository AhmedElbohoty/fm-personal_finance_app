// CSS prefix: .progbar-
import "./style.css";

type ProgressBar = {
  theme: string;
  percentage: number;
  leftLabel?: string;
  rightLabel?: string;
};

function ProgressBar({
  theme,
  percentage,
  leftLabel,
  rightLabel,
}: ProgressBar) {
  return (
    <div className="progbar-cont">
      <div className="progbar-bar">
        <span
          style={{ width: `${percentage}%`, backgroundColor: theme }}
          className="progbar-active"
        ></span>
      </div>

      {(leftLabel || rightLabel) && (
        <div className="progbar-labels">
          {leftLabel && (
            <p className="progbar-left-label ellip-text">{leftLabel}</p>
          )}
          {rightLabel && (
            <p className="progbar-right-label ellip-text">{rightLabel}</p>
          )}
        </div>
      )}
    </div>
  );
}

export default ProgressBar;
