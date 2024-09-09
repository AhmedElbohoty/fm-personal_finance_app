import { type MouseEvent, ReactNode, useCallback } from "react";

// CSS prefix: .modal-
import "./style.css";

type DialogProps = {
  children: ReactNode;
  closeModal: () => void;
};

function Dialog({ children, closeModal }: DialogProps) {
  const dialogRef = useCallback((node: HTMLDialogElement) => {
    if (!node) return;
    node.showModal();
  }, []);

  function onClickDialog(e: MouseEvent<HTMLDialogElement>) {
    if (e.target !== e.currentTarget) return;

    closeModal();
  }

  return (
    <dialog
      ref={dialogRef}
      className="modal"
      onClick={onClickDialog}
      onClose={closeModal}
    >
      <div className="modal-card">{children}</div>
    </dialog>
  );
}

export default Dialog;
