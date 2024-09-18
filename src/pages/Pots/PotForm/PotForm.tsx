import {
  useId,
  useState,
  type ChangeEvent,
  useContext,
  type FormEvent,
} from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";

import InputWrapper from "components/Input/InputWrapper";
import InputText from "components/Input/InputText";
import InputNumber from "components/Input/InputNumber";
import Select from "components/Input/Select";
import PrimaryBtn from "components/Buttons/Primary/Primary";
import Modal from "components/Modal/Modal";
import ModalHeader from "components/Modal/ModalHeader";
import ModalInfo from "components/Modal/ModalInfo";
import { themesOptions } from "components/Input/selectOptions";
import SvgIcon from "components/SvgIcon/SvgIcon";

import { PotsPageContext } from "contexts/potsPageContext";
import { addPot, updatePot } from "store/appSlice/slice";

// CSS prefix: .potform-
import "./style.css";

function PotForm() {
  const dispach = useDispatch();
  const nameId = useId();
  const targetId = useId();
  const themeId = useId();
  const { setIsPotsFormOpened, setEditPot, editPot } =
    useContext(PotsPageContext);
  const [potName, setPotName] = useState(editPot ? editPot.name : "");
  const [target, setTarget] = useState(editPot ? editPot.target : 0);
  const [theme, setTheme] = useState(editPot ? editPot.theme : "#277c78");

  let isDisabled = !potName || target === 0;
  if (editPot) {
    isDisabled =
      isDisabled ||
      (editPot.name === potName &&
        editPot.target === target &&
        editPot.theme === theme);
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    if (isDisabled) return;
    e.preventDefault();

    if (!editPot) {
      dispach(addPot({ id: uuidv4(), name: potName, total: 0, target, theme }));
    } else {
      dispach(
        updatePot({
          ...editPot,
          name: potName,
          target,
          theme,
        })
      );
    }
    closeModal();
  }

  function onChangePotName(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.value.length > 30) return;
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

      <form className="potform-form" onSubmit={onSubmit}>
        <div className="potform-inputs">
          <InputWrapper
            id={nameId}
            label="Pot Name"
            helperText={`${30 - potName.length} characters left`}
          >
            <InputText
              id={nameId}
              placeholder="Pot Name"
              value={potName}
              onChange={onChangePotName}
              maxLength={30}
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
            icon={<SvgIcon path="caret-down" />}
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
          isDisabled={isDisabled}
        />
      </form>
    </Modal>
  );
}

export default PotForm;
