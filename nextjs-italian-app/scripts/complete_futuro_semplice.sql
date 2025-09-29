-- Complete Futuro Semplice conjugations for ALL verbs
-- This script adds futuro semplice conjugations following regular patterns
-- =============================================
-- ARE VERBS (Regular pattern: erò, erai, erà, eremo, erete, eranno)
-- Remove "are" and add endings
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || (
    '{"futuroSemplice": {"conjugations": {"io": "' || SUBSTRING(
      infinitive
      FROM 1 FOR LENGTH(infinitive) -3
    ) || 'erò", "tu": "' || SUBSTRING(
      infinitive
      FROM 1 FOR LENGTH(infinitive) -3
    ) || 'erai", "luiLei": "' || SUBSTRING(
      infinitive
      FROM 1 FOR LENGTH(infinitive) -3
    ) || 'erà", "noi": "' || SUBSTRING(
      infinitive
      FROM 1 FOR LENGTH(infinitive) -3
    ) || 'eremo", "voi": "' || SUBSTRING(
      infinitive
      FROM 1 FOR LENGTH(infinitive) -3
    ) || 'erete", "loro": "' || SUBSTRING(
      infinitive
      FROM 1 FOR LENGTH(infinitive) -3
    ) || 'eranno"}}}'
  )::jsonb
WHERE type = 'are'
  AND conjugations->'futuroSemplice' IS NULL
  AND infinitive NOT IN ('dare', 'stare', 'andare', 'fare');
-- ERE VERBS (Regular pattern: erò, erai, erà, eremo, erete, eranno)
-- Remove "ere" and add endings
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || (
    '{"futuroSemplice": {"conjugations": {"io": "' || SUBSTRING(
      infinitive
      FROM 1 FOR LENGTH(infinitive) -3
    ) || 'erò", "tu": "' || SUBSTRING(
      infinitive
      FROM 1 FOR LENGTH(infinitive) -3
    ) || 'erai", "luiLei": "' || SUBSTRING(
      infinitive
      FROM 1 FOR LENGTH(infinitive) -3
    ) || 'erà", "noi": "' || SUBSTRING(
      infinitive
      FROM 1 FOR LENGTH(infinitive) -3
    ) || 'eremo", "voi": "' || SUBSTRING(
      infinitive
      FROM 1 FOR LENGTH(infinitive) -3
    ) || 'erete", "loro": "' || SUBSTRING(
      infinitive
      FROM 1 FOR LENGTH(infinitive) -3
    ) || 'eranno"}}}'
  )::jsonb
WHERE type = 'ere'
  AND conjugations->'futuroSemplice' IS NULL
  AND infinitive NOT IN (
    'essere',
    'avere',
    'fare',
    'dire',
    'bere',
    'porre',
    'trarre',
    'vedere',
    'sapere',
    'dovere',
    'potere',
    'volere',
    'rimanere',
    'tenere',
    'venire',
    'dare',
    'stare',
    'cadere',
    'vivere'
  );
-- IRE VERBS (Regular pattern: irò, irai, irà, iremo, irete, iranno)
-- Remove "ire" and add endings
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || (
    '{"futuroSemplice": {"conjugations": {"io": "' || SUBSTRING(
      infinitive
      FROM 1 FOR LENGTH(infinitive) -3
    ) || 'irò", "tu": "' || SUBSTRING(
      infinitive
      FROM 1 FOR LENGTH(infinitive) -3
    ) || 'irai", "luiLei": "' || SUBSTRING(
      infinitive
      FROM 1 FOR LENGTH(infinitive) -3
    ) || 'irà", "noi": "' || SUBSTRING(
      infinitive
      FROM 1 FOR LENGTH(infinitive) -3
    ) || 'iremo", "voi": "' || SUBSTRING(
      infinitive
      FROM 1 FOR LENGTH(infinitive) -3
    ) || 'irete", "loro": "' || SUBSTRING(
      infinitive
      FROM 1 FOR LENGTH(infinitive) -3
    ) || 'iranno"}}}'
  )::jsonb
WHERE type = 'ire'
  AND conjugations->'futuroSemplice' IS NULL
  AND infinitive NOT IN ('venire', 'dire', 'uscire', 'salire', 'morire');
-- =============================================
-- IRREGULAR VERBS - Common High-Frequency Irregulars
-- =============================================
-- ESSERE (to be) - sarò, sarai, sarà, saremo, sarete, saranno
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"futuroSemplice": {"conjugations": {"io": "sarò", "tu": "sarai", "luiLei": "sarà", "noi": "saremo", "voi": "sarete", "loro": "saranno"}}}'::jsonb
WHERE infinitive = 'essere'
  AND conjugations->'futuroSemplice' IS NULL;
