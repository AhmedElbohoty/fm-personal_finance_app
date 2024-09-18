import type { ChangeEvent } from "react";

// CSS prefix: .input-
import "./style.css";

type InputTextProps = {
  id: string;
  placeholder?: string;
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  maxLength?: number;
  minLength?: number;
  type?: HTMLInputElement["type"];
};

function InputText({
  id,
  placeholder,
  value,
  onChange,
  maxLength,
  minLength,
  type = "text",
}: InputTextProps) {
  return (
    <input
      id={id}
      className="input-input ellip-text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      maxLength={maxLength}
      minLength={minLength}
      type={type}
    />
  );
}

export default InputText;
