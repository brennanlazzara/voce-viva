# VoceViva 🇮🇹

_Your living voice in Italian_

[![Next.js](https://img.shields.io/badge/Next.js-14.2.32-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.0+-38B2AC)](https://tailwindcss.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15+-336791)](https://www.postgresql.org/)

## Description

Welcome to **VoceViva**! This modern, interactive web application is designed to help learners of all levels master Italian verb conjugations through engaging exercises, dynamic lessons, and beautiful learning tools. VoceViva is your gateway to bringing Italian to life - starting with verb conjugations and expanding to comprehensive language mastery.

## 🌟 Key Features

### **Interactive Verb Practice Cards**

- **Regular Verb Practice**: Master -ARE, -ERE, and -IRE verb conjugations with color-coded cards
- **Irregular Verb Challenge**: ⚡ Specialized cards for irregular verbs with unique conjugation patterns
- **Dynamic Content**: Lessons and conjugation trees automatically update based on the current verb
- **Real-time Feedback**: Instant validation with visual feedback for correct/incorrect answers

### **Smart Learning Tools**

- **Dynamic Conjugation Trees**: Visual verb family trees that adapt to show irregular patterns
- **Personalized Lessons**: Grammar lessons that change based on whether you're studying regular or irregular verbs
- **Hint System**: Context-aware hints and learning tips
- **Daily Phrases**: Curated Italian phrases with translations and cultural context

### **Modern User Experience**

- **Responsive Design**: Beautiful interface that works on desktop, tablet, and mobile
- **Dark Mode Support**: Easy on the eyes with automatic theme switching
- **Interactive Cards**: Flip cards to reveal verbs and test your knowledge
- **Progress Tracking**: Save your learning progress and continue where you left off

### **Database-Driven Content**

- **PostgreSQL Backend**: Robust database storing verb conjugations, definitions, and metadata
- **API Integration**: RESTful API endpoints for verbs, pronouns, and phrases
- **Irregular Verb Detection**: Smart filtering based on `regular_presente_indicativo` flag

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Database Structure](#database-structure)
- [Recent Updates](#recent-updates)
- [Contributing](#contributing)
- [License](#license)

## Project Structure

```
nextjs-italian-app/
│
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── globals.css              # Global styles
│   │   ├── layout.tsx               # Root layout component
│   │   ├── page.tsx                 # Homepage with practice cards
│   │   ├── about/
│   │   │   └── page.tsx            # About page
│   │   ├── contact/
│   │   │   └── page.tsx            # Contact page
│   │   ├── verb-conjugation/
│   │   │   └── [mood]/
│   │   │       └── [tense]/
│   │   │           └── page.tsx     # Dynamic verb conjugation pages
│   │   └── api/                     # API Routes
│   │       ├── auth/
│   │       │   └── [...nextauth]/
│   │       │       └── route.ts     # NextAuth.js authentication
│   │       ├── verbs/
│   │       │   ├── route.ts         # All verbs endpoint
│   │       │   └── random/
│   │       │       ├── route.ts     # Random verb endpoint
│   │       │       ├── [type]/
│   │       │       │   └── route.ts # Random verb by type (are/ere/ire)
│   │       ├── pronouns/
│   │       │   └── random/
│   │       │       └── subject/
│   │       │           └── route.ts # Random pronoun endpoint
│   │       └── phrases/
│   │           └── route.ts         # Daily phrases endpoint
│   │
│   ├── components/                  # React Components
│   │   ├── VerbPracticeCard.tsx     # Regular verb practice card
│   │   ├── IrregularVerbPracticeCard.tsx # Irregular verb practice card
│   │   ├── ColorModeSwitcher.tsx    # Dark/Light mode toggle
│   │   └── modals/                  # Modal Components
│   │       ├── HintDialog.tsx       # Verb conjugation hints
│   │       ├── VerbTreeGraphDialog.tsx # Dynamic conjugation trees
│   │       └── LessonDialog.tsx     # Dynamic grammar lessons
│   │
│   ├── hooks/                       # Custom React Hooks
│   │   ├── useVerbData.ts          # Verb data fetching hook
│   │   └── usePhraseData.ts        # Phrase data fetching hook
│   │
│   ├── lib/                        # Utility Libraries
│   │   ├── database.ts             # Database connection
│   │   └── auth.ts                 # Authentication configuration
│   │
│   └── types/                      # TypeScript Type Definitions
│       └── index.ts                # Global type definitions
│
├── scripts/                        # Database Scripts
│   └── seed.sql                    # Database seeding with verbs/phrases
│
├── public/                         # Static Assets
│   ├── favicon.ico
│   └── images/
│
├── .env.local                      # Environment variables
├── .env.example                    # Environment template
├── package.json                    # Dependencies and scripts
├── tsconfig.json                   # TypeScript configuration
├── tailwind.config.ts              # Tailwind CSS configuration
├── next.config.js                  # Next.js configuration
└── README.md
```

## Installation

### Prerequisites

- **Node.js** 18.0 or higher
- **PostgreSQL** 15.0 or higher
- **npm** or **yarn** package manager

### Setup Instructions

1. **Clone the Repository**

   ```bash
   git clone https://github.com/brennanlazzara/italianLearningProgram.git
   cd italianLearningProgram/nextjs-italian-app
   ```

2. **Install Dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Database Setup**

   ```bash
   # Create PostgreSQL database
   createdb italian_learning

   # Run the seed script to populate with verbs and phrases
   psql italian_learning < scripts/seed.sql
   ```

4. **Environment Configuration**

   ```bash
   # Copy the environment template
   cp .env.example .env.local

   # Edit .env.local with your database credentials
   DATABASE_URL="postgresql://username:password@localhost:5432/italian_learning"
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="your-secret-key"
   ```

5. **Start Development Server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. **Open Your Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## API Endpoints

### Verbs

- `GET /api/verbs` - Get all verbs
- `GET /api/verbs/random` - Get random verb
- `GET /api/verbs/random/[type]` - Get random verb by type (are, ere, ire)
  - Supports `regularOnly=true/false` query parameter for filtering

### Pronouns

- `GET /api/pronouns/random/subject` - Get random subject pronoun

### Phrases

- `GET /api/phrases` - Get all daily phrases

## Database Structure

### Verbs Table

```sql
CREATE TABLE verbs (
    id SERIAL PRIMARY KEY,
    infinitive VARCHAR(100) NOT NULL,
    type VARCHAR(3) NOT NULL,        -- 'are', 'ere', 'ire'
    definition VARCHAR(200) NOT NULL,
    auxiliary_verb VARCHAR(10),      -- 'essere' or 'avere'
    regular_presente_indicativo BOOLEAN NOT NULL,
    regular_passato_prossimo BOOLEAN NOT NULL,
    conjugations JSONB              -- Stores irregular conjugations
);
```

### Sample Data

- **Regular Verbs**: parlare, vendere, dormire, etc.
- **Irregular ERE Verbs**: essere, avere, fare, vedere, sapere
- **Irregular IRE Verbs**: venire, dire

## Recent Updates

### Version 2.0 - Dynamic Learning System

- ✅ **Irregular Verb Cards**: Added specialized practice cards for irregular verbs
- ✅ **Dynamic Lessons**: Grammar lessons now adapt to the current verb being studied
- ✅ **Smart Conjugation Trees**: Visual trees show actual irregular patterns instead of regular rules
- ✅ **Enhanced UI**: Orange-themed styling with ⚡ indicators for irregular verbs
- ✅ **Database Integration**: Full PostgreSQL integration with verb metadata and conjugations

### Version 1.5 - Modern Architecture

- ✅ **Next.js Migration**: Migrated from React to Next.js 14 with App Router
- ✅ **TypeScript**: Full TypeScript implementation for better developer experience
- ✅ **Tailwind CSS**: Modern, responsive styling with dark mode support
- ✅ **API Routes**: RESTful API endpoints for all data fetching

## Usage

1. **Choose Your Practice Mode**: Select mood (Indicativo, Congiuntivo, Condizionale) and tense (Presente, Passato Prossimo, etc.)

2. **Practice Regular Verbs**: Use the color-coded cards to practice:

   - 🟢 **Green**: -ARE verbs (parlare, cantare, studiare)
   - 🔵 **Blue**: -ERE verbs (vendere, credere, scrivere)
   - 🟣 **Purple**: -IRE verbs (dormire, partire, aprire)

3. **Challenge Yourself with Irregular Verbs**:

   - 🟠 **Orange**: Irregular verbs (essere, avere, fare, venire, dire)
   - Each irregular verb has unique conjugation patterns to memorize

4. **Learn with Dynamic Tools**:

   - **Conjugation Trees**: Click "View Conjugation Tree" to see visual verb patterns
   - **Grammar Lessons**: Click "Study Grammar Lesson" for verb-specific learning content
   - **Hints**: Use the hint button for conjugation help and learning tips

5. **Track Your Progress**: The app automatically saves your progress and provides feedback on correct/incorrect answers.

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Make your changes and test thoroughly
4. Commit your changes: `git commit -am 'Add some feature'`
5. Push to the branch: `git push origin feature/your-feature-name`
6. Submit a pull request

### Development Guidelines

- Follow TypeScript best practices
- Use Tailwind CSS for styling
- Maintain responsive design principles
- Test all API endpoints
- Update documentation for new features

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Italian language data sourced from linguistic resources
- Icons and styling inspired by modern language learning applications
- Built with love for Italian language learners worldwide 🇮🇹❤️

---

**Happy Learning with VoceViva! Buona fortuna con l'italiano! 🎉**
