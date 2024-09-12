// CSS prefix: .card-
import "./style.css";

type CardProps = {
  children: React.ReactNode;
  classname?: string;
};

function Card({ children, classname = "" }: CardProps) {
  return <div className={`card ${classname}`}>{children}</div>;
}

export default Card;
