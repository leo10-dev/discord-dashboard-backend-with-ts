import express , {Express} from 'express'
import {config}  from 'dotenv'
config();

import routes from './routes'
const PORT = process.env.PORT  || 3001;


function createApp() : Express {
    const app = express();
app.use('/api' , routes)
    return app;
}

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