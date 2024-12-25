import express, { json, Request, Response } from 'express';
import session from 'express-session';
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import 'dotenv/config';
import { connectDb } from './db/db';
const port = 3000;
const app = express();
connectDb();
app
  .use(json())
  .use(
    session({
      secret: process.env.SESSION_SECRET || '',
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        secure: false
      }
    })
  )
  .use(passport.initialize())
  .use(passport.session());

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
      callbackURL: 'http://localhost:3000/callback'
    },
    () => {}
  )
);
app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    message: 'working fine'
  });
});
app.listen(port, () => {
  console.log(`App is listening on port: ${port}`);
});
