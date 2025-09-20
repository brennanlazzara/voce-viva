import dotenv from 'dotenv';
dotenv.config({ path: '.env' });

import express, { Application } from 'express';
import cors from 'cors';
import session from 'express-session';
import connectDB from './config/db';
import './config/passport';
import verbRoutes from './routes/verbRoutes';
import pronounRoutes from './routes/pronounRoutes';
import lessonRoutes from './routes/lessonRoutes';
import phraseRoutes from './routes/phraseRoutes';
import authRoutes from './routes/authRoutes';
import passport from 'passport';

const app: Application = express();

// Connect to database
connectDB();

// Middleware
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());

// Session configuration
app.use(session({
  secret: process.env.SESSION_SECRET || 'your-secret-key',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }
}));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/auth', authRoutes);
app.use('/api/verbs', verbRoutes);
app.use('/api/pronouns', pronounRoutes);
app.use('/api/lessons', lessonRoutes);
app.use('/api/phrases', phraseRoutes);

const PORT: string | number = process.env.PORT || 5002;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));