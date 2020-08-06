import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import RepoItem from '../RepoItem';
import Loader from '../common/Loader';
import { isArrayEmpty } from '../../utils';
import * as constant from '../../constants/constants';

import { setRepoList } from '../../actions/reposActions';
import { setFetchStatus } from '../../actions/fetchActions';

import * as API from '../../Services/API';

import './style.css';

const RepoList = ({ repoList, isFetching, setRepoList, setFetchStatus }) => {
  const [search, setSearch] = useState('');
  const [filteredRepoList, setFilteredRepoList] = useState([]);

  const getRepoList = async () => {
    setFetchStatus(true);
    const response = await API.fetchUrl(constant.API_REPO_URL).then((response) => response);

    return response;
  };

  useEffect(() => {
    if (isArrayEmpty(repoList)) {
      getRepoList().then((response) => {
        if (response) {
          setRepoList(response.data);
          setFetchStatus(false);
        }
      });
    }
  }, [repoList, setRepoList]);

  useEffect(() => {
    setFilteredRepoList(repoList.filter((repo) => repo.name.toLowerCase().includes(search.toLowerCase())));
  }, [repoList, search]);

  return (
    <div className="RepoList">
      <input
        className="search-input"
        type="text"
        placeholder="Find a repository"
        onChange={(e) => setSearch(e.target.value)}
      />
      {isFetching ? (
        <Loader />
      ) : (
        !isArrayEmpty(repoList) && (
          <ul className="RepoItemList">
            {filteredRepoList.map((repo) => (
              <RepoItem key={repo.id} repo={repo} />
            ))}
          </ul>
        )
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  repoList: state ? state.repo.repoList : [],
  isFetching: state.fetch.isFetching,
});

const mapDispatchToProps = (dispatch) => ({
  setRepoList: (value) => dispatch(setRepoList(value)),
  setFetchStatus: (flag) => dispatch(setFetchStatus(flag)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RepoList);
