/* eslint-disable no-undef */
import React from 'react';

type DownCaratProps = {
  props?: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>;
};

const DownCarat = ({ props }: DownCaratProps) => {
  return (
    <svg
      width={12}
      height={7}
      viewBox="0 0 12 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.716.3a1 1 0 00-1.42 0l-4.29 4.27-4.3-4.28a1 1 0 10-1.41 1.42l5 5a1 1 0 00.71.28 1 1 0 00.7-.29l5-5a1 1 0 00.01-1.4z"
        fill="#000"
      />
    </svg>
  );
};

export default DownCarat;
