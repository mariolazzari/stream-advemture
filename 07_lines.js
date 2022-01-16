const through = require("through2");
const split2 = require("split2");

let lineCount = 1;

const tr = through(function (line, _, next) {
  line = line.toString();
  line = lineCount % 2 === 0 ? line.toUpperCase() : line.toLowerCase();
  this.push(line + "\n");

  lineCount++;
  next();
});

process.stdin.pipe(split2()).pipe(tr).pipe(process.stdout);
