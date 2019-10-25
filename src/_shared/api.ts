import axios from 'axios';

interface QueryParams {
  param: string;
  value: number | string;
}

export const getResponse = (
  baseUrl: string,
  queryParams: Array<QueryParams>,
) => {
  let url = baseUrl;
  if (queryParams) {
    const params = queryParams && queryParams.map(x => `${x.param}=${x.value}`);
    url += `?${params.join('&')}`;
  }
  return axios
    .get(url)
    .then(response => {
      if (response.data.response_code === 0) {
        return response.data;
      } else {
        throw response.data.response_code;
      }
    })
    .catch(err => console.warn(err));
};

export const pushResponse = (url: string, params = {}) =>
  fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  });
