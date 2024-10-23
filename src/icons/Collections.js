import React from "react";

function Collections({ className, fill }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path
        d="M21 8.85034C21 7.82842 20.1046 7 19 7H5C3.89543 7 3 7.82842 3 8.85034M3 12.5V4.85034C3 3.82843 3.89543 3 5 3H19C20.1046 3 21 3.82843 21 4.85034V12.5"
        fill="none"
      />
      <path
        d="M19 11H5C3.89543 11 3 11.8284 3 12.8503V19.1497C3 20.1716 3.89543 21 5 21H19C20.1046 21 21 20.1716 21 19.1497V12.8503C21 11.8284 20.1046 11 19 11Z"
        fill={fill}
      />
    </svg>
  );
}

export default Collections;
