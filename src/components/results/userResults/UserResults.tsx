/* eslint-disable no-console */
/* eslint-disable no-undef */
import React from 'react';
import './_UserResults.scss';

const UserResults = ({ data }) => {
  return (
    <div className="result-page">
      <div className="results">
        <div className="group">
          <section className="heading">{data?.name}</section>
          <section className="text">{data?.login}</section>
        </div>

        <section className="sub-text">{data?.bio}</section>
      </div>
    </div>
  );
};

export default UserResults;
