import { useId, useState, type ChangeEvent, useContext } from "react";

import InputWrapper from "components/Input/InputWrapper";
import InputText from "components/Input/InputText";
import InputNumber from "components/Input/InputNumber";
import Select from "components/Input/Select";
import PrimaryBtn from "components/Buttons/Primary/Primary";
import Modal from "components/Modal/Modal";
import ModalHeader from "components/Modal/ModalHeader";
import ModalInfo from "components/Modal/ModalInfo";
import { themesOptions } from "components/Input/selectOptions";

import CaretDownIcon from "assets/icons/caret-down.svg";
import { PotsPageContext } from "contexts/potsPageContext";

// CSS prefix: .potform-
import "./style.css";

function PotForm() {
  const nameId = useId();
  const targetId = useId();
  const themeId = useId();
  const { setIsPotsFormOpened, setEditPot, editPot } =
    useContext(PotsPageContext);
  const [potName, setPotName] = useState(editPot ? editPot.name : "");
  const [target, setTarget] = useState(editPot ? editPot.target : 0);
  const [theme, setTheme] = useState(editPot ? editPot.theme : "#277c78");

  function onClick() {}

  function onChangePotName(e: ChangeEvent<HTMLInputElement>) {
    setPotName(e.target.value);
  }

  function onChangeTarget(e: ChangeEvent<HTMLInputElement>) {
    setTarget(Number(e.target.value));
  }

  function onChangeTheme(e: ChangeEvent<HTMLSelectElement>) {
    setTheme(e.target.value);
  }

  function closeModal() {
    setIsPotsFormOpened(false);
    setEditPot(null);
  }

  return (
    <Modal closeModal={closeModal}>
      <ModalHeader
        text={editPot ? "Edit Pot" : "Add New Pot"}
        closeModal={closeModal}
      />
      <ModalInfo
        text={
          editPot
            ? "If your saving targets change, feel free to update your pots."
            : "Create a pot to set savings targets. These can help keep you on track as you save for special purchases."
        }
      />

      <form className="potform-form">
        <div className="potform-inputs">
          <InputWrapper
            id={nameId}
            label="Pot Name"
            helperText="30 characters left"
          >
            <InputText
              id={nameId}
              placeholder="Pot Name"
              value={potName}
              onChange={onChangePotName}
            />
          </InputWrapper>

          <InputWrapper id={targetId} label="Target" prefix="$">
            <InputNumber
              id={targetId}
              value={target}
              onChange={onChangeTarget}
            />
          </InputWrapper>

          <InputWrapper
            id={themeId}
            label="Theme"
            colorTag={theme}
            icon={<CaretDownIcon />}
          >
            <Select
              id={themeId}
              options={themesOptions}
              value={theme.toLowerCase()}
              onChange={onChangeTheme}
            />
          </InputWrapper>
        </div>

        <PrimaryBtn
          label={editPot ? "Save Changes" : "Add Pot"}
          type="submit"
          onClick={onClick}
        />
      </form>
    </Modal>
  );
}

export default PotForm;
