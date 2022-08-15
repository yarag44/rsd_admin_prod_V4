// path: ./config/plugins.js

module.exports = ({ env }) => ({
    // ...
    'users-permissions': {
      config: {
        jwtSecret: crypto.randomBytes(16).toString('base64'), //env('JWT_SECRET','CJZEGjM/9SEyJlauai9U0w=='),
        jwt: {
          expiresIn: '7d',
        },
      },
    },
    // ...
  });

  module.exports = {
    // ...
    'reports': {
      enabled: true,
      resolve: './src/plugins/reports'
    },
    // ...
  }