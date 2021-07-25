const dotenv = require('dotenv')
const {Client} = require('@notionhq/client')


dotenv.config()
const notion = new Client({
    auth: process.env.NOTION_KEY
})

const databaseId = process.env.NOTION_DATABASE_ID

// const listDatabases = async () => {
//     const res = await notion.databases.list()
//     console.log(res.title[0]);
// }

// listDatabases()

const getMedia = async () => {
    const payload = {
        path: `databases/${databaseId}/query`,
        method: 'POST',

    }
    const {results} = await notion.request(payload)

    const eachData = results.map(page=>console.log(page.properties.Name.title[0].text.content))
}

getMedia()