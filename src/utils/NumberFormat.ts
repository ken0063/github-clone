/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';

export const numberFormat = (number) => {
  const formatter = new Intl.NumberFormat('en', {
    notation: 'compact',
  });

  return formatter.format(number);
};

export const usePersistedState = (key, defaultValue) => {
  const [state, setState] = React.useState(
    () => JSON.parse(localStorage.getItem(key)) || defaultValue,
  );
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  return [state, setState];
};
