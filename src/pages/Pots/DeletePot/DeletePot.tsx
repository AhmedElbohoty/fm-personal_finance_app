import { useContext } from "react";
import { useDispatch } from "react-redux";

import DeleteConfirm from "components/DeleteConfirm/DeleteConfirm";
import { PotsPageContext } from "contexts/potsPageContext";
import { deletePot } from "store/appSlice/slice";

function DeletePot() {
  const dispach = useDispatch();
  const { deletePot: pot, setDeletePot } = useContext(PotsPageContext);

  function onClickDelete() {
    dispach(deletePot(pot!.id));
    closeModal();
  }

  function closeModal() {
    setDeletePot(null);
  }

  if (!pot) return <></>;

  return (
    <DeleteConfirm
      info="Are you sure you want to delete this pot? This action cannot be reversed, and all the data inside it will be removed forever."
      itemName={pot.name}
      onClickDelete={onClickDelete}
      closeModal={closeModal}
    />
  );
}

export default DeletePot;
