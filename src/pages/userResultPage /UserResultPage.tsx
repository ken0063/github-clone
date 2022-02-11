/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
/* eslint-disable arrow-body-style */
import React, { useEffect, useState } from 'react';
import Pagination from '../../components/pagination/Pagination';
import UserResults from '../../components/results/userResults/UserResults';
import SideBar from '../../components/sideBar/SideBar';
import { useSearchData } from '../../provider/UserProvider';
import './_UserResultPage.scss';
import Loader from 'react-loader-spinner';

const UserResultPage = () => {
  const { userLoading, userData } = useSearchData();
  const [user, setUser] = useState(null);

  const userInfo = userData?.search?.nodes;
  const userCount = userData?.search?.userCount;

  useEffect(() => {
    const uData = localStorage.getItem('user');
    if (uData) {
      setUser(JSON.parse(uData));
    }
  }, []);

  useEffect(() => {
    if (userData) {
      localStorage.setItem('user', JSON.stringify({ userInfo, userCount }));
    }
  }, [userData]);

  return (
    <div className="results-page">
      {userLoading ? (
        <div className="loading">
          <Loader type="Oval" color="#4980c4" height={80} width={80} />
        </div>
      ) : (
        <>
          <div className="result-wrapper">
            <SideBar />
            <div className="result-items">
              <div className="result-heading">{user?.userCount} user results</div>
              {user?.userInfo?.map((user) =>
                user?.name ? <UserResults key={user?.id} data={user} /> : '',
              )}
            </div>
          </div>
          <Pagination />
        </>
      )}
    </div>
  );
};

export default UserResultPage;
