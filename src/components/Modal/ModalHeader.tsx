import CloseIcon from "assets/icons/close-modal.svg";

// CSS prefix: .modalhead-
import "./style.css";

type ModalHeaderProps = {
  text: string;
  closeModal: () => void;
};

function ModalHeader({ text, closeModal }: ModalHeaderProps) {
  return (
    <div className="modalhead">
      <p className="modalhead-label">{text}</p>

      <span className="modalhead-icon" onClick={closeModal}>
        <CloseIcon />
      </span>
    </div>
  );
}

export default ModalHeader;
