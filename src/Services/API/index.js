import * as constants from '../../constants/constants';
import axios from 'axios';

const fetchUrl = async (url) => {
  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const fetchUser = async (userName) => {
  const response = await fetchUrl(`${constants.API_USER_BASE_URL}${userName}`);
  return response;
};

export { fetchUrl, fetchUser };
