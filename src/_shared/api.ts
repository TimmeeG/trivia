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
  return fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then(response => response.json())
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
