import axios from 'axios';
import * as constants from '../../constants/constants';

const fetchUrl = async (url) => {
  try {
    const response = await axios.get(url);

    return response;
  } catch (error) {
    return null;
  }
};

const fetchUser = async (userName) => {
  const response = await fetchUrl(`${constants.API_USER_BASE_URL}${userName}`);

  return response;
};

export { fetchUrl, fetchUser };
