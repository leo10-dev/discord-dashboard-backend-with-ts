import express , {Express} from 'express'
import cors  from 'cors' 
import routes from '../routes'

export function createApp() : Express {
    const app = express();
    app.use(express.json());
    app.use(express.urlencoded());
    app.use( cors({ origin: ['http://localhost:5000'], credentials: true , }) );
app.use('/api' , routes)
    return app;
}