// CSS prefix: .progbar-
import "./style.css";

type ProgressBar = {
  theme: string;
  percentage: number;
  topLeftLabel?: string;
  topRightLabel?: string;
  bottomLeftLabel?: string;
  bottomRightLabel?: string;
  splitPercentage?: number;
};

function ProgressBar({
  theme,
  percentage,
  topLeftLabel,
  topRightLabel,
  bottomLeftLabel,
  bottomRightLabel,
  splitPercentage,
}: ProgressBar) {
  return (
    <div className="progbar-cont">
      {(topLeftLabel || topRightLabel) && (
        <div className="progbar-top-labels">
          {topLeftLabel && (
            <p className="progbar-tleft-label ellip-text">{topLeftLabel}</p>
          )}
          {topRightLabel && (
            <p className="progbar-tright-label ellip-text">{topRightLabel}</p>
          )}
        </div>
      )}

      <div className="progbar-bar">
        <span
          style={{ width: `${percentage}%`, backgroundColor: theme }}
          className="progbar-active"
        ></span>

        {splitPercentage && (
          <span
            style={{ width: `${splitPercentage}%` }}
            className="progbar-split"
          ></span>
        )}
      </div>

      {(bottomLeftLabel || bottomRightLabel) && (
        <div className="progbar-bottom-labels">
          {bottomLeftLabel && (
            <p className="progbar-bleft-label ellip-text">{bottomLeftLabel}</p>
          )}
          {bottomRightLabel && (
            <p className="progbar-bright-label ellip-text">
              {bottomRightLabel}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default ProgressBar;
