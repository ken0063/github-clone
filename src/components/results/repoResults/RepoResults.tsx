/* eslint-disable no-console */
/* eslint-disable no-undef */
import React from 'react';
import { numberFormat } from '../../../utils/NumberFormat';
import moment from 'moment';
import './_RepoResults.scss';

const RepoResults = ({ data }) => {
  return (
    <div className="result-page">
      <div className="results">
        <section className="heading">{data?.nameWithOwner}</section>
        <section className="text">{data?.description}</section>
        <section className="sub-text">
          {`${numberFormat(data?.stargazerCount)} Stars | ${data?.languages?.nodes[0]?.name} | ${
            data?.licenseInfo
              ? `${data?.licenseInfo?.name} | Updated ${moment(
                  data?.updatedAt,
                  'YYYYMMDD',
                ).fromNow()}`
              : `Updated ${moment(data?.updatedAt, 'YYYYMMDD').fromNow()}`
          } `}
        </section>
      </div>
    </div>
  );
};

export default RepoResults;
