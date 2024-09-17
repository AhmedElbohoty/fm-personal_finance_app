import { useContext } from "react";
import { useDispatch } from "react-redux";

import DeleteConfirm from "components/DeleteConfirm/DeleteConfirm";
import { BudgetsPageContext } from "contexts/budgetsPageContext";
import { deleteBudget } from "store/appSlice/slice";

function DeleteBudget() {
  const dispatch = useDispatch();
  const { deleteBudget: budget, setDeleteBudget } =
    useContext(BudgetsPageContext);

  function onClickDelete() {
    dispatch(deleteBudget(budget!.id));
    closeModal();
  }

  function closeModal() {
    setDeleteBudget(null);
  }

  if (!budget) return <></>;

  return (
    <DeleteConfirm
      itemName={budget.category}
      info="Are you sure you want to delete this budget? This action cannot be reversed, and all the data inside it will be removed forever."
      onClickDelete={onClickDelete}
      closeModal={closeModal}
    />
  );
}

export default DeleteBudget;
