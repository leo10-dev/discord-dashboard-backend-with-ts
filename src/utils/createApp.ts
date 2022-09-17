import { config } from 'dotenv';
import express, { Express } from 'express';
import cors from 'cors';
import session from 'express-session';
import passport from 'passport';
import routes from '../routes';
import store from 'connect-mongo'


config();
require('../strategies/discord');

export function createApp(): Express {
  const app = express();
  // Enable Parsing Middleware for Requests
  app.use(express.json());
  app.use(express.urlencoded());

  // Enable CORS
  app.use(cors({ origin: ['http://localhost:5000'], credentials: true }));

  // Enable Sessions
  app.use(
    session({
      secret: 'Mq157e6bfb8SWkHSzdlfkgd79cmwntmsXUEvtpAlY9Dz87frDFlW2EbLDgMy',
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: 60000 * 60 * 24 * 7 },
      store : store.create({
        mongoUrl : 'mongodb+srv://azizsystem:azizbot123@discord-bot.3ow8b.mongodb.net/test'})
    
    })
  );

  // Enable Passport
  app.use(passport.initialize());
  app.use(passport.session());



  app.use('/api', routes);

  return app;
}