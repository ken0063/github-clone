/* eslint-disable no-console */
/* eslint-disable no-undef */
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSearchData } from '../../provider/UserProvider';
import { numberFormat } from '../../utils/NumberFormat';
import './_SideBar.scss';

const SideBar = () => {
  const { repoData, userData } = useSearchData();
  const [count, setCount] = useState(null);

  const userCount = userData?.search?.userCount;
  const repoCount = repoData?.search?.repositoryCount;

  useEffect(() => {
    const data = localStorage.getItem('side-bar');
    if (data) {
      setCount(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    if (repoData && userData) {
      localStorage.setItem('side-bar', JSON.stringify({ repoCount, userCount }));
    }
  }, [repoData, userData]);

  return (
    <div className="sidebar">
      <ul>
        <Link to="/results/repos" className="items">
          <li>
            <span>Repositories</span>
            <span className="pill">{numberFormat(count?.repoCount)}</span>
          </li>
        </Link>
        <Link to="/results/users" className="items">
          <li>
            <span>Users</span>
            <span className="pill">{numberFormat(count?.userCount)}</span>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default SideBar;
