import React, { useState, useEffect } from 'react';

import LazyLoad from 'react-lazyload';
import { connect } from 'react-redux';

// UI Components
import RepoItem from '../repoItem';
import Loader from '../common/Loader';

// Actions
import { setRepoList } from '../../actions/reposActions';
import { setFetchStatus } from '../../actions/fetchActions';

// Utils
import { isArrayEmpty } from '../../utils';

// API
import * as API from '../../Services/API';

// Constants
import * as constant from '../../constants/constants';

import './style.css';

const RepoList = ({ repoList, isFetching, setRepoList, setFetchStatus }) => {
  const [search, setSearch] = useState('');
  const [language, setLanguage] = useState('');
  const [sortBy, setSortBy] = useState('updated');
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
    setFilteredRepoList(
      repoList.filter((repo) => {
        return (
          repo.name.toLowerCase().includes(search.toLowerCase()) &&
          (language === '' ||
            language === 'All' ||
            (repo.language && repo.language.toLowerCase() === language.toLowerCase()))
        );
      }),
    );
  }, [repoList, search, language]);

  const languageSelector = () => {
    return (
      <select
        className="language-selector"
        name="langauges"
        id="languages"
        onChange={(e) => setLanguage(e.target[e.target.selectedIndex].text)}
      >
        {constant.LANGUAGES.map((language, index) => (
          <option key={index} style={{ background: constant.MAP_LANGUAGES_TO_COLOR[language] }}>
            {language}
          </option>
        ))}
      </select>
    );
  };

  return (
    <div className="RepoList">
      <input
        className="search-input"
        type="text"
        placeholder="Find a repository"
        onChange={(e) => setSearch(e.target.value)}
      />

      {languageSelector()}

      {isFetching ? (
        <Loader />
      ) : (
        !isArrayEmpty(repoList) && (
          <ul className="RepoItemList">
            {filteredRepoList.map((repo) => (
              <LazyLoad key={repo.id} placeholder={<Loader />}>
                <RepoItem key={repo.id} repo={repo} searchText={search} />
              </LazyLoad>
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
