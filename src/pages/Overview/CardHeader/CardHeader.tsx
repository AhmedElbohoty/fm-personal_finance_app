import TertiaryButton from "components/Buttons/Tertiary/Tertiary";
import SvgIcon from "components/SvgIcon/SvgIcon";

// CSS prefix: .cardheader-
import "./style.css";

interface CardHeaderProps {
  title: string;
  linkPath: string;
  linkText: string;
}

function CardHeader({ title, linkPath, linkText }: CardHeaderProps) {
  return (
    <header className="cardheader">
      <h2 className="cardheader-h2">{title}</h2>
      <TertiaryButton
        label={linkText}
        link={linkPath}
        icon={<SvgIcon path="caret-right" />}
      />
    </header>
  );
}

export default CardHeader;
