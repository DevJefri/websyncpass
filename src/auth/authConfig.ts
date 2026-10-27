export const authConfig = {
  authority: `https://cognito-idp.${import.meta.env.VITE_AWS_REGION}.amazonaws.com/${import.meta.env.VITE_COGNITO_USER_POOL_ID}`,
  client_id: import.meta.env.VITE_COGNITO_CLIENT_ID,
  redirect_uri: import.meta.env.VITE_COGNITO_REDIRECT_URI,
  post_logout_redirect_uri: import.meta.env.VITE_COGNITO_LOGOUT_URI,
  response_type: 'code',
  scope: import.meta.env.VITE_COGNITO_SCOPES || 'openid email profile',
  automaticSilentRenew: true,
  loadUserInfo: true,
  metadata: {
    issuer: `https://cognito-idp.${import.meta.env.VITE_AWS_REGION}.amazonaws.com/${import.meta.env.VITE_COGNITO_USER_POOL_ID}`,
    authorization_endpoint: `${import.meta.env.VITE_COGNITO_DOMAIN}/oauth2/authorize`,
    token_endpoint: `${import.meta.env.VITE_COGNITO_DOMAIN}/oauth2/token`,
    userinfo_endpoint: `${import.meta.env.VITE_COGNITO_DOMAIN}/oauth2/userInfo`,
    end_session_endpoint: `${import.meta.env.VITE_COGNITO_DOMAIN}/logout`,
  },
}
