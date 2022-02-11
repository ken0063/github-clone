/* eslint-disable no-undef */
import React from 'react';

type SearchProps = {
  props?: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>;
};

const SearchIcon = ({ props }: SearchProps) => {
  return (
    <svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14.294 12.003l3.215 3.215c.655.655.655 1.637 0 2.291-.327.327-.818.491-1.145.491-.328 0-.819-.164-1.146-.49l-3.215-3.216a7.773 7.773 0 112.29-2.29zm-6.521.76a4.99 4.99 0 100-9.981 4.99 4.99 0 000 9.982z"
        fill="#5C5C5C"
      />
    </svg>
  );
};

export default SearchIcon;
