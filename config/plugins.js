// path: ./config/plugins.js


module.exports = ({ env }) => ({
    // ...
    //jwtSecret: env('JWT_SECRET','CJZEGjM/9SEyJlauai9U0w=='),
    'users-permissions': {
      config: {
        jwtSecret: 'CJZEGjM/9SEyJlauai9U0w==',
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