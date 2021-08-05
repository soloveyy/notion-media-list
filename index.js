const getMedia = require('./services/notion');

(async ()=> {
    const nMedia = await getMedia()
    console.log(nMedia);
})()
