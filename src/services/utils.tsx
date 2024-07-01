export const BASE_URL = 'http://158.160.171.160:8000/api/v1';
// export const TOKEN = '';


const getResponseData = (res: Response) => {
  if (!res.ok) {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
  return res.json();
};

// const headers = {
//   // authorization: `Token ${TOKEN}`,
//   Accept: 'application/json',
//   'Content-Type': 'application/json',
// };

export const getArts = () => {
  return fetch(`${BASE_URL}/arts/`, {
    // headers,
    method: 'GET',
  }).then(getResponseData);
};

