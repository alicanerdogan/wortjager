function getParam(devValue, fallback) {
  return (process.env.NODE_ENV === 'development') ?
    devValue : fallback;
}

export const GOOGLE_REDIRECT_URI = getParam('http://localhost:8080/auth/google', 'https://wortjager.petprojects.info/auth/google');
export const GOOGLE_CLIENT_ID = '891278828941-48vpaqffj33orudas47ug1erfqo38vir.apps.googleusercontent.com';
export const GOOGLE_OAUTH_URI = `https://accounts.google.com/o/oauth2/auth?client_id=${GOOGLE_CLIENT_ID}&scope=email&response_type=code&redirect_uri=${GOOGLE_REDIRECT_URI}`;
