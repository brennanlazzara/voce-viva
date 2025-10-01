-- Complete Imperfetto conjugations for ALL verbs
-- This script adds imperfetto conjugations following regular patterns
-- =============================================
-- ARE VERBS (Regular pattern: avo, avi, ava, avamo, avate, avano)
-- Remove "are" and add endings
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || (
    '{"imperfetto": {"conjugations": {"io": "' || SUBSTRING(
      infinitive
      FROM 1 FOR LENGTH(infinitive) -3
    ) || 'avo", "tu": "' || SUBSTRING(
      infinitive
      FROM 1 FOR LENGTH(infinitive) -3
    ) || 'avi", "luiLei": "' || SUBSTRING(
      infinitive
      FROM 1 FOR LENGTH(infinitive) -3
    ) || 'ava", "noi": "' || SUBSTRING(
      infinitive
      FROM 1 FOR LENGTH(infinitive) -3
    ) || 'avamo", "voi": "' || SUBSTRING(
      infinitive
      FROM 1 FOR LENGTH(infinitive) -3
    ) || 'avate", "loro": "' || SUBSTRING(
      infinitive
      FROM 1 FOR LENGTH(infinitive) -3
    ) || 'avano"}}}'
  )::jsonb
WHERE type = 'are'
  AND conjugations->'imperfetto' IS NULL
  AND infinitive NOT IN ('fare');
-- ERE VERBS (Regular pattern: evo, evi, eva, evamo, evate, evano)
-- Remove "ere" and add endings
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || (
    '{"imperfetto": {"conjugations": {"io": "' || SUBSTRING(
      infinitive
      FROM 1 FOR LENGTH(infinitive) -3
    ) || 'evo", "tu": "' || SUBSTRING(
      infinitive
      FROM 1 FOR LENGTH(infinitive) -3
    ) || 'evi", "luiLei": "' || SUBSTRING(
      infinitive
      FROM 1 FOR LENGTH(infinitive) -3
    ) || 'eva", "noi": "' || SUBSTRING(
      infinitive
      FROM 1 FOR LENGTH(infinitive) -3
    ) || 'evamo", "voi": "' || SUBSTRING(
      infinitive
      FROM 1 FOR LENGTH(infinitive) -3
    ) || 'evate", "loro": "' || SUBSTRING(
      infinitive
      FROM 1 FOR LENGTH(infinitive) -3
    ) || 'evano"}}}'
  )::jsonb
WHERE type = 'ere'
  AND conjugations->'imperfetto' IS NULL
  AND infinitive NOT IN (
    'essere',
    'bere',
    'dire',
    'tradurre',
    'porre',
    'condurre',
    'produrre'
  );
-- IRE VERBS (Regular pattern: ivo, ivi, iva, ivamo, ivate, ivano)
-- Remove "ire" and add endings
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || (
    '{"imperfetto": {"conjugations": {"io": "' || SUBSTRING(
      infinitive
      FROM 1 FOR LENGTH(infinitive) -3
    ) || 'ivo", "tu": "' || SUBSTRING(
      infinitive
      FROM 1 FOR LENGTH(infinitive) -3
    ) || 'ivi", "luiLei": "' || SUBSTRING(
      infinitive
      FROM 1 FOR LENGTH(infinitive) -3
    ) || 'iva", "noi": "' || SUBSTRING(
      infinitive
      FROM 1 FOR LENGTH(infinitive) -3
    ) || 'ivamo", "voi": "' || SUBSTRING(
      infinitive
      FROM 1 FOR LENGTH(infinitive) -3
    ) || 'ivate", "loro": "' || SUBSTRING(
      infinitive
      FROM 1 FOR LENGTH(infinitive) -3
    ) || 'ivano"}}}'
  )::jsonb
WHERE type = 'ire'
  AND conjugations->'imperfetto' IS NULL;
-- =============================================
-- IRREGULAR IMPERFETTO VERBS
-- =============================================
-- essere (to be) - IRREGULAR
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"imperfetto": {"conjugations": {"io": "ero", "tu": "eri", "luiLei": "era", "noi": "eravamo", "voi": "eravate", "loro": "erano"}}}'::jsonb
WHERE infinitive = 'essere'
  AND conjugations->'imperfetto' IS NULL;
