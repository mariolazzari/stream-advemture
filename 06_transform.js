const through = require("through2");

function write(chunk, _encoding, next) {
  chunk = chunk.toString().toUpperCase();
  this.push(chunk);
  next();
}

const stream = through(write);
process.stdin.pipe(stream).pipe(process.stdout);
