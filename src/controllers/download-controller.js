const fs = require('fs');
const path = require('path');


const downloadSong = async(req, res) =>{
    var file = req.body.SongName;
    var filePath = path.join(songDir, file, 'originalSong', file + '.mp3');
    var stat = fs.statSync(filePath);
    res.writeHead(200, {
        'Content-Type': 'audio/mpeg',
        'Content_length': stat.size
    });
    var readStream = fs.createReadStream(filePath);
    readStream.pipe(res);
};


module.exports = {downloadSong};
