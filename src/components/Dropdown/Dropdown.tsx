import { Fragment, type MouseEventHandler } from "react";

import Separator from "components/Separator/Separator";

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

          <Separator />
        </Fragment>
      ))}
    </ul>
  );
}

export default Dropdown;
