const { ObjectID } = require('mongodb');
const { getDb } = require('../Database');

const getAllProjects = async () => {
  const db = await getDb();
  const data = await db
    .collection('projects')
    .find({})
    .toArray();
  return data;
};

const getProjectById = async (id) => {
  const db = await getDb();
  const project = await db
    .collection('projects')
    .findOne({ _id: new ObjectID(id) });
  return project || {};
};

const insertProject = async (data) => {
  const db = await getDb();
  const insertedProject = await db
    .collection('projects')
    .insertMany(data);
  return insertedProject;
}

module.exports = {
  getAllProjects,
  getProjectById,
  insertProject,
};
