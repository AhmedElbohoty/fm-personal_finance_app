import { type ChangeEvent, useContext, useId, useMemo } from "react";

import InputWrapper from "components/Input/InputWrapper";
import InputText from "components/Input/InputText";
import Select from "components/Input/Select";

import SearchIcon from "assets/icons/search.svg";
import CaretDownIcon from "assets/icons/caret-down.svg";
import { sortOptions } from "components/Input/selectOptions";
import { WindowSizeContext } from "contexts/windowSizeContext";

import FilterIcon from "assets/icons/filter-mobile.svg";
import SortIcon from "assets/icons/sort-mobile.svg";
import { useTransactionsPageContext } from "contexts/transactionsPageContext";
import { selectCategories } from "store/appSlice/selectors";
import { useAppSelector } from "store/store";

// CSS prefix: .tranfilters-
import "./style.css";

function Filters() {
  const { filter, setFilter, categoryOpt, setCategOpt, sortOpt, setSortOpt } =
    useTransactionsPageContext();
  const { isSmallScr } = useContext(WindowSizeContext);
  const searchId = useId();
  const sortId = useId();
  const categories = useAppSelector(selectCategories);
  const options = useMemo(() => {
    return categories.map((category) => ({
      value: category,
      label: category,
    }));
  }, [categories]);

  function onChangeSearch(e: ChangeEvent<HTMLInputElement>) {
    setFilter(e.target.value.toLowerCase());
  }

  function onChangeSort(e: ChangeEvent<HTMLSelectElement>) {
    setSortOpt(e.target.value);
  }

  function onChangeCategory(e: ChangeEvent<HTMLSelectElement>) {
    setCategOpt(e.target.value);
  }

  return (
    <section className="tranfilters">
      <div className="tranfilters-search">
        <InputWrapper id={searchId} icon={<SearchIcon />}>
          <InputText
            id={searchId}
            placeholder="Search transaction"
            value={filter}
            onChange={onChangeSearch}
          />
        </InputWrapper>
      </div>

      <div className="tranfilters-sort">
        {isSmallScr && <SortIcon />}
        {!isSmallScr && (
          <InputWrapper id={sortId} label="Sort by" icon={<CaretDownIcon />}>
            <Select
              id={sortId}
              options={sortOptions}
              value={sortOpt}
              onChange={onChangeSort}
            />
          </InputWrapper>
        )}
      </div>

      <div className="tranfilters-category">
        {isSmallScr && <FilterIcon />}
        {!isSmallScr && (
          <InputWrapper id={sortId} label="Category" icon={<CaretDownIcon />}>
            <Select
              id={sortId}
              options={options}
              value={categoryOpt}
              onChange={onChangeCategory}
            />
          </InputWrapper>
        )}
      </div>
    </section>
  );
}

export default Filters;