-- AVERE (to have) - avrò, avrai, avrà, avremo, avrete, avranno
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"futuroSemplice": {"conjugations": {"io": "avrò", "tu": "avrai", "luiLei": "avrà", "noi": "avremo", "voi": "avrete", "loro": "avranno"}}}'::jsonb
WHERE infinitive = 'avere'
  AND conjugations->'futuroSemplice' IS NULL;
-- DARE (to give) - darò, darai, darà, daremo, darete, daranno
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"futuroSemplice": {"conjugations": {"io": "darò", "tu": "darai", "luiLei": "darà", "noi": "daremo", "voi": "darete", "loro": "daranno"}}}'::jsonb
WHERE infinitive = 'dare'
  AND conjugations->'futuroSemplice' IS NULL;
-- STARE (to stay/be) - starò, starai, starà, staremo, starete, staranno
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"futuroSemplice": {"conjugations": {"io": "starò", "tu": "starai", "luiLei": "starà", "noi": "staremo", "voi": "starete", "loro": "staranno"}}}'::jsonb
WHERE infinitive = 'stare'
  AND conjugations->'futuroSemplice' IS NULL;
-- FARE (to do/make) - farò, farai, farà, faremo, farete, faranno
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"futuroSemplice": {"conjugations": {"io": "farò", "tu": "farai", "luiLei": "farà", "noi": "faremo", "voi": "farete", "loro": "faranno"}}}'::jsonb
WHERE infinitive = 'fare'
  AND conjugations->'futuroSemplice' IS NULL;
-- ANDARE (to go) - andrò, andrai, andrà, andremo, andrete, andranno
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"futuroSemplice": {"conjugations": {"io": "andrò", "tu": "andrai", "luiLei": "andrà", "noi": "andremo", "voi": "andrete", "loro": "andranno"}}}'::jsonb
WHERE infinitive = 'andare'
  AND conjugations->'futuroSemplice' IS NULL;
-- BERE (to drink) - berrò, berrai, berrà, berremo, berrete, berranno
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"futuroSemplice": {"conjugations": {"io": "berrò", "tu": "berrai", "luiLei": "berrà", "noi": "berremo", "voi": "berrete", "loro": "berranno"}}}'::jsonb
WHERE infinitive = 'bere'
  AND conjugations->'futuroSemplice' IS NULL;
-- DIRE (to say/tell) - dirò, dirai, dirà, diremo, direte, diranno
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"futuroSemplice": {"conjugations": {"io": "dirò", "tu": "dirai", "luiLei": "dirà", "noi": "diremo", "voi": "direte", "loro": "diranno"}}}'::jsonb
WHERE infinitive = 'dire'
  AND conjugations->'futuroSemplice' IS NULL;
-- DOVERE (must/to have to) - dovrò, dovrai, dovrà, dovremo, dovrete, dovranno
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"futuroSemplice": {"conjugations": {"io": "dovrò", "tu": "dovrai", "luiLei": "dovrà", "noi": "dovremo", "voi": "dovrete", "loro": "dovranno"}}}'::jsonb
WHERE infinitive = 'dovere'
  AND conjugations->'futuroSemplice' IS NULL;
-- POTERE (can/to be able to) - potrò, potrai, potrà, potremo, potrete, potranno
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"futuroSemplice": {"conjugations": {"io": "potrò", "tu": "potrai", "luiLei": "potrà", "noi": "potremo", "voi": "potrete", "loro": "potranno"}}}'::jsonb
WHERE infinitive = 'potere'
  AND conjugations->'futuroSemplice' IS NULL;
-- VOLERE (to want) - vorrò, vorrai, vorrà, vorremo, vorrete, vorranno
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"futuroSemplice": {"conjugations": {"io": "vorrò", "tu": "vorrai", "luiLei": "vorrà", "noi": "vorremo", "voi": "vorrete", "loro": "vorranno"}}}'::jsonb
WHERE infinitive = 'volere'
  AND conjugations->'futuroSemplice' IS NULL;
-- SAPERE (to know) - saprò, saprai, saprà, sapremo, saprete, sapranno
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"futuroSemplice": {"conjugations": {"io": "saprò", "tu": "saprai", "luiLei": "saprà", "noi": "sapremo", "voi": "saprete", "loro": "sapranno"}}}'::jsonb
WHERE infinitive = 'sapere'
  AND conjugations->'futuroSemplice' IS NULL;
-- VEDERE (to see) - vedrò, vedrai, vedrà, vedremo, vedrete, vedranno
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"futuroSemplice": {"conjugations": {"io": "vedrò", "tu": "vedrai", "luiLei": "vedrà", "noi": "vedremo", "voi": "vedrete", "loro": "vedranno"}}}'::jsonb
WHERE infinitive = 'vedere'
  AND conjugations->'futuroSemplice' IS NULL;
