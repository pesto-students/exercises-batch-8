const uuid = require('uuid');

const languagesMap = {};

const languageService = {};

languageService.getAll = () =>
  Object.keys(languagesMap).map(id => ({ id, name: languagesMap[id] }));

languageService.edit = (id, language) => {
  if (!Object.prototype.hasOwnProperty.call(languagesMap, id)) {
    throw new Error(`id ${id} not found`);
  }
  languagesMap[id] = language;
  return true;
};

languageService.delete = (id) => {
  if (!Object.prototype.hasOwnProperty.call(languagesMap, id)) {
    throw new Error(`id ${id} not found`);
  }
  delete languagesMap[id];
  return true;
};

languageService.add = (language) => {
  const id = uuid.v4();
  languagesMap[id] = language;
};

module.exports = languageService;
