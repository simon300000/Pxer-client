const fs = require('fs');
const got = require('got');


const down = (link) => {
    got.stream(link, {
        headers: {
            referer: 'https://www.pixiv.net/'
        }
    }).pipe(fs.createWriteStream('down/' + link.match(/[^\/]+$/)));
}


let test = []//链接

for (var i = 0; i < test.length; i++) {
  down(test[i])
}