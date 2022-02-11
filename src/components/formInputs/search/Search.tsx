/* eslint-disable no-console */
/* eslint-disable no-undef */
import React from 'react';
import { SearchIcon } from '../../icons/index';
import './_Search.scss';

type SearchProp = {
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLDivElement>) => void;
};

const Search = ({ placeholder, onChange, onKeyDown }: SearchProp): JSX.Element => {
  return (
    <div className="search">
      <input type="text" placeholder={placeholder} onChange={onChange} onKeyDown={onKeyDown} />
      <span>
        <SearchIcon />
      </span>
    </div>
  );
};

export default Search;
