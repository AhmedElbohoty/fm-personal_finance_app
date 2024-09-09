import {
  useId,
  useState,
  type MutableRefObject,
  type ChangeEvent,
  type MouseEvent,
} from "react";

import InputWrapper from "components/Input/InputWrapper";
import InputText from "components/Input/InputText";
import InputNumber from "components/Input/InputNumber";
import Select from "components/Input/Select";
import PrimaryBtn from "components/Buttons/Primary/Primary";

import CaretDownIcon from "assets/icons/caret-down.svg";
import CloseIcon from "assets/icons/close-modal.svg";

// CSS prefix: .potform-
import "./style.css";

type PotsForm = {
  potsFormRef: MutableRefObject<HTMLDialogElement | null>;
};

function PotForm({ potsFormRef }: PotsForm) {
  const nameId = useId();
  const targetId = useId();
  const themeId = useId();
  const [potName, setPotName] = useState("");
  const [target, setTarget] = useState(0);
  const [theme, setTheme] = useState("red");

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

  function onClickDialog(e: MouseEvent<HTMLDialogElement>) {
    if (e.target !== e.currentTarget) return;

    potsFormRef.current!.close();
  }

  function onClickClose() {
    potsFormRef.current!.close();
  }

  return (
    <dialog
      ref={potsFormRef}
      className="potform-dialog"
      onClick={onClickDialog}
    >
      <form className="potform-form">
        <div className="potform-head-cont">
          <h4 className="potform-head">Add New Pot</h4>
          <span className="potform-head-icon" onClick={onClickClose}>
            <CloseIcon />
          </span>
        </div>
        <p className="potform-info">
          Create a pot to set savings targets. These can help keep you on track
          as you save for special purchases.
        </p>

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
            colorTag="red"
            icon={<CaretDownIcon />}
          >
            <Select
              id={themeId}
              options={[]}
              value={theme}
              onChange={onChangeTheme}
            />
          </InputWrapper>
        </div>

        <PrimaryBtn label="Add Pot" type="submit" onClick={onClick} />
      </form>
    </dialog>
  );
}

export default PotForm;
