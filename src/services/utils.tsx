export const BASE_URL = 'http://158.160.171.160:8000/api/v1';

const getResponseData = (res: Response) => {
  if (!res.ok) {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
  return res.json();
};

// export const getArts = () => {
//   return fetch(`${BASE_URL}/arts/`, {
//     method: 'GET',
//   }).then(getResponseData);
// };

export const getEvents = () => {
  return fetch(`${BASE_URL}/events/`, {
    method: 'GET',
  }).then(getResponseData);
};
