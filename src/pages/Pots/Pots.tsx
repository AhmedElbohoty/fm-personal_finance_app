import Heading1 from "components/Heading1/Heading1";
import PrimaryBtn from "components/Buttons/Primary/Primary";
import PotForm from "pages/Pots/PotForm/PotForm";
import Pot from "pages/Pots/Pot/Pot";
import Providers from "pages/Pots/Providers";
import DeletePot from "pages/Pots/DeletePot/DeletePot";
import AddToPotForm from "pages/Pots/AddToPotForm/AddToPotForm";
import WithdrawFromForm from "pages/Pots/WithdrawFromForm/WithdrawFromForm";

import { usePotsPageContext } from "contexts/potsPageContext";
import useDocumentTitle from "hooks/useDocumentTitle";
import titles from "utils/documentTitle";
import { pots } from "utils/data.json";

// CSS prefix: .potspage-
import "./style.css";

function Pots() {
  useDocumentTitle(titles.pots);

  return (
    <Providers>
      <div className="potspage">
        <Top />

        <div className="potspage-grid">
          {pots.map((pot) => {
            return <Pot key={pot.id} pot={pot} />;
          })}
        </div>
      </div>

      <Forms />
      <DeletePot />
    </Providers>
  );
}

function Top() {
  const { setIsPotsFormOpened } = usePotsPageContext();
  function onClickAddNewPot() {
    setIsPotsFormOpened(true);
  }

  return (
    <div className="potspage-top">
      <Heading1 text="Pots" />

      <PrimaryBtn label="+ Add New Pot" onClick={onClickAddNewPot} />
    </div>
  );
}

function Forms() {
  const { isPotsFormOpened, addToPot, withdrawFromPot } = usePotsPageContext();

  if (isPotsFormOpened) return <PotForm />;
  if (addToPot) return <AddToPotForm />;
  if (withdrawFromPot) return <WithdrawFromForm />;

  return <></>;
}

export default Pots;
