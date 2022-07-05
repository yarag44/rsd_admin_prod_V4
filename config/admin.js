module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET','tjaQVgC0bIoE6AgT5TZw0w=='),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT','1+7eJ+4v1OCeObFUg95siA=='),
  },
});
