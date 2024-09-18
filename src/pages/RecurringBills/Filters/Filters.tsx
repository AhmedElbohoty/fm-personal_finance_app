import { type ChangeEvent, useContext, useId } from "react";

import InputWrapper from "components/Input/InputWrapper";
import InputText from "components/Input/InputText";
import Select from "components/Input/Select";
import SvgIcon from "components/SvgIcon/SvgIcon";
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
        <InputWrapper id={searchId} icon={<SvgIcon path="search" />}>
          <InputText
            id={searchId}
            placeholder="Search bills"
            value={search}
            onChange={onChangeSearch}
          />
        </InputWrapper>
      </div>

      <div className="recfilters-sort">
        {isSmallScr && <SvgIcon path="sort-mobile" />}
        {!isSmallScr && (
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
        )}
      </div>
    </section>
  );
}

export default Filters;
