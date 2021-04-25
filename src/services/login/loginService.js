import { setCookie, destroyCookie } from 'nookies';
import { isStagingEnv } from '../../infra/env/isStagingEnv';
import { HttpClient } from '../../infra/http/HttpClient';

const BASE_URL = isStagingEnv
  // DEV Back End
  ? 'https://instalura-api-git-master-omariosouto.vercel.app'
  // PROD Back End
  : 'https://instalura-api.omariosouto.vercel.app';

export const LOGIN_COOKIE_APP_TOKEN = 'LOGIN_COOKIE_APP_TOKEN';

export const loginService = {
  async login(
    { username, password },
    setCookieModule = setCookie,
    HttpClientModule = HttpClient,
  ) {
    return HttpClientModule(`${BASE_URL}/api/login`, {
      method: 'POST',
      body: {
        username,
        password,
      },
    })
      .then((convertedResponse) => {
        const { token } = convertedResponse.data;
        const hasToken = token;
        if (!hasToken) {
          throw new Error('Failed to login');
        }
        const DAY_IN_SECONDS = 86400;

        setCookieModule(null, LOGIN_COOKIE_APP_TOKEN, token, {
          path: '/',
          maxAge: DAY_IN_SECONDS * 7,
        });

        return {
          token,
        };
      });
  },
  async logout(context, destroyCookieModule = destroyCookie) {
    destroyCookieModule(context, null, LOGIN_COOKIE_APP_TOKEN, { path: '/' });
  },
};
