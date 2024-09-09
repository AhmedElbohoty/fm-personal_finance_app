import type { ChangeEvent } from "react";

// CSS prefix: .input-
import "./style.css";

type InputTextProps = {
  id: string;
  placeholder?: string;
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

function InputText({ id, placeholder, value, onChange }: InputTextProps) {
  return (
    <input
      id={id}
      className="input-input"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

export default InputText;
