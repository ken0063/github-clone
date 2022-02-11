/* eslint-disable no-console */
/* eslint-disable no-undef */
import React, { useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import ProtectedAuth from './auth/ProtectedAuth';
import Header from './components/header/Header';
import LoginPage from './pages/loginPage/LoginPage';
import PageNotFound from './pages/pageNotFound/PageNotFound';
import RepoResult from './pages/repoResultPage/RepoResultPage';
import UserResult from './pages/userResultPage /UserResultPage';
import SearchPage from './pages/searchPage/SearchPage';
import 'react-toastify/dist/ReactToastify.css';
import './_App.scss';
import { SearchRepo, SearchUser, Viewer } from './provider/queries';
import { ApolloError, ApolloQueryResult, OperationVariables, useLazyQuery } from '@apollo/client';
import { toast, ToastContainer } from 'react-toastify';
import { SearchDataContext } from './provider/UserProvider';
import { useQuery } from '@apollo/client';

export type Props = {
  error?: ApolloError;
  repoData?: {
    search?: {
      repositoryCount?: string;
      nodes?: [
        {
          id: string;
        },
      ];
    };
  };
  repoLoading?: boolean;
  userData?: {
    search?: {
      userCount?: string;
      nodes?: [{ id: string; name: string; email: string; location: string }];
    };
  };
  viewerData?: { viewer: { login?: string; name?: string; avatarUrl?: string } };
  userLoading?: boolean;
  searchInput?: string | null;
  handleSubmit?: () => void;
  handleOnChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setSearchInput?: React.Dispatch<React.SetStateAction<string>>;
  viewerRefetch?: (variables?: Partial<OperationVariables>) => Promise<ApolloQueryResult<any>>;
  userRefetch?: (variables?: Partial<OperationVariables>) => Promise<ApolloQueryResult<any>>;
  repoRefetch?: (variables?: Partial<OperationVariables>) => Promise<ApolloQueryResult<any>>;
};

function App() {
  const history = useHistory();
  const [searchInput, setSearchInput] = useState<string | null>(null);

  const [searchRepo, { loading: repoLoading, data: repoData, refetch: repoRefetch }] =
    useLazyQuery<Props>(SearchRepo, {
      onCompleted(data) {
        if (data) {
          history.push('/results/repos');
        } else {
          history.push('/home');
        }
      },
      onError(error) {
        if (error.message) {
          console.log(error.message);
        }
      },
      fetchPolicy: 'cache-and-network',
    });

  const [searchUser, { loading: userLoading, data: userData, refetch: userRefetch }] =
    useLazyQuery<Props>(SearchUser, {
      onCompleted(data) {
        if (data) {
          history.push('/results/users');
        } else {
          history.push('/home');
        }
      },
      onError(error) {
        if (error.message) {
          console.log(error.message);
        }
      },
      fetchPolicy: 'cache-and-network',
    });

  const {
    loading: viewerLoading,
    data: viewerData,
    refetch: viewerRefetch,
  } = useQuery<Props>(Viewer, { fetchPolicy: 'cache-and-network' });

  const handleSubmit = () => {
    if (!searchInput || searchInput === '' || searchInput == null) {
      toast.info('Please input a value');
    }

    searchRepo({
      variables: {
        query: searchInput,
        first: 10,
        type: 'REPOSITORY',
      },
    });
    searchUser({
      variables: {
        query: searchInput,
        first: 10,
        type: 'USER',
      },
    });
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { value } = e.target;
    setSearchInput(value);
  };
  // const logo =
  //   history.location.pathname === '/results/repos' ||
  //   history.location.pathname === '/results/users';

  return (
    <>
      <div className="App">
        <ToastContainer />
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <ProtectedAuth>
            <Route
              path={['/home', '/results/repos', '/results/users']}
              render={() => (
                <>
                  <SearchDataContext.Provider
                    value={{
                      repoData,
                      userData,
                      handleSubmit,
                      setSearchInput,
                      repoLoading,
                      userLoading,
                      handleOnChange,
                      viewerLoading,
                      viewerData,
                      viewerRefetch,
                      userRefetch,
                      repoRefetch,
                    }}
                  >
                    <Header hasProps={true} />

                    <Route exact path="/home" component={SearchPage} />
                    <Route exact path="/results/repos" component={RepoResult} />
                    <Route exact path="/results/users" component={UserResult} />
                  </SearchDataContext.Provider>
                </>
              )}
            />
          </ProtectedAuth>
          <Route exact path="*" component={PageNotFound} />
        </Switch>
      </div>
    </>
  );
}

export default App;
