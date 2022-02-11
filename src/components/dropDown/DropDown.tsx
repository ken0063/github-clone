/* eslint-disable no-undef */
import { useApolloClient } from '@apollo/client';
import React, { useCallback, useState } from 'react';
import DownCarat from '../icons/DownCarat';
import Loader from 'react-loader-spinner';
import './_DropDown.scss';

type DDProps = {
  title: string;
  items: string;
};

function DropDown({ title, items }: DDProps): JSX.Element {
  const [loading, setLoading] = useState(false);
  const client = useApolloClient();

  const handleLogout = useCallback(async () => {
    setLoading(true);
    localStorage.clear();
    window.location.href = '/login';
    await client.resetStore();
    setLoading(false);
  }, [client]);

  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  return (
    <div className="dd-wrapper" data-testid="drop-down">
      {loading ? (
        <div className="loading" data-testid="drop-down-loader">
          <Loader type="Oval" color="#4980c4" height={80} width={80} />
        </div>
      ) : (
        <>
          <div
            tabIndex={0}
            className="dd-header"
            role="button"
            onKeyPress={toggle}
            onClick={toggle}
            data-testid="drop-down-header"
          >
            <div className="dd-header__title" data-testid="drop-down-header-title">
              <div>
                {title}
                <span className="carat" data-testid="drop-down-header-icon">
                  <DownCarat />
                </span>
              </div>
            </div>
          </div>
          {open && (
            <ul className="dd-list" data-testid="drop-down-list">
              <li>
                <button
                  onClick={handleLogout}
                  className="button"
                  data-testid="drop-down-list-button"
                >
                  <span>{items}</span>
                </button>
              </li>
            </ul>
          )}
        </>
      )}
    </div>
  );
}

export default DropDown;
