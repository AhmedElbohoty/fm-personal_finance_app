import { useContext } from "react";

import DeleteConfirm from "components/DeleteConfirm/DeleteConfirm";
import { PotsPageContext } from "contexts/potsPageContext";

function DeletePot() {
  const { deletePot } = useContext(PotsPageContext);

  if (!deletePot) return <></>;

  return <DeleteConfirm />;
}

export default DeletePot;
