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
import Primary from "components/Buttons/Primary/Primary";

import { PotsPageContext } from "contexts/potsPageContext";
import type { Pot } from "types/data";

// CSS prefix: .withdrawpot-
import "./style.css";

function WithdrawFromForm() {
  const id = useId();
  const { withdrawFromPot, setWithdrawFromPot } = useContext(PotsPageContext);
  const [amount, setAmount] = useState(0);

  const { name, total, target } = withdrawFromPot as Pot;

  function closeModal() {
    setWithdrawFromPot(null);
  }

  function onChangeAmount(e: ChangeEvent<HTMLInputElement>) {
    let value = Number(e.target.value);
    const max = total;
    if (value > max) {
      value = max;
    }
    setAmount(value);
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  const percentage = (total / target) * 100;
  const splitPercentage = ((total - amount) / target) * 100;
  return (
    <Modal closeModal={closeModal}>
      <ModalHeader text={`Withdraw from ‘${name}’`} closeModal={closeModal} />
      <ModalInfo text="Withdraw from your pot to put money back in your main balance. This will reduce the amount you have in this pot." />

      <div className="withdrawpot-progress" data-is-withdraw={amount > 0}>
        <ProgressBar
          theme="var(--c-red)"
          percentage={percentage}
          topLeftLabel="New Amount"
          topRightLabel={`$${(total - amount).toFixed(2)}`}
          bottomLeftLabel={`${formatPercentage(splitPercentage)}%`}
          bottomRightLabel={`Target of $${target.toLocaleString()}`}
          splitPercentage={splitPercentage}
        />
      </div>

      <form className="withdrawpot-form" onSubmit={onSubmit}>
        <InputWrapper id={id} label="Amount to Withdraw" prefix="$">
          <InputNumber
            id={id}
            value={amount}
            onChange={onChangeAmount}
            max={total}
          />
        </InputWrapper>

        <Primary label="Confirm Withdrawal" type="submit" />
      </form>
    </Modal>
  );
}

export default WithdrawFromForm;
