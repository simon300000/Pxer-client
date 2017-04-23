const fs = require('fs');
const got = require('got');

// Streams
got.stream('url', {
    headers: {
        referer: 'https://www.pixiv.net/'
    }
}).pipe(fs.createWriteStream('name'));
