const { Pool, Client } = require('pg')

const connectionData = {
  user: 'postgres',
  host: 'localhost',
  database: 'RecipeBD',
  password: '1234',
  port: 5432,
}
const client = new Client(connectionData)
//client.connect();

module.exports =client;
