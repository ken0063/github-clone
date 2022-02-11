/* eslint-disable no-undef */
/* eslint-disable no-console */
import { createContext, useContext } from 'react';
import { Props } from '../App';

export const SearchDataContext = createContext({});

export const useSearchData = () => {
  const data = useContext<Props>(SearchDataContext);
  return data;
};