-- fare (to do/make) - IRREGULAR
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"imperfetto": {"conjugations": {"io": "facevo", "tu": "facevi", "luiLei": "faceva", "noi": "facevamo", "voi": "facevate", "loro": "facevano"}}}'::jsonb
WHERE infinitive = 'fare'
  AND conjugations->'imperfetto' IS NULL;
-- dire (to say) - IRREGULAR
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"imperfetto": {"conjugations": {"io": "dicevo", "tu": "dicevi", "luiLei": "diceva", "noi": "dicevamo", "voi": "dicevate", "loro": "dicevano"}}}'::jsonb
WHERE infinitive = 'dire'
  AND conjugations->'imperfetto' IS NULL;
-- bere (to drink) - IRREGULAR
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"imperfetto": {"conjugations": {"io": "bevevo", "tu": "bevevi", "luiLei": "beveva", "noi": "bevevamo", "voi": "bevevate", "loro": "bevevano"}}}'::jsonb
WHERE infinitive = 'bere'
  AND conjugations->'imperfetto' IS NULL;
-- tradurre (to translate) - IRREGULAR
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"imperfetto": {"conjugations": {"io": "traducevo", "tu": "traducevi", "luiLei": "traduceva", "noi": "traducevamo", "voi": "traducevate", "loro": "traducevano"}}}'::jsonb
WHERE infinitive = 'tradurre'
  AND conjugations->'imperfetto' IS NULL;
-- porre (to put/place) - IRREGULAR
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"imperfetto": {"conjugations": {"io": "ponevo", "tu": "ponevi", "luiLei": "poneva", "noi": "ponevamo", "voi": "ponevate", "loro": "ponevano"}}}'::jsonb
WHERE infinitive = 'porre'
  AND conjugations->'imperfetto' IS NULL;
-- condurre (to lead/drive) - IRREGULAR
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"imperfetto": {"conjugations": {"io": "conducevo", "tu": "conducevi", "luiLei": "conduceva", "noi": "conducevamo", "voi": "conducevate", "loro": "conducevano"}}}'::jsonb
WHERE infinitive = 'condurre'
  AND conjugations->'imperfetto' IS NULL;
-- produrre (to produce) - IRREGULAR
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"imperfetto": {"conjugations": {"io": "producevo", "tu": "producevi", "luiLei": "produceva", "noi": "producevamo", "voi": "producevate", "loro": "producevano"}}}'::jsonb
WHERE infinitive = 'produrre'
  AND conjugations->'imperfetto' IS NULL;
-- =============================================
-- Add regular_imperfetto column if it doesn't exist
-- =============================================
ALTER TABLE verbs
ADD COLUMN IF NOT EXISTS regular_imperfetto BOOLEAN DEFAULT true;
-- Update regular_imperfetto field based on whether the verb follows regular patterns
UPDATE verbs
SET regular_imperfetto = CASE
    WHEN infinitive IN (
      'essere',
      'fare',
      'dire',
      'bere',
      'tradurre',
      'porre',
      'condurre',
      'produrre'
    ) THEN false
    ELSE true
  END;
-- Create index for performance
CREATE INDEX IF NOT EXISTS idx_verbs_regular_imperfetto ON verbs(regular_imperfetto);
-- =============================================
-- Verification queries
-- =============================================
SELECT COUNT(*) as total_verbs,
  SUM(
    CASE
      WHEN conjugations->'imperfetto' IS NOT NULL THEN 1
      ELSE 0
    END
  ) as verbs_with_imperfetto,
  SUM(
    CASE
      WHEN regular_imperfetto = true THEN 1
      ELSE 0
    END
  ) as regular_imperfetto,
  SUM(
    CASE
      WHEN regular_imperfetto = false THEN 1
      ELSE 0
    END
  ) as irregular_imperfetto
FROM verbs;
-- Show some examples of regular verbs
SELECT infinitive,
  type,
  regular_imperfetto,
  conjugations->'imperfetto'->'conjugations' as imperfetto_conjugations
FROM verbs
WHERE regular_imperfetto = true
LIMIT 5;
-- Show all irregular verbs
SELECT infinitive,
  type,
  regular_imperfetto,
  conjugations->'imperfetto'->'conjugations' as imperfetto_conjugations
FROM verbs
WHERE regular_imperfetto = false
ORDER BY infinitive;