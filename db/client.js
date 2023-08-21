const { Client } = require('pg');

const connectionString = process.env.DATABASE_URL || 'postgres://bajvljst:JLvrcKmPX8ZdHSupp7D5xaWPgrV-jDdz@mahmud.db.elephantsql.com/bajvljst';

const client = new Client({
  connectionString,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : undefined,
});

module.exports = client;
