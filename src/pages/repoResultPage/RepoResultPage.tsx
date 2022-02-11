/* eslint-disable array-callback-return */
/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/* eslint-disable arrow-body-style */
import React, { useEffect, useState } from 'react';
import Pagination from '../../components/pagination/Pagination';
import RepoResults from '../../components/results/repoResults/RepoResults';
import SideBar from '../../components/sideBar/SideBar';
import { useSearchData } from '../../provider/UserProvider';
import './_RepoResultPage.scss';
import Loader from 'react-loader-spinner';

type RepoProp = {
  repo: {};
  id: string;
};

const RepoResultPage = (): JSX.Element => {
  const { repoLoading, repoData } = useSearchData();
  const [repo, setRepo] = useState(null);

  const repoInfo = repoData?.search?.nodes;
  const repoCount = repoData?.search?.repositoryCount;

  useEffect(() => {
    const data = localStorage.getItem('repo-page');
    if (data) {
      setRepo(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    if (repoData) {
      window.location.reload();
      localStorage.setItem('repo-page', JSON.stringify({ repoInfo, repoCount }));
    }
  }, [repoData]);

  return (
    <div className="results-page">
      {repoLoading ? (
        <div className="loading">
          <Loader type="Oval" color="#4980c4" height={80} width={80} />
        </div>
      ) : (
        <>
          <div className="result-wrapper">
            <SideBar />
            <div className="result-items">
              <div className="result-heading">{repo?.repoCount} repository results</div>
              {repo?.repoInfo?.map((repo: RepoProp) => (
                <RepoResults data={repo} key={repo.id} />
              ))}
            </div>
          </div>
          <Pagination />
        </>
      )}
    </div>
  );
};

export default RepoResultPage;
