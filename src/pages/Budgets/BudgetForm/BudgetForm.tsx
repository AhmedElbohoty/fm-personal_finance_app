import { useId, useState, type ChangeEvent, useContext } from "react";

import InputWrapper from "components/Input/InputWrapper";

import InputNumber from "components/Input/InputNumber";
import Select from "components/Input/Select";
import PrimaryBtn from "components/Buttons/Primary/Primary";
import Modal from "components/Modal/Modal";
import ModalHeader from "components/Modal/ModalHeader";
import ModalInfo from "components/Modal/ModalInfo";
import { Option, themesOptions } from "components/Input/selectOptions";

import CaretDownIcon from "assets/icons/caret-down.svg";
import { BudgetsPageContext } from "contexts/budgetsPageContext";
import { transactions } from "utils/data.json";

// CSS prefix: .budgetform-
import "./style.css";

const categories = new Set(transactions.map(({ category }) => category));
const categoriesOpts: Option[] = [];
categories.forEach((category) =>
  categoriesOpts.push({ label: category, value: category })
);

function BudgetForm() {
  const categoryId = useId();
  const spendId = useId();
  const themeId = useId();
  const { setIsBudgetsFormOpened, setEditBudget, editBudget } =
    useContext(BudgetsPageContext);
  const [category, setCategory] = useState(
    editBudget ? editBudget.category : ""
  );
  const [maxSpend, setMaxSpend] = useState(editBudget ? editBudget.maximum : 0);
  const [theme, setTheme] = useState(editBudget ? editBudget.theme : "#277c78");

  function onClick() {}

  function onChageCategory(e: ChangeEvent<HTMLSelectElement>) {
    setCategory(e.target.value);
  }

  function onChangeTarget(e: ChangeEvent<HTMLInputElement>) {
    setMaxSpend(Number(e.target.value));
  }

  function onChangeTheme(e: ChangeEvent<HTMLSelectElement>) {
    setTheme(e.target.value);
  }

  function closeModal() {
    setIsBudgetsFormOpened(false);
    setEditBudget(null);
  }

  return (
    <Modal closeModal={closeModal}>
      <ModalHeader
        text={editBudget ? "Edit Budget" : "Add New Budget"}
        closeModal={closeModal}
      />
      <ModalInfo
        text={
          editBudget
            ? "As your budgets change, feel free to update your spending limits."
            : "Choose a category to set a spending budget. These categories can help you monitor spending."
        }
      />

      <form className="budgetform-form">
        <div className="budgetform-inputs">
          <InputWrapper
            id={categoryId}
            label="Budget Category"
            icon={<CaretDownIcon />}
          >
            <Select
              id={categoryId}
              options={categoriesOpts}
              value={category}
              onChange={onChageCategory}
            />
          </InputWrapper>

          <InputWrapper id={spendId} label="Maximum Spend" prefix="$">
            <InputNumber
              id={spendId}
              value={maxSpend}
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
          label={editBudget ? "Save Changes" : "Add Budget"}
          type="submit"
          onClick={onClick}
        />
      </form>
    </Modal>
  );
}

export default BudgetForm;
