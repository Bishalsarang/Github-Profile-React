import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import RepoItem from '../RepoItem';
import Loader from '../common/Loader';
import { isArrayEmpty } from '../../utils';
import { SET_REPO_LIST, SET_FETCH_STATUS } from '../../store';

import * as API from '../../Services/API';
import * as constant from '../../constants/constants';

const RepoList = ({ repoList, isFetching, setRepoList, setFetchStatus }) => {
  useEffect(() => {
    if (isArrayEmpty(repoList)) {
      getRepoList().then((response) => {
        if (response) {
          setRepoList(response.data);
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
    repoList: state ? state.repoList : [],
    isFetching: state.isFetching
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setRepoList: (value) =>
      dispatch({
        type: SET_REPO_LIST,
        payload: { repoList: value }
      }),

    setFetchStatus: (flag) =>
      dispatch({
        type: SET_FETCH_STATUS,
        payload: { flag: flag }
      })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RepoList);
