import passport from 'passport';
import { Strategy as GoogleStrategy, Profile, VerifyCallback } from 'passport-google-oauth20';
import User from '../models/User';

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID!,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
  callbackURL: "/auth/google/callback"
}, async (accessToken: string, refreshToken: string, profile: Profile, done: VerifyCallback) => {
  try {
    let user = await User.findOne({ googleId: profile.id });

    if (user) {
      return done(null, user);
    }

    user = new User({
      googleId: profile.id,
      email: profile.emails?.[0]?.value,
      name: profile.displayName,
      profilePicture: profile.photos?.[0]?.value
    });

    await user.save();
    return done(null, user);
  } catch (error) {
    return done(error, false);
  }
}));

passport.serializeUser((user: any, done: (err: any, id?: any) => void) => {
  done(null, user._id);
});

passport.deserializeUser(async (id: string, done: (err: any, user?: any) => void) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error, false);
  }
});

export default passport;