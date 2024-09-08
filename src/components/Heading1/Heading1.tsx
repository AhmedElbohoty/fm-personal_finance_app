// CSS prefix: .h1-
import "./style.css";

interface Heading1Props {
  text: string;
}

function Heading1({ text }: Heading1Props) {
  return <h1 className="h1">{text}</h1>;
}

export default Heading1;
