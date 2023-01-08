export default ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'spxr-strapi-db.mysql.database.azure.com'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'strapi'),
      user: env('DATABASE_USERNAME', 'spadmin'),
      password: env('DATABASE_PASSWORD', 'Holyrood99!!'),
      ssl: env.bool('DATABASE_SSL', false),
      app: {
        keys: env.array('APP_KEYS')
      }
    },
  },
});
