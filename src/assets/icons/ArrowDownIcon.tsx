import React from "react";

const ArrowDownIcon: React.FC<{ color?: string }> = (props) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
              stroke={`${props.color ? props.color : "currentColor"}`}
              className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
  </svg>
}

export default ArrowDownIcon;