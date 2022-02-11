/* eslint-disable no-undef */
import React from 'react';

type RightCaratProps = {
  props?: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>;
};

const RightCarat = ({ props }: RightCaratProps) => {
  return (
    <svg
      width={8}
      height={14}
      viewBox="0 0 8 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1 1l6 6-6 6"
        stroke="#B0B7C3"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default RightCarat;
