const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'postgres',
  password: '1',
  host: 'localhost',
  port: 5432,
  database: 'test_diploma',
});

module.exports = pool;
