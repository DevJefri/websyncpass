const region = import.meta.env.VITE_AWS_REGION || 'us-east-1'
const userPoolId = import.meta.env.VITE_COGNITO_USER_POOL_ID || 'us-east-1_lLYEkDgbK'
const clientId = import.meta.env.VITE_COGNITO_CLIENT_ID || '5hd36m6qsssbl237dmalv18pv1'
const cognitoDomain = import.meta.env.VITE_COGNITO_DOMAIN || 'https://us-east-1llyekdgbk.auth.us-east-1.amazoncognito.com'
const redirectUri = import.meta.env.VITE_COGNITO_REDIRECT_URI || window.location.origin + '/'
const logoutUri = import.meta.env.VITE_COGNITO_LOGOUT_URI || window.location.origin + '/'
const scopes = import.meta.env.VITE_COGNITO_SCOPES || 'openid email profile'

export const authConfig = {
  authority: `https://cognito-idp.${region}.amazonaws.com/${userPoolId}`,
  client_id: clientId,
  redirect_uri: redirectUri,
  post_logout_redirect_uri: logoutUri,
  response_type: 'code',
  scope: scopes,
  automaticSilentRenew: true,
  loadUserInfo: true,
  metadata: {
    issuer: `https://cognito-idp.${region}.amazonaws.com/${userPoolId}`,
    authorization_endpoint: `${cognitoDomain}/oauth2/authorize`,
    token_endpoint: `${cognitoDomain}/oauth2/token`,
    userinfo_endpoint: `${cognitoDomain}/oauth2/userInfo`,
    end_session_endpoint: `${cognitoDomain}/logout`,
  },
}

console.log('Cognito config:', { client_id: clientId, redirect_uri: redirectUri, domain: cognitoDomain })

