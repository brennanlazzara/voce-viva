-- Fix script for verbs with NULL/empty conjugations
-- Use COALESCE to handle NULL conjugations properly
-- Test first with parlare
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{
  "passatoProssimo": {
    "pastParticiple": {"base": "parlato", "irregular": false},
    "conjugations": {"io": "ho parlato", "tu": "hai parlato", "luiLei": "ha parlato", "noi": "abbiamo parlato", "voi": "avete parlato", "loro": "hanno parlato"}
  }
}'::jsonb
WHERE infinitive = 'parlare'
  AND (
    conjugations->'passatoProssimo' IS NULL
    OR conjugations IS NULL
  );
-- Check if it worked
SELECT infinitive,
  conjugations->'passatoProssimo'->'pastParticiple'->>'base' as past_participle
FROM verbs
WHERE infinitive = 'parlare';