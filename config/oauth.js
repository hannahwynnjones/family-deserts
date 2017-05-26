module.exports = {
  facebook: {
    loginURL: 'https://www.facebook.com/v2.8/dialog/oauth',
    accessTokenURL: 'https://graph.facebook.com/v2.8/oauth/access_token',
    profileURL: '#',
    clientId: process.env.FAMILY_DESERTS_CLIENT_ID,
    clientSecret: process.env.FAMILY_DESERTS_CLIENT_SECRET,
    scope: 'user:email'
  }
};
