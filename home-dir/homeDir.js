const os = require('os');

function homeDir() {
  return os.homedir();
}

// console.log(homeDir());

export {
  homeDir,
};
