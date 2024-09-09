import { useState } from "react";

import Heading1 from "components/Heading1/Heading1";
import PrimaryBtn from "components/Buttons/Primary/Primary";
import PotForm from "pages/Pots/PotForm/PotForm";
import Pot from "pages/Pots/Pot/Pot";

import { PotsPageContext } from "contexts/potsPageContext";
import useDocumentTitle from "hooks/useDocumentTitle";
import titles from "utils/documentTitle";
import { pots } from "utils/data.json";
import type { Pot as PotType } from "types/data";

// CSS prefix: .potspage-
import "./style.css";

function Pots() {
  const [isPotsFormOpened, setIsPotsFormOpened] = useState(false);
  const [editPot, setEditPot] = useState<PotType | null>(null);

  useDocumentTitle(titles.pots);

  function onClickAddNewPot() {
    setIsPotsFormOpened(true);
  }

  const contextValue = {
    isPotsFormOpened,
    setIsPotsFormOpened,
    editPot,
    setEditPot,
  };
  return (
    <PotsPageContext.Provider value={contextValue}>
      <div className="potspage">
        <div className="potspage-top">
          <Heading1 text="Pots" />

          <PrimaryBtn label="+ Add New Pot" onClick={onClickAddNewPot} />
        </div>

        <div className="potspage-grid">
          {pots.map((pot) => {
            return <Pot key={pot.id} pot={pot} />;
          })}
        </div>
      </div>
      {isPotsFormOpened && <PotForm editPot={editPot} />}
    </PotsPageContext.Provider>
  );
}

export default Pots;
