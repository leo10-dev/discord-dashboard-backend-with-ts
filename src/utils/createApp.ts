import express , {Express} from 'express'
import cors  from 'cors' 
import routes from '../routes'
import session  from 'express-session';
import passport from 'passport';

export function createApp() : Express {
    const app = express();
    app.use(express.json());
    app.use(express.urlencoded());
    app.use( cors({ origin: ['http://localhost:5000'], credentials: true , }) );
    app.use(
        session({
            secret : "Mq157e6bfb8SWkHSzdlfkgd79cmwntmsXUEvtpAlY9Dz87frDFlW2EbLDgMy",
            resave : false,
            saveUninitialized : true,
            cookie : {  maxAge : 60000 * 60 *24 *7 ,  }
            
        })
        );

        app.use(passport.initialize());
        app.use(passport.session)




app.use('/api' , routes)
    return app;
}