module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array("APP_KEYS",['og+KaR/IRoDPkC/7xFmfTw==','9c+obmamuVspErwOdW+0pg==']),
  },
});
