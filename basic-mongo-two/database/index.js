const { ObjectId } = require('mongodb');
const { getDb } = require('./database');

const getAllProjects = async () => {
  const db = await getDb();
  const projects = await db.collection('projects').find({});
  return projects.toArray();
};

const getProject = async (id) => {
  const db = await getDb();
  const project = await db.collection('projects').findOne({ _id: ObjectId(id) });
  return project;
};


module.exports = {
  getAllProjects,
  getProject,
};
