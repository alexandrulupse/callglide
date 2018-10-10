import Cookie from 'js-cookie';

const COOKIE_KEY = 'session';

export const createSession = (authToken, user) => {
  Cookie.set(COOKIE_KEY, { authToken, user });
};

export const getSessionValue = key => {
  const cookieValue = Cookie.getJSON(COOKIE_KEY);
  return key ? cookieValue && cookieValue[key] : cookieValue;
};

export const destroySession = () => {
  Cookie.remove(COOKIE_KEY);
};
