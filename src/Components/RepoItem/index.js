import React from 'react';
import PropTypes from 'prop-types';

import { GoRepoForked, GoStar } from 'react-icons/go';

import { getDayMonth } from '../../utils/index';
import { MAP_LANGUAGES_TO_COLOR } from '../../constants/constants';

import './style.css';

const RepoItem = ({ repo }) => {
  const {
    name,
    language,
    description,
    html_url: htmlUrl,
    created_at: createdAt,
    updated_at: updatedAt,
    forks_count: forksCount,
    stargazers_count: starGazersCount,
  } = repo;

  return (
    <div className="RepoItem">
      <a href={htmlUrl} title={name} target="_blank" rel="noopener noreferrer">
        <h3 className="title">{name}</h3>
      </a>
      <p className="desc">{description}</p>
      <div className="meta">
        <div className="language">
          <span className="indicator" style={{ background: MAP_LANGUAGES_TO_COLOR[language] }}></span>
          <span>{language}</span>
        </div>
        <span className="forks-count">
          <GoRepoForked />
          {forksCount}
        </span>
        <span className="stargazers_count">
          <GoStar />
          {starGazersCount}
        </span>
      </div>
      <div className="dates">
        <span className="created-at">Created at: {getDayMonth(createdAt)}</span>
        <span className="updated-at">Updated at: {getDayMonth(updatedAt)}</span>
      </div>
    </div>
  );
};

export default RepoItem;
