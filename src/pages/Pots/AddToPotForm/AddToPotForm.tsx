import {
  type ChangeEvent,
  type FormEvent,
  useContext,
  useId,
  useState,
} from "react";

import Modal from "components/Modal/Modal";
import ModalHeader from "components/Modal/ModalHeader";
import ModalInfo from "components/Modal/ModalInfo";
import ProgressBar from "components/ProgressBar/ProgressBar";
import { formatPercentage } from "components/ProgressBar/helpers";
import InputWrapper from "components/Input/InputWrapper";
import InputNumber from "components/Input/InputNumber";

import { PotsPageContext } from "contexts/potsPageContext";

// CSS prefix: .addtopot-
import "./style.css";
import Primary from "components/Buttons/Primary/Primary";

function AddToPotForm() {
  const id = useId();
  const { addToPot, setAddToPot } = useContext(PotsPageContext);
  const [amount, setAmount] = useState(0);

  function closeModal() {
    setAddToPot(null);
  }

  function onChangeAmount(e: ChangeEvent<HTMLInputElement>) {
    setAmount(Number(e.target.value));
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  console.log(addToPot!.total + amount);

  const percentage = ((addToPot!.total + amount) / addToPot!.target) * 100;
  const splitPercentage = (addToPot!.total / addToPot!.target) * 100;
  return (
    <Modal closeModal={closeModal}>
      <ModalHeader
        text={`Add to ‘${addToPot?.name}’`}
        closeModal={closeModal}
      />
      <ModalInfo text="Add money to your pot to keep it separate from your main balance. As soon as you add this money, it will be deducted from your current balance." />

      <div className="addtopot-progress">
        <ProgressBar
          theme={addToPot!.theme}
          percentage={percentage}
          topLeftLabel="New Amount"
          topRightLabel={`$${(addToPot!.total + amount).toFixed(2)}`}
          bottomLeftLabel={`${formatPercentage(percentage)}%`}
          bottomRightLabel={`Target of $${addToPot!.target.toLocaleString()}`}
          splitPercentage={splitPercentage}
        />
      </div>

      <form className="addtopot-form" onSubmit={onSubmit}>
        <InputWrapper id={id} label="Amount to Add" prefix="$">
          <InputNumber
            id={id}
            value={amount}
            onChange={onChangeAmount}
            max={addToPot!.target - addToPot!.total}
          />
        </InputWrapper>

        <Primary label="Confirm Addition" type="submit" />
      </form>
    </Modal>
  );
}

export default AddToPotForm;
