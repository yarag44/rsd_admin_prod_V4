module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'heffalump.db.elephantsql.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'cuzqqltn'),
      user: env('DATABASE_USERNAME', 'cuzqqltn'),
      password: env('DATABASE_PASSWORD', 'Je7L_TTil0jo3eh3dlllnG5so53U9BLI'),
      ssl: env.bool('DATABASE_SSL', true),
    },
    pool: {
          min: 0,
          max: 2,
          idleTimeoutMillis: 1,
          createTimeoutMillis: 30000000,
          acquireTimeoutMillis: 30000000,
          propagateCreateError: false,
        },    
  },
});
