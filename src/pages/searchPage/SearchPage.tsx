/* eslint-disable prettier/prettier */
/* eslint-disable no-console */
/* eslint-disable no-undef */
import React from 'react';
import Loader from 'react-loader-spinner';
import { ToastContainer } from 'react-toastify';
import { Search, Button } from '../../components/formInputs';
import { Logo } from '../../components/icons';
import { useSearchData } from '../../provider/UserProvider';

import './_SearchPage.scss';

const SearchPage = (): JSX.Element => {
  const { repoLoading, handleSubmit, handleOnChange } = useSearchData();

  return (
    <div className="search-page">
      <ToastContainer />
      {repoLoading ? (
        <div className="loading">
          <Loader type="Oval" color="#4980c4" height={80} width={80} />
        </div>
      ) : (
        <>
          <div className="logo">{<Logo />}</div>
          <form onSubmit={handleSubmit}>
            <Search onChange={(e) => handleOnChange(e)} />
            <Button type="submit">Search Github</Button>
          </form>
        </>
      )}
    </div>
  );
};

export default SearchPage;
