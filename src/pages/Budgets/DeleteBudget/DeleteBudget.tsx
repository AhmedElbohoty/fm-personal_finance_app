import { useContext } from "react";

import DeleteConfirm from "components/DeleteConfirm/DeleteConfirm";
import { BudgetsPageContext } from "contexts/budgetsPageContext";

function DeleteBudget() {
  const { deleteBudget, setDeleteBudget } = useContext(BudgetsPageContext);

  function onClickDelete() {}

  function closeModal() {
    setDeleteBudget(null);
  }

  if (!deleteBudget) return <></>;

  return (
    <DeleteConfirm
      itemName={deleteBudget.category}
      info="Are you sure you want to delete this budget? This action cannot be reversed, and all the data inside it will be removed forever."
      onClickDelete={onClickDelete}
      closeModal={closeModal}
    />
  );
}

export default DeleteBudget;
