import { setCookie, destroyCookie } from 'nookies';
import { isStagingEnv } from '../../infra/env/isStagingEnv';

async function HttpClient(url, { headers, body, ...options }) {
  return fetch(url, {
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
    ...options,
  })
    .then((serverResponse) => {
      if (serverResponse.ok) {
        return serverResponse.json();
      }

      throw new Error('Falha em pegar dados do servidor');
    });
}

const BASE_URL = isStagingEnv
  // DEV Back End
  ? 'https://instalura-api-git-master-omariosouto.vercel.app'
  // PROD Back End
  : 'https://instalura-api.omariosouto.vercel.app';

export const loginService = {
  async login({ username, password }) {
    return HttpClient(`${BASE_URL}/api/login`, {
      method: 'POST',
      body: {
        username,
        password,
      },
    })
      .then((convertedResponse) => {
        const { token } = convertedResponse.data;
        const DAY_IN_SECONDS = 86400;

        setCookie(null, 'APP_TOKEN', token, {
          path: '/',
          maxAge: DAY_IN_SECONDS * 7,
        });

        return {
          token,
        };
      });
  },
  logout() {
    destroyCookie(null, 'APP_TOKEN');
  },
};
