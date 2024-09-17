import { type ChangeEvent, useContext, useId } from "react";

import InputWrapper from "components/Input/InputWrapper";
import InputText from "components/Input/InputText";
import Select from "components/Input/Select";

import SearchIcon from "assets/icons/search.svg";
import CaretDownIcon from "assets/icons/caret-down.svg";
import SortIcon from "assets/icons/sort-mobile.svg";
import { sortOptions } from "components/Input/selectOptions";
import { WindowSizeContext } from "contexts/windowSizeContext";
import { BillsPageContext } from "contexts/billsPageContext";

// CSS prefix: .recfilters-
import "./style.css";

function Filters() {
  const { search, setSearch, sortOpt, setSortOpt } =
    useContext(BillsPageContext);
  const { isSmallScr } = useContext(WindowSizeContext);
  const searchId = useId();
  const sortId = useId();

  function onChangeSearch(e: ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value.toLowerCase());
  }

  function onChangeSort(e: ChangeEvent<HTMLSelectElement>) {
    setSortOpt(e.target.value);
  }

  return (
    <section className="recfilters">
      <div className="recfilters-search">
        <InputWrapper id={searchId} icon={<SearchIcon />}>
          <InputText
            id={searchId}
            placeholder="Search bills"
            value={search}
            onChange={onChangeSearch}
          />
        </InputWrapper>
      </div>

      <div className="recfilters-sort">
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
    </section>
  );
}

export default Filters;
