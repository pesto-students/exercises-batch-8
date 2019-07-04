const { getDb } = require('./database');

const getAllProjects = async () => {
  const db = await getDb();
  const projects = await db.collection('projects').find({});
  return projects.toArray();
};


module.exports = {
  getAllProjects,
};
