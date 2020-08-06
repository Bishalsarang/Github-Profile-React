export const USER_NAME = 'Bishalsarang';
export const API_USER_BASE_URL = 'https://api.github.com/users/';
export const API_USER_URL = API_USER_BASE_URL + USER_NAME;
export const API_REPO_URL = `${API_USER_URL}/repos`;
export const API_FOLLOWER_URL = `${API_USER_URL}/followers`;
export const API_FOLLOWING_URL = `${API_USER_URL}/following`;

export const LANGUAGES = ['All', 'C++', 'HTML', 'Python', 'JavaScript', 'Jupyter Notebook'];
export const MAP_LANGUAGES_TO_COLOR = {
  'C++': '#F34B7D',
  HTML: '#E34c26',
  Python: '#3572A5',
  JavaScript: '#F1E05A',
  'Jupyter Notebook': '#DA5B0B',
};

export const SORT_REPO_BY = ['updated', 'created', 'starCounts', 'forkedCounts'];
export const ITEMS_PER_PAGE = 10;
