import NextAuth from 'next-auth';
import TwitterProvider from 'next-auth/providers/twitter';
import FacebookProvider from 'next-auth/providers/facebook';
import GoogleProvider from 'next-auth/providers/google';
// import EmailProvider from 'next-auth/providers/email';
import GithubProvider from 'next-auth/providers/github';
import Auth0Provider from 'next-auth/providers/auth0';
import { MongoDBAdapter } from '@auth/mongodb-adapter';
import clientPromise from './lib/mongodb';

export default NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    // Auth0
    Auth0Provider({
      clientId: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      issuer: process.env.AUTH0_ISSUER,
    }),
    // OAuth authentication providers...
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // TODO: will implement next time
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID,
      clientSecret: process.env.TWITTER_SECRET,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    // Passwordless / email sign in
    // EmailProvider({
    //   server: process.env.MAIL_SERVER,
    //   from: 'NextAuth.js <no-reply@example.com>',
    // }),
  ],
  pages: {
    // signIn: '/signin',
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.JWT_SECRET,
});
