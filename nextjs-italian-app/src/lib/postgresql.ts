import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.DATABASE_URL?.includes('localhost')
    ? { rejectUnauthorized: false } // For Neon local self-signed certs
    : process.env.NODE_ENV === 'production'
    ? { rejectUnauthorized: false }
    : false,
});

export { pool };

// Helper function to query the database
export async function query(text: string, params?: any[]) {
  try {
    const result = await pool.query(text, params);
    return result;
  } catch (error) {
    console.error('Database query error:', error);
    throw error;
  }
}

// Types matching our PostgreSQL schema
export interface Verb {
  id: number;
  infinitive: string;
  type: 'are' | 'ere' | 'ire';
  definition: string;
  auxiliary_verb: 'avere' | 'essere';
  regular_presente_indicativo: boolean;
  regular_passato_prossimo: boolean;
  conjugations?: any;
  created_at?: Date;
}

export interface Phrase {
  id: number;
  phrase: string;
  translation: string;
  meaning: string;
  created_at?: Date;
}

export interface Lesson {
  id: number;
  type: 'regular' | 'irregular';
  infinitive?: string;
  tense: string;
  pattern_explanation?: string;
  etymology?: string;
  memory_tricks: string[];
  common_phrases: string[];
  learner_pitfalls: string[];
  conjugation_examples?: any;
  created_at?: Date;
}

export interface Pronoun {
  id: number;
  type: 'subject' | 'directObject' | 'indirectObject';
  pronouns: string[];
  created_at?: Date;
}