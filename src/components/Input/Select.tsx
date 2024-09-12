import type { ChangeEvent } from "react";

import type { Option } from "components/Input/selectOptions";

// CSS prefix: .select-
import "./style.css";

type SelectProps = {
  id: string;
  value: string;
  options: Option[];
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
};

function Select({ id, options, value, onChange }: SelectProps) {
  return (
    <select
      id={id}
      className="input-select ellip-text"
      onChange={onChange}
      value={value}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default Select;
