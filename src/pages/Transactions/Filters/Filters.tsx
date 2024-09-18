import { type ChangeEvent, useContext, useId, useState } from "react";

import InputWrapper from "components/Input/InputWrapper";
import InputText from "components/Input/InputText";
import Select from "components/Input/Select";
import SvgIcon from "components/SvgIcon/SvgIcon";

import { sortOptions } from "components/Input/selectOptions";
import { WindowSizeContext } from "contexts/windowSizeContext";
import { useTransactionsPageContext } from "contexts/transactionsPageContext";

// CSS prefix: .tranfilters-
import "./style.css";

function Filters() {
  const {
    filter,
    setFilter,
    categoryOpt,
    setCategOpt,
    sortOpt,
    setSortOpt,
    categoriesOpts,
  } = useTransactionsPageContext();
  const { isSmallScr } = useContext(WindowSizeContext);
  const searchId = useId();
  const sortId = useId();
  const [showFilter, setShowFilter] = useState(false);
  const [showSort, setShowSort] = useState(false);

  function onChangeSearch(e: ChangeEvent<HTMLInputElement>) {
    setFilter(e.target.value.toLowerCase());
  }

  function onChangeSort(e: ChangeEvent<HTMLSelectElement>) {
    setSortOpt(e.target.value);
  }

  function onChangeCategory(e: ChangeEvent<HTMLSelectElement>) {
    setCategOpt(e.target.value);
  }

  function onClickFilterIcon() {
    setShowFilter(!showFilter);
    setShowSort(false);
  }

  function onClickSortIcon() {
    setShowSort(!showSort);
    setShowFilter(false);
  }

  return (
    <section className="tranfilters">
      <div className="tranfilters-search">
        <InputWrapper id={searchId} icon={<SvgIcon path="search" />}>
          <InputText
            id={searchId}
            placeholder="Search transaction"
            value={filter}
            onChange={onChangeSearch}
          />
        </InputWrapper>
      </div>

      {isSmallScr && (
        <div className="tranfilters-icons">
          <span className="tranfilters-icons-icon" onClick={onClickSortIcon}>
            <SvgIcon path="sort-mobile" />
          </span>
          <span className="tranfilters-icons-icon" onClick={onClickFilterIcon}>
            <SvgIcon path="filter-mobile" />
          </span>
        </div>
      )}

      {(!isSmallScr || showSort) && (
        <div className="tranfilters-sort">
          <InputWrapper
            id={sortId}
            label="Sort by"
            icon={<SvgIcon path="caret-down" />}
          >
            <Select
              id={sortId}
              options={sortOptions}
              value={sortOpt}
              onChange={onChangeSort}
            />
          </InputWrapper>
        </div>
      )}

      {(!isSmallScr || showFilter) && (
        <div className="tranfilters-category">
          <InputWrapper
            id={sortId}
            label="Category"
            icon={<SvgIcon path="caret-down" />}
          >
            <Select
              id={sortId}
              options={categoriesOpts}
              value={categoryOpt}
              onChange={onChangeCategory}
            />
          </InputWrapper>
        </div>
      )}
    </section>
  );
}

export default Filters;
