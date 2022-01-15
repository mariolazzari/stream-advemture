const { Readable } = require("stream");
const data = process.argv[2];

class MyStream extends Readable {
  _read() {
    //   console.log("chunk size", size);
  }
}

const myStream = new MyStream();
myStream.push(data);
myStream.pipe(process.stdout);
