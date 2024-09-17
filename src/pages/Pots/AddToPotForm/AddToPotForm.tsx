import {
  type ChangeEvent,
  type FormEvent,
  useContext,
  useId,
  useState,
} from "react";
import { useDispatch } from "react-redux";

import Modal from "components/Modal/Modal";
import ModalHeader from "components/Modal/ModalHeader";
import ModalInfo from "components/Modal/ModalInfo";
import ProgressBar from "components/ProgressBar/ProgressBar";
import { formatPercentage } from "components/ProgressBar/helpers";
import InputWrapper from "components/Input/InputWrapper";
import Primary from "components/Buttons/Primary/Primary";
import InputNumber from "components/Input/InputNumber";

import { PotsPageContext } from "contexts/potsPageContext";
import type { Pot } from "types/data";
import { formatNumber } from "utils/helpers";
import { addToPot } from "store/appSlice/slice";

// CSS prefix: .addtopot-
import "./style.css";

function AddToPotForm() {
  const id = useId();
  const dispatch = useDispatch();
  const { addToPot: pot, setAddToPot } = useContext(PotsPageContext);
  const [amount, setAmount] = useState(0);

  const { theme, name, total, target } = pot as Pot;
  const isDisabled = amount <= 0;

  function closeModal() {
    setAddToPot(null);
  }

  function onChangeAmount(e: ChangeEvent<HTMLInputElement>) {
    let value = Number(e.target.value);
    const max = target - total;
    if (value > max) {
      value = max;
    }
    setAmount(value);
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (isDisabled) return;
    dispatch(addToPot({ potId: pot!.id, amount }));
    closeModal();
  }

  const percentage = ((total + amount) / target) * 100;
  const splitPercentage = (total / target) * 100;
  return (
    <Modal closeModal={closeModal}>
      <ModalHeader text={`Add to ‘${name}’`} closeModal={closeModal} />
      <ModalInfo text="Add money to your pot to keep it separate from your main balance. As soon as you add this money, it will be deducted from your current balance." />

      <div className="addtopot-progress" data-is-added={amount > 0}>
        <ProgressBar
          theme={theme}
          percentage={percentage}
          topLeftLabel="New Amount"
          topRightLabel={`$${formatNumber(total + amount)}`}
          bottomLeftLabel={`${formatPercentage(percentage)}%`}
          bottomRightLabel={`Target of $${formatNumber(target, 0)}`}
          splitPercentage={splitPercentage}
        />
      </div>

      <form className="addtopot-form" onSubmit={onSubmit}>
        <InputWrapper id={id} label="Amount to Add" prefix="$">
          <InputNumber
            id={id}
            value={amount}
            onChange={onChangeAmount}
            max={target - total}
          />
        </InputWrapper>

        <Primary
          label="Confirm Addition"
          type="submit"
          isDisabled={isDisabled}
        />
      </form>
    </Modal>
  );
}

export default AddToPotForm;
