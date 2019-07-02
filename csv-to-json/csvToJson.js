const fs = require('fs');

function csvToJson(csvFilePath) {
  const fileContent = fs.readFileSync(csvFilePath, 'utf-8');
  const newlineSeparatedFileContent = fileContent.split('\n');
  // console.log(newlineSeparatedFileContent);
  const keys = newlineSeparatedFileContent[0];
  const dataArray = newlineSeparatedFileContent.slice(1);
  console.log(dataArray);
  dataArray.reduce((acc, hero, index) => {
    // const heroObject = {}
    // keys.forEach(key => {]})
    // heroObject[keys[index]] = 
    return acc;
  }, [])
  return csvFilePath;
}

export {
  csvToJson,
};
