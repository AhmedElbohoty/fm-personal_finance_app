import { useDispatch } from "react-redux";
import {
  useId,
  useState,
  type ChangeEvent,
  useContext,
  useMemo,
  type FormEvent,
} from "react";
import { v4 as uuidv4 } from "uuid";

import InputWrapper from "components/Input/InputWrapper";

import InputNumber from "components/Input/InputNumber";
import Select from "components/Input/Select";
import PrimaryBtn from "components/Buttons/Primary/Primary";
import Modal from "components/Modal/Modal";
import ModalHeader from "components/Modal/ModalHeader";
import ModalInfo from "components/Modal/ModalInfo";
import { themesOptions } from "components/Input/selectOptions";
import SvgIcon from "components/SvgIcon/SvgIcon";

import { BudgetsPageContext } from "contexts/budgetsPageContext";
import { useAppSelector } from "store/store";
import { selectCategories } from "store/appSlice/selectors";
import { addBudget, updateBudget } from "store/appSlice/slice";

// CSS prefix: .budgetform-
import "./style.css";

function BudgetForm() {
  const dispatch = useDispatch();
  const categoryId = useId();
  const spendId = useId();
  const themeId = useId();
  const { setIsBudgetsFormOpened, setEditBudget, editBudget } =
    useContext(BudgetsPageContext);

  const [maxSpend, setMaxSpend] = useState(editBudget ? editBudget.maximum : 0);
  const [theme, setTheme] = useState(editBudget ? editBudget.theme : "#277c78");
  const categories = useAppSelector(selectCategories);
  const options = useMemo(() => {
    return categories.map((category) => ({
      value: category.toLowerCase(),
      label: category,
    }));
  }, [categories]);

  const [category, setCategory] = useState(
    editBudget ? editBudget.category : options[0].value
  );

  let isDisabled = !category || !maxSpend;
  if (editBudget) {
    isDisabled =
      isDisabled ||
      (editBudget.category === category &&
        editBudget.maximum === maxSpend &&
        editBudget.theme === theme);
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (isDisabled) return;

    if (editBudget) {
      dispatch(
        updateBudget({ ...editBudget, category, maximum: maxSpend, theme })
      );
    } else {
      dispatch(addBudget({ id: uuidv4(), category, maximum: maxSpend, theme }));
    }
    closeModal();
  }

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

      <form className="budgetform-form" onSubmit={onSubmit}>
        <div className="budgetform-inputs">
          <InputWrapper
            id={categoryId}
            label="Budget Category"
            icon={<SvgIcon path="caret-down" />}
          >
            <Select
              id={categoryId}
              options={options}
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
          label={editBudget ? "Save Changes" : "Add Budget"}
          type="submit"
          isDisabled={isDisabled}
        />
      </form>
    </Modal>
  );
}

export default BudgetForm;
