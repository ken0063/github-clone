/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable no-console */
/* eslint-disable no-undef */
import React from 'react';
import Logo from '../icons/Logo';
import DropDown from '../dropDown/DropDown';
import avatar from '../../images/avatar.png';
import { Link } from 'react-router-dom';
import { Search } from '../formInputs';
import './_Header.scss';
import { useSearchData } from '../../provider/UserProvider';
import { useEffect } from 'react';

type HeaderProp = {
  hasProps?: boolean;
};

const Header = ({ hasProps }: HeaderProp): JSX.Element => {
  const { handleSubmit, handleOnChange, viewerData, viewerRefetch } = useSearchData();

  useEffect(() => {
    viewerRefetch();
  }, [viewerRefetch]);

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <>
      <div className={hasProps ? 'header' : 'no-logo'}>
        {hasProps && (
          <>
            <Link to="/home" className="logo-wrapper">
              <Logo />
            </Link>

            <div className="search">
              <Search
                placeholder="Search"
                onChange={(e) => handleOnChange(e)}
                onKeyDown={handleSearch}
              />
            </div>
          </>
        )}

        <div className="header-right">
          <img src={viewerData?.viewer?.avatarUrl} width="50px" height="50px" alt="User-avatar" />
          <DropDown title={viewerData?.viewer?.login} items="Logout" />
        </div>
      </div>
    </>
  );
};

export default Header;
