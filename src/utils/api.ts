import { BASE_URL } from './config';

export const getData = async () => {
  const res = await fetch(`${BASE_URL}/documents1`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'GET',
  });
  return checkResponse(res);
};

const checkResponse = (res: {
    json(): unknown;
    data(data: any): void | PromiseLike<void>; ok: any; status: any 
}) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка ${res.status}`);
};
