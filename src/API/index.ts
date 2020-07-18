import constants from '../constants/constants';

export const getAuthInstagramUrl = async (): Promise<string> => {
  return await fetch(`${constants.auth}`)
    .then((response) => {
      return response;
    })
    .then((result) => {
      return result.url;
    })
};