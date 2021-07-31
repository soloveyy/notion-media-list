const dotenv = require('dotenv')
const {Client} = require('@notionhq/client')

dotenv.config()
const notion = new Client({
    auth: process.env.NOTION_KEY
})
const databaseId = process.env.NOTION_DATABASE_ID

const getMedia = async () => {
    const payload = {
        path: `databases/${databaseId}/query`,
        method: 'POST',
    }
    const {results} = await notion.request(payload)
    console.log(results[0])
    const eachData = results.map((page) => {
        return {
            id: page.id,
            title: page.properties.Name.title[0].text.content,
            type: page.properties.Type.select.name,
            date: page.created_time,
            url: page.url
        }
    })
    return eachData
}

(async()=>{
    const nMedia = await getMedia()
    console.log(nMedia);
})()
