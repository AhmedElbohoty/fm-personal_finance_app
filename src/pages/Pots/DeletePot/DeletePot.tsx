import { useContext } from "react";

import DeleteConfirm from "components/DeleteConfirm/DeleteConfirm";
import { PotsPageContext } from "contexts/potsPageContext";

function DeletePot() {
  const { deletePot, setDeletePot } = useContext(PotsPageContext);

  function onClickDelete() {}

  function closeModal() {
    setDeletePot(null);
  }

  if (!deletePot) return <></>;

  return (
    <DeleteConfirm
      info="Are you sure you want to delete this pot? This action cannot be reversed, and all the data inside it will be removed forever."
      itemName={deletePot.name}
      onClickDelete={onClickDelete}
      closeModal={closeModal}
    />
  );
}

export default DeletePot;
