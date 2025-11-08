import React from "react";

type Props = {
  size?: number;
  className?: string;
};

const Logo: React.FC<Props> = ({ size = 40, className = "" }) => (
  <img
    src="/varsha-logo.png"
    alt="Varsha Travels Logo"
    width={size}
    height={size}
    className={`rounded-md object-contain ${className}`}
    loading="eager"
  />
);

export default Logo;