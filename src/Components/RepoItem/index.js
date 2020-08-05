import React from 'react';
import { GoRepoForked, GoStar } from 'react-icons/go';

import { getDayMonth } from '../../utils/index';
import { MAP_LANGAUGES_TO_COLOR } from '../../constants/constants';

import './style.css';

const RepoItem = (props) => {
  const { name, html_url, language, created_at, updated_at, description, forks_count, stargazers_count } = props.repo;

  return (
    <div className="RepoItem">
      <a href={html_url} title={name}>
        <h3 className="title">{name}</h3>
      </a>
      <p className="desc">{description}</p>
      <div className="meta">
        <div className="language">
          <span className="indicator" style={{ background: MAP_LANGAUGES_TO_COLOR[language] }}></span>
          <span>{language}</span>
        </div>
        <span className="forks-count">
          <GoRepoForked />
          {forks_count}
        </span>
        <span className="stargazers_count">
          <GoStar />
          {stargazers_count}
        </span>
      </div>
      <div className="dates">
        <span className="created-at">Created at: {getDayMonth(created_at)}</span>
        <span className="updated-at">Updated at: {getDayMonth(updated_at)}</span>
      </div>
    </div>
  );
};

export default RepoItem;
