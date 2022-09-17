import {config} from 'dotenv'
import express , {Express} from 'express'
import { createApp} from './utils/createApp'
import './database'
config();

import routes from './routes'
const PORT = process.env.PORT  || 5001;




async function main(){
try{
const app = createApp();
    app.listen(PORT , () => {
        console.log(`Running On  ${PORT}`)
    })

}catch (err) {
     console.log(err)
}
}
main();