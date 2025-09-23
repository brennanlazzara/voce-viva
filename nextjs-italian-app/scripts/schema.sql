-- PostgreSQL Schema for Italian Verb Learning App

-- Verbs table
CREATE TABLE IF NOT EXISTS verbs (
    id SERIAL PRIMARY KEY,
    infinitive VARCHAR(255) NOT NULL UNIQUE,
    type VARCHAR(10) NOT NULL CHECK (type IN ('are', 'ere', 'ire')),
    definition TEXT NOT NULL,
    auxiliary_verb VARCHAR(10) NOT NULL CHECK (auxiliary_verb IN ('avere', 'essere')),
    regular_presente_indicativo BOOLEAN NOT NULL DEFAULT true,
    regular_passato_prossimo BOOLEAN NOT NULL DEFAULT true,
    conjugations JSONB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Phrases table
CREATE TABLE IF NOT EXISTS phrases (
    id SERIAL PRIMARY KEY,
    phrase TEXT NOT NULL,
    translation TEXT NOT NULL,
    meaning TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Lessons table
CREATE TABLE IF NOT EXISTS lessons (
    id SERIAL PRIMARY KEY,
    type VARCHAR(20) NOT NULL CHECK (type IN ('regular', 'irregular')),
    infinitive VARCHAR(255), -- NULL for regular lessons, verb infinitive for irregular
    tense VARCHAR(255) NOT NULL,
    pattern_explanation TEXT,
    etymology TEXT,
    memory_tricks TEXT[] NOT NULL DEFAULT '{}',
    common_phrases TEXT[] NOT NULL DEFAULT '{}',
    learner_pitfalls TEXT[] NOT NULL DEFAULT '{}',
    conjugation_examples JSONB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Pronouns table
CREATE TABLE IF NOT EXISTS pronouns (
    id SERIAL PRIMARY KEY,
    type VARCHAR(50) NOT NULL CHECK (type IN ('subject', 'directObject', 'indirectObject')),
    pronouns TEXT[] NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for better performance
CREATE INDEX IF NOT EXISTS idx_verbs_type ON verbs(type);
CREATE INDEX IF NOT EXISTS idx_verbs_regular_presente ON verbs(regular_presente_indicativo);
CREATE INDEX IF NOT EXISTS idx_lessons_type ON lessons(type);
CREATE INDEX IF NOT EXISTS idx_lessons_tense ON lessons(tense);
CREATE INDEX IF NOT EXISTS idx_pronouns_type ON pronouns(type);