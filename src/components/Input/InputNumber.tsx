import type { ChangeEvent } from "react";

// CSS prefix: .input-
import "./style.css";

type InputNumberProps = {
  id: string;
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  min?: number;
  max?: number;
  step?: number;
};

function InputNumber({
  id,
  value,
  onChange,
  max,
  min = 0,
  step = 1,
}: InputNumberProps) {
  return (
    <input
      id={id}
      type="number"
      className="input-input"
      value={value}
      onChange={onChange}
      min={min}
      max={max}
      step={step}
    />
  );
}

export default InputNumber;
