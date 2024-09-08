import { useState, type SyntheticEvent } from "react";

import CircleIcon from "assets/icons/circle.svg";

// TODO: Lazy load all images

// CSS prefix: .useravatar-
import "./style.css";

type UserAvatarProps = {
  src: string;
  alt: string;
  name: string;
};

function UserAvatar({ src, alt, name }: UserAvatarProps) {
  const [isError, setIsError] = useState<SyntheticEvent<
    HTMLImageElement,
    Event
  > | null>(null);

  if (!src || isError) {
    return (
      <div className="useravatar useravatar-circ">
        <CircleIcon />
        <span className="useravatar-circ-text">{name[0]}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="useravatar useravatar-img"
      onError={(e) => setIsError(e)}
    />
  );
}
export default UserAvatar;
