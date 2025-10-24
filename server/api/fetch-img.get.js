// server/api/fetch-img.get.js
import { readdirSync } from 'fs';
import { join } from 'path';


export default defineEventHandler(() => {
    const folderPath = join(process.cwd(), 'public/assets/img/thumbnails')
    const files = readdirSync(folderPath)
    return { files }
})