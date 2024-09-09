import type { ChangeEvent } from "react";

// CSS prefix: .select-
import "./style.css";

type SelectProps = {
  id: string;
  value: string;
  options: [];
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
};

function Select({ id, options, value, onChange }: SelectProps) {
  return (
    <select id={id} className="input-select" onChange={onChange} value={value}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default Select;
