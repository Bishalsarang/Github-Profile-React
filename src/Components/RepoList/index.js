import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import RepoItem from '../RepoItem';
import Loader from '../common/Loader';
import { isArrayEmpty } from '../../utils';
// import { SET_REPO_LIST, SET_FETCH_STATUS } from '../../store';

import { setRepoList } from '../../actions/reposActions';
import { setFetchStatus } from '../../actions/fetchActions';

import * as API from '../../Services/API';
import * as constant from '../../constants/constants';

const RepoList = ({ repoList, isFetching, setRepoList, setFetchStatus }) => {
  useEffect(() => {
    if (isArrayEmpty(repoList)) {
      getRepoList().then((response) => {
        if (response) {
          setRepoList(response.data);
          setFetchStatus(false);
        }
      });
    } else {
      console.log('Repository List already fetched');
    }
  }, [setRepoList]);

  const getRepoList = async () => {
    setFetchStatus(true);
    const response = await API.fetchUrl(constant.API_REPO_URL).then((response) => response);
    return response;
  };

  return (
    <div className="RepoList">
      <h2 className="header">Repositories</h2>
      {isFetching ? (
        <Loader />
      ) : (
        !isArrayEmpty(repoList) && (
          <ul className="RepoItemList">
            {repoList.map((repo) => (
              <RepoItem key={repo.id} repo={repo} />
            ))}
          </ul>
        )
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    repoList: state ? state.repo.repoList : [],
    isFetching: state.fetch.isFetching
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setRepoList: (value) => dispatch(setRepoList(value)),
    setFetchStatus: (flag) => dispatch(setFetchStatus(flag))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RepoList);
