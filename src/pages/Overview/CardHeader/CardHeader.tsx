import TertiaryButton from "components/Buttons/Tertiary/Tertiary";
import CaretRight from "assets/icons/caret-right.svg";

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
      <TertiaryButton label={linkText} link={linkPath} icon={<CaretRight />} />
    </header>
  );
}

export default CardHeader;
