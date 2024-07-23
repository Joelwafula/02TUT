const fs = require('fs');

//read stream is used to read large files bit by bit

const rs = fs.createReadStream('./files/lorem.txt', {encoding : 'utf8'});

const ws = fs.createWriteStream('./files/new-lorem.txt')

// rs.on('data', (dataChunk)=>{
//     ws.write(dataChunk)
// })

rs.pipe(ws)