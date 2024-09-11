import { useContext } from "react";

import Modal from "components/Modal/Modal";
import ModalHeader from "components/Modal/ModalHeader";
import ModalInfo from "components/Modal/ModalInfo";
import DestroyButton from "components/Buttons/Destroy/Destroy";
import TertiaryButton from "components/Buttons/Tertiary/Tertiary";

import { PotsPageContext } from "contexts/potsPageContext";

// CSS prefix: .deleteconfirm-
import "./style.css";

function DeleteConfirm() {
  const { deletePot, setDeletePot } = useContext(PotsPageContext);

  function onClickDelete() {}

  function closeModal() {
    setDeletePot(null);
  }

  return (
    <Modal closeModal={closeModal}>
      <ModalHeader
        text={`Delete ‘${deletePot!.name}’?`}
        closeModal={closeModal}
      />
      <ModalInfo text="Are you sure you want to delete this pot? This action cannot be reversed, and all the data inside it will be removed forever." />

      <div className="deleteconfirm-actions">
        <DestroyButton label="Yes, Confirm Deletion" onClick={onClickDelete} />
        <TertiaryButton label="No, Go Back" />
      </div>
    </Modal>
  );
}

export default DeleteConfirm;
