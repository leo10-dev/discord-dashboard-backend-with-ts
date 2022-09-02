import passport from "passport";
 import { Strategy , Profile , } from "passport-discord";
import { VerifyCallback } from "passport-oauth2";

 passport.use(
    new Strategy(
    {
    clientID: process.env.DISCORD_CLIENT_ID || '1015242052939825222',
    clientSecret: process.env.DISCORD_SECRET_ID || '782NgHCc7m0FtulzNYCDGRx3QqQuuGfy',
    callbackURL: process.env.DISCORD_REDIRECT_URL,
    scope: ["identify", "guilds" , "email" ],

    } , 
 async (   
             accessToken: string,
             refreshToken: string,
               profile: Profile ,
            done : VerifyCallback


       ) =>{}



 )
 );
