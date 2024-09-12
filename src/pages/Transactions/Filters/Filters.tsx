import { type ChangeEvent, useContext, useId, useState } from "react";

import InputWrapper from "components/Input/InputWrapper";
import InputText from "components/Input/InputText";
import Select from "components/Input/Select";

import SearchIcon from "assets/icons/search.svg";
import CaretDownIcon from "assets/icons/caret-down.svg";
import { Option } from "components/Input/selectOptions";
import { transactions } from "utils/data.json";
import { WindowSizeContext } from "contexts/windowSizeContext";

import FilterIcon from "assets/icons/filter-mobile.svg";
import SortIcon from "assets/icons/sort-mobile.svg";

// CSS prefix: .tranfilters-
import "./style.css";

const sortOptions: Option[] = [
  { label: "Latest (most recent)", value: "latest" },
  { label: "Oldest", value: "oldest" },
  { label: "A to Z", value: "a-z" },
  { label: "Z to A", value: "z-a" },
  { label: "Highest (transaction amount)", value: "highest" },
  { label: "Lowest", value: "lowest" },
];

const categories = new Set(transactions.map(({ category }) => category));
const categoriesOpts: Option[] = [{ label: "All Transactions", value: "all" }];
categories.forEach((category) =>
  categoriesOpts.push({ label: category, value: category })
);

function Filters() {
  const { isSmallScr } = useContext(WindowSizeContext);
  const searchId = useId();
  const sortId = useId();
  const [search, setSearch] = useState("");
  const [sortOpt, setSortOpt] = useState(sortOptions[0].value);
  const [categoryOpt, setCategOpt] = useState(categoriesOpts[0].value);

  function onChangeSearch(e: ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
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
            value={search}
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
              options={categoriesOpts}
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
