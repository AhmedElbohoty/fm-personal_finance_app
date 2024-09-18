import Modal from "components/Modal/Modal";
import ModalHeader from "components/Modal/ModalHeader";
import ModalInfo from "components/Modal/ModalInfo";
import DestroyButton from "components/Buttons/Destroy/Destroy";
import TertiaryButton from "components/Buttons/Tertiary/Tertiary";

// CSS prefix: .deleteconfirm-
import "./style.css";

type DeleteConfirmProps = {
  info: string;
  itemName: string;
  onClickDelete: () => void;
  closeModal: () => void;
};

function DeleteConfirm({
  info,
  itemName,
  onClickDelete,
  closeModal,
}: DeleteConfirmProps) {
  return (
    <Modal closeModal={closeModal}>
      <ModalHeader text={`Delete ‘${itemName}’?`} closeModal={closeModal} />
      <ModalInfo text={info} />

      <div className="deleteconfirm-actions">
        <DestroyButton label="Yes, Confirm Deletion" onClick={onClickDelete} />
        <TertiaryButton label="No, Go Back" onClick={closeModal} />
      </div>
    </Modal>
  );
}

export default DeleteConfirm;
