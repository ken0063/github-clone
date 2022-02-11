import React from 'react';
import { Link } from 'react-router-dom';
import './_Pagination.scss';
import LeftCarat from '../icons/LeftCarat';
import { RightCarat } from '../icons';

const Pagination = () => {
  return (
    <div className="pages">
      <ul>
        <Link to="#" className="arrows">
          <LeftCarat />
        </Link>

        <li>
          <Link to="#" className="buttons">
            1
          </Link>
        </li>
        <li>
          <Link to="#" className="buttons">
            2
          </Link>
        </li>

        <Link to="#" className="arrows">
          <RightCarat />
        </Link>
      </ul>
    </div>
  );
};

export default Pagination;
