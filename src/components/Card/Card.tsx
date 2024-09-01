// CSS prefix: .card-
import "./style.css";

type CardProps = {
  children: React.ReactNode;
};

function Card({ children }: CardProps) {
  return <div className="card">{children}</div>;
}

export default Card;
