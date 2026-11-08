const raw = process.env.DATABASE_URL;
if (!raw) process.exit(0);

const url = new URL(raw);
const quote = (value) => `'${String(value).replace(/'/g, `'\\''`)}'`;

const vars = {
  DB_TYPE: "postgresdb",
  DB_POSTGRESDB_HOST: url.hostname,
  DB_POSTGRESDB_PORT: url.port || "5432",
  DB_POSTGRESDB_USER: decodeURIComponent(url.username),
  DB_POSTGRESDB_PASSWORD: decodeURIComponent(url.password),
  DB_POSTGRESDB_DATABASE: decodeURIComponent(url.pathname.replace(/^\//, "")),
  DB_POSTGRESDB_SSL_ENABLED: "true",
};

for (const [key, value] of Object.entries(vars)) {
  console.log(`${key}=${quote(value)}`);
}
