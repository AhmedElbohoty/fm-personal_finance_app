import { useRef } from "react";

import Heading1 from "components/Heading1/Heading1";
import PrimaryBtn from "components/Buttons/Primary/Primary";
import PotForm from "pages/Pots/PotForm/PotForm";
import Pot from "pages/Pots/Pot/Pot";

import { PotsPageContext } from "contexts/potsPageContext";
import useDocumentTitle from "hooks/useDocumentTitle";
import titles from "utils/documentTitle";

import { pots } from "utils/data.json";

// CSS prefix: .potspage-
import "./style.css";

function Pots() {
  const potsFormRef = useRef<HTMLDialogElement | null>(null);

  useDocumentTitle(titles.pots);

  function onClickAddNewPot() {
    if (!potsFormRef.current) return;
    potsFormRef.current.showModal();
  }

  return (
    <PotsPageContext.Provider value={{ potsFormRef }}>
      <div className="potspage">
        <div className="potspage-top">
          <Heading1 text="Pots" />

          <PrimaryBtn label="+ Add New Pot" onClick={onClickAddNewPot} />
        </div>

        <div className="potspage-grid">
          {pots.map((pot, idx) => {
            return <Pot key={idx} pot={pot} />;
          })}
        </div>
      </div>
      <PotForm potsFormRef={potsFormRef} />
    </PotsPageContext.Provider>
  );
}

export default Pots;
