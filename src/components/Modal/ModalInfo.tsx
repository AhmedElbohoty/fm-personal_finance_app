// CSS prefix: .modalinfo-
import "./style.css";

type ModalInfo = { text: string };

function ModalInfo({ text }: ModalInfo) {
  return <p className="modalinfo">{text}</p>;
}

export default ModalInfo;
