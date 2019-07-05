const { MongoClient } = require('mongodb');

const {MONGO_URL} = process.env;
const {DB_NAME} = process.env;

let connectionInstance;

const getDbClient = async () => {
  if (!connectionInstance) {
    connectionInstance = await MongoClient.connect(MONGO_URL, { useNewUrlParser: true });
  }
  return connectionInstance;
};

const getDb = async () => {
  await getDbClient();

  if (!connectionInstance) {
    throw new Error('Db not connected');
  }

  return connectionInstance.db(DB_NAME);
};

module.exports = {
  getDbClient,
  getDb,
};
