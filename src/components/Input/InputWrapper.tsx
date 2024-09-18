import type { ReactNode } from "react";

// CSS prefix: .input-
import "./style.css";

type InputWrapProps = {
  children: ReactNode;
  id: string;
  label?: string;
  prefix?: string;
  icon?: ReactNode;
  colorTag?: string;
  helperText?: string;
  onClickIcon?: () => void;
};

function InputWrapper({
  children,
  id,
  label = "",
  prefix,
  icon,
  colorTag,
  helperText,
  onClickIcon,
}: InputWrapProps) {
  return (
    <div className="input-wrapper">
      {label && <Label id={id} label={label} />}

      <div className="input-field">
        {colorTag && <ColorTag colorTag={colorTag} />}

        {prefix && <Prefix prefix={prefix} />}

        {children}

        {icon && <Icon icon={icon} onClick={onClickIcon} />}
      </div>

      {helperText && <HelperText helperText={helperText} />}
    </div>
  );
}

function Label({ id, label }: { id: string; label: string }) {
  return (
    <label htmlFor={id} className="input-label">
      {label}
    </label>
  );
}

function ColorTag({ colorTag }: { colorTag: string }) {
  return (
    <span
      style={{ backgroundColor: colorTag }}
      className="input-color-tag"
    ></span>
  );
}

function Prefix({ prefix }: { prefix: string }) {
  return <span className="input-prefix">{prefix}</span>;
}

function Icon({ icon, onClick }: { icon: ReactNode; onClick?: () => void }) {
  return (
    <span className="input-icon" data-active={!!onClick} onClick={onClick}>
      {icon}
    </span>
  );
}

function HelperText({ helperText }: { helperText: string }) {
  return <p className="input-helper-text">{helperText}</p>;
}

export default InputWrapper;
