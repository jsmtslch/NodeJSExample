const path = require('path');
const {log} = require('util');
const dirpath = path.join(__dirname, 'www', 'files', 'uploads');
const v8 = require('v8');

log(path.basename(__filename));

log("The file name");

console.log(dirpath);

log(v8.getHeapStatistics());