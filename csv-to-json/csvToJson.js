const fs = require('fs');

function csvToJson(csvFilePath) {
  const fileContent = fs.readFileSync(csvFilePath, 'utf-8');
  const newlineSeparatedFileContent = fileContent.split('\n');
  const keys = newlineSeparatedFileContent[0].split(',');
  const dataArray = newlineSeparatedFileContent.slice(1).reduce((acc, hero) => {
    acc.push(hero.split(','));
    return acc;
  }, []);
  const herosArray = dataArray.reduce((acc, hero) => {
    const heroObject = {};
    keys.forEach((key, keyIndex) => {
      heroObject[key] = hero[keyIndex];
    });
    acc.push(heroObject);
    return acc;
  }, []);
  return herosArray;
}

export {
  csvToJson,
};
