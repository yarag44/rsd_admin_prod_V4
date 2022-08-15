// path: ./config/plugins.js


module.exports = ({ env }) => ({
    // ...
    'users-permissions': {
      config: {
        jwtSecret: 'CJZEGjM/9SEyJlauai9U0w==',//env('JWT_SECRET',crypto.randomBytes(16).toString('base64')),
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