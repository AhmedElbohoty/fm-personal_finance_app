import { Fragment, type MouseEventHandler } from "react";

// CSS prefix: .dropdown-
import "./style.css";

type Option = {
  label: string;
  isDanger?: boolean;
  onClick: MouseEventHandler<HTMLLIElement>;
};

type DropdownProps = {
  options: Option[];
};

// TODO: handle positioninig using float API
function Dropdown({ options }: DropdownProps) {
  return (
    <ul className="dropdown">
      {options.map((option) => (
        <Fragment key={option.label}>
          <li
            className="dropdown-li"
            data-danger={option.isDanger}
            onClick={option.onClick}
          >
            {option.label}
          </li>

          <span className="dropdown-sep"></span>
        </Fragment>
      ))}
    </ul>
  );
}

export default Dropdown;
