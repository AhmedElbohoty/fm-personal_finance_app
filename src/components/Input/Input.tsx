// CSS prefix: .input-
import "./style.css";

type Option = {
  value: string;
  label: string;
};

type InputProps = {
  id: string;
  label: string;
  type?: "text" | "search" | "select";
  placeholder?: string;
  prefix?: string;
  icon?: React.ReactNode;
  colorTag?: React.ReactNode;
  helperText?: string;
  onChange?: (value: string) => void;
  options?: Option[];
};

function Input({
  id,
  label,
  type = "text",
  placeholder = "Placeholder",
  prefix,
  icon,
  colorTag,
  helperText,
  onChange,
  options = [],
}: InputProps) {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    onChange?.(e.target.value);
  };

  return (
    <div className="input-wrapper">
      <label htmlFor={id} className="input-label">
        {label}
      </label>
      <div className="input-field">
        {colorTag && <span className="input-color-tag">{colorTag}</span>}
        {prefix && <span className="input-prefix">{prefix}</span>}
        {type === "select" ? (
          <select id={id} className="input-select" onChange={handleChange}>
            <option value="">{placeholder}</option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        ) : (
          <input
            id={id}
            type={type}
            className="input-input"
            placeholder={placeholder}
            onChange={handleChange}
          />
        )}
        {icon && <span className="input-icon">{icon}</span>}
      </div>
      {helperText && (
        <p className="input-helper-text" id={`${id}-helper`}>
          {helperText}
        </p>
      )}
    </div>
  );
}

export default Input;