-- VENIRE (to come) - verrò, verrai, verrà, verremo, verrete, verranno
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"futuroSemplice": {"conjugations": {"io": "verrò", "tu": "verrai", "luiLei": "verrà", "noi": "verremo", "voi": "verrete", "loro": "verranno"}}}'::jsonb
WHERE infinitive = 'venire'
  AND conjugations->'futuroSemplice' IS NULL;
-- VIVERE (to live) - vivrò, vivrai, vivrà, vivremo, vivrete, vivranno
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"futuroSemplice": {"conjugations": {"io": "vivrò", "tu": "vivrai", "luiLei": "vivrà", "noi": "vivremo", "voi": "vivrete", "loro": "vivranno"}}}'::jsonb
WHERE infinitive = 'vivere'
  AND conjugations->'futuroSemplice' IS NULL;
-- CADERE (to fall) - cadrò, cadrai, cadrà, cadremo, cadrete, cadranno
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"futuroSemplice": {"conjugations": {"io": "cadrò", "tu": "cadrai", "luiLei": "cadrà", "noi": "cadremo", "voi": "cadrete", "loro": "cadranno"}}}'::jsonb
WHERE infinitive = 'cadere'
  AND conjugations->'futuroSemplice' IS NULL;
-- TENERE (to keep/hold) - terrò, terrai, terrà, terremo, terrete, terranno
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"futuroSemplice": {"conjugations": {"io": "terrò", "tu": "terrai", "luiLei": "terrà", "noi": "terremo", "voi": "terrete", "loro": "terranno"}}}'::jsonb
WHERE infinitive = 'tenere'
  AND conjugations->'futuroSemplice' IS NULL;
-- RIMANERE (to remain/stay) - rimarrò, rimarrai, rimarrà, rimarremo, rimarrete, rimarranno
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"futuroSemplice": {"conjugations": {"io": "rimarrò", "tu": "rimarrai", "luiLei": "rimarrà", "noi": "rimarremo", "voi": "rimarrete", "loro": "rimarranno"}}}'::jsonb
WHERE infinitive = 'rimanere'
  AND conjugations->'futuroSemplice' IS NULL;
-- USCIRE (to go out/exit) - uscirò, uscirai, uscirà, usciremo, uscirete, usciranno
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"futuroSemplice": {"conjugations": {"io": "uscirò", "tu": "uscirai", "luiLei": "uscirà", "noi": "usciremo", "voi": "uscirete", "loro": "usciranno"}}}'::jsonb
WHERE infinitive = 'uscire'
  AND conjugations->'futuroSemplice' IS NULL;
-- SALIRE (to go up/climb) - salirò, salirai, salirà, saliremo, salirete, saliranno
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"futuroSemplice": {"conjugations": {"io": "salirò", "tu": "salirai", "luiLei": "salirà", "noi": "saliremo", "voi": "salirete", "loro": "saliranno"}}}'::jsonb
WHERE infinitive = 'salire'
  AND conjugations->'futuroSemplice' IS NULL;
-- MORIRE (to die) - morirò/morrò, morirai/morrai, morirà/morrà, moriremo/morremo, morirete/morrete, moriranno/morranno
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"futuroSemplice": {"conjugations": {"io": "morrò", "tu": "morrai", "luiLei": "morrà", "noi": "morremo", "voi": "morrete", "loro": "morranno"}}}'::jsonb
WHERE infinitive = 'morire'
  AND conjugations->'futuroSemplice' IS NULL;
-- Add regular_futuro_semplice column if it doesn't exist
ALTER TABLE verbs
ADD COLUMN IF NOT EXISTS regular_futuro_semplice BOOLEAN DEFAULT true;
-- Update regular_futuro_semplice field based on whether the verb follows regular patterns
UPDATE verbs
SET regular_futuro_semplice = CASE
    WHEN infinitive IN (
      'essere',
      'avere',
      'dare',
      'stare',
      'fare',
      'andare',
      'bere',
      'dire',
      'dovere',
      'potere',
      'volere',
      'sapere',
      'vedere',
      'venire',
      'vivere',
      'cadere',
      'tenere',
      'rimanere',
      'uscire',
      'salire',
      'morire'
    ) THEN false
    ELSE true
  END
WHERE conjugations->'futuroSemplice' IS NOT NULL;
-- Final verification query
SELECT COUNT(*) as total_verbs,
  COUNT(
    CASE
      WHEN conjugations->'futuroSemplice' IS NOT NULL THEN 1
    END
  ) as with_futuro_semplice,
  COUNT(
    CASE
      WHEN regular_futuro_semplice = true THEN 1
    END
  ) as regular_futuro,
  COUNT(
    CASE
      WHEN regular_futuro_semplice = false THEN 1
    END
  ) as irregular_futuro
FROM verbs;