const fs = require("fs");

const file = process.argv[2];
const readStream = fs.createReadStream(file);
readStream.pipe(process.stdout);

// fs.createReadStream(file).pipe(process.stdout)
