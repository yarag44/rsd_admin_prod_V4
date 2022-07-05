// path: ./config/plugins.js

module.exports = ({ env }) => ({
    // ...
    'users-permissions': {
      config: {
        jwtSecret: env('JWT_SECRET','L1A6Hj7ooh6g6NfEVrcBfg=='),
        jwt: {
          expiresIn: '7d',
        },
      },
    },
    // ...
  });