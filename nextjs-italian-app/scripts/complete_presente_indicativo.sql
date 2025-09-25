-- Complete Presente Indicativo conjugations for ALL remaining verbs
-- This script dynamically adds presente conjugations for regular verb patterns

-- ARE VERBS (Regular pattern: o, i, a, iamo, ate, ano)
UPDATE verbs SET conjugations = COALESCE(conjugations, '{}'::jsonb) || ('{"presenteIndicativo": {"conjugations": {"io": "' || SUBSTRING(infinitive FROM 1 FOR LENGTH(infinitive)-3) || 'o", "tu": "' || SUBSTRING(infinitive FROM 1 FOR LENGTH(infinitive)-3) || 'i", "luiLei": "' || SUBSTRING(infinitive FROM 1 FOR LENGTH(infinitive)-3) || 'a", "noi": "' || SUBSTRING(infinitive FROM 1 FOR LENGTH(infinitive)-3) || 'iamo", "voi": "' || SUBSTRING(infinitive FROM 1 FOR LENGTH(infinitive)-3) || 'ate", "loro": "' || SUBSTRING(infinitive FROM 1 FOR LENGTH(infinitive)-3) || 'ano"}}}')::jsonb WHERE type = 'are' AND conjugations->'presenteIndicativo' IS NULL AND infinitive NOT IN ('dare', 'stare', 'andare', 'fare');

-- Special ARE verbs with spelling changes
-- Verbs ending in -iare (mangiare, studiare, etc.)
UPDATE verbs SET conjugations = COALESCE(conjugations, '{}'::jsonb) || ('{"presenteIndicativo": {"conjugations": {"io": "' || SUBSTRING(infinitive FROM 1 FOR LENGTH(infinitive)-4) || 'o", "tu": "' || SUBSTRING(infinitive FROM 1 FOR LENGTH(infinitive)-4) || 'i", "luiLei": "' || SUBSTRING(infinitive FROM 1 FOR LENGTH(infinitive)-4) || 'a", "noi": "' || SUBSTRING(infinitive FROM 1 FOR LENGTH(infinitive)-3) || 'amo", "voi": "' || SUBSTRING(infinitive FROM 1 FOR LENGTH(infinitive)-3) || 'ate", "loro": "' || SUBSTRING(infinitive FROM 1 FOR LENGTH(infinitive)-4) || 'ano"}}}')::jsonb WHERE type = 'are' AND conjugations->'presenteIndicativo' IS NULL AND infinitive LIKE '%iare' AND infinitive NOT IN ('dare', 'stare', 'andare', 'fare');

-- Verbs ending in -care and -gare (gioco/giochi, pago/paghi pattern)
UPDATE verbs SET conjugations = COALESCE(conjugations, '{}'::jsonb) || ('{"presenteIndicativo": {"conjugations": {"io": "' || SUBSTRING(infinitive FROM 1 FOR LENGTH(infinitive)-4) || 'o", "tu": "' || SUBSTRING(infinitive FROM 1 FOR LENGTH(infinitive)-4) || 'hi", "luiLei": "' || SUBSTRING(infinitive FROM 1 FOR LENGTH(infinitive)-4) || 'a", "noi": "' || SUBSTRING(infinitive FROM 1 FOR LENGTH(infinitive)-3) || 'amo", "voi": "' || SUBSTRING(infinitive FROM 1 FOR LENGTH(infinitive)-3) || 'ate", "loro": "' || SUBSTRING(infinitive FROM 1 FOR LENGTH(infinitive)-4) || 'ano"}}}')::jsonb WHERE type = 'are' AND conjugations->'presenteIndicativo' IS NULL AND infinitive LIKE '%care';

UPDATE verbs SET conjugations = COALESCE(conjugations, '{}'::jsonb) || ('{"presenteIndicativo": {"conjugations": {"io": "' || SUBSTRING(infinitive FROM 1 FOR LENGTH(infinitive)-4) || 'o", "tu": "' || SUBSTRING(infinitive FROM 1 FOR LENGTH(infinitive)-4) || 'hi", "luiLei": "' || SUBSTRING(infinitive FROM 1 FOR LENGTH(infinitive)-4) || 'a", "noi": "' || SUBSTRING(infinitive FROM 1 FOR LENGTH(infinitive)-3) || 'amo", "voi": "' || SUBSTRING(infinitive FROM 1 FOR LENGTH(infinitive)-3) || 'ate", "loro": "' || SUBSTRING(infinitive FROM 1 FOR LENGTH(infinitive)-4) || 'ano"}}}')::jsonb WHERE type = 'are' AND conjugations->'presenteIndicativo' IS NULL AND infinitive LIKE '%gare';

-- ERE VERBS (Regular pattern: o, i, e, iamo, ete, ono)
UPDATE verbs SET conjugations = COALESCE(conjugations, '{}'::jsonb) || ('{"presenteIndicativo": {"conjugations": {"io": "' || SUBSTRING(infinitive FROM 1 FOR LENGTH(infinitive)-3) || 'o", "tu": "' || SUBSTRING(infinitive FROM 1 FOR LENGTH(infinitive)-3) || 'i", "luiLei": "' || SUBSTRING(infinitive FROM 1 FOR LENGTH(infinitive)-3) || 'e", "noi": "' || SUBSTRING(infinitive FROM 1 FOR LENGTH(infinitive)-3) || 'iamo", "voi": "' || SUBSTRING(infinitive FROM 1 FOR LENGTH(infinitive)-3) || 'ete", "loro": "' || SUBSTRING(infinitive FROM 1 FOR LENGTH(infinitive)-3) || 'ono"}}}')::jsonb WHERE type = 'ere' AND conjugations->'presenteIndicativo' IS NULL AND infinitive NOT IN ('essere', 'avere', 'fare', 'dire', 'bere', 'porre', 'trarre', 'vedere', 'sapere', 'dovere', 'potere', 'volere', 'rimanere', 'tenere', 'venire', 'dare', 'stare');

-- IRE VERBS (Regular pattern: o, i, e, iamo, ite, ono)
UPDATE verbs SET conjugations = COALESCE(conjugations, '{}'::jsonb) || ('{"presenteIndicativo": {"conjugations": {"io": "' || SUBSTRING(infinitive FROM 1 FOR LENGTH(infinitive)-3) || 'o", "tu": "' || SUBSTRING(infinitive FROM 1 FOR LENGTH(infinitive)-3) || 'i", "luiLei": "' || SUBSTRING(infinitive FROM 1 FOR LENGTH(infinitive)-3) || 'e", "noi": "' || SUBSTRING(infinitive FROM 1 FOR LENGTH(infinitive)-3) || 'iamo", "voi": "' || SUBSTRING(infinitive FROM 1 FOR LENGTH(infinitive)-3) || 'ite", "loro": "' || SUBSTRING(infinitive FROM 1 FOR LENGTH(infinitive)-3) || 'ono"}}}')::jsonb WHERE type = 'ire' AND conjugations->'presenteIndicativo' IS NULL AND infinitive NOT IN ('venire', 'dire', 'uscire', 'salire', 'morire');

-- IRE VERBS with ISC infix (finisco pattern)
UPDATE verbs SET conjugations = COALESCE(conjugations, '{}'::jsonb) || ('{"presenteIndicativo": {"conjugations": {"io": "' || SUBSTRING(infinitive FROM 1 FOR LENGTH(infinitive)-3) || 'isco", "tu": "' || SUBSTRING(infinitive FROM 1 FOR LENGTH(infinitive)-3) || 'isci", "luiLei": "' || SUBSTRING(infinitive FROM 1 FOR LENGTH(infinitive)-3) || 'isce", "noi": "' || SUBSTRING(infinitive FROM 1 FOR LENGTH(infinitive)-3) || 'iamo", "voi": "' || SUBSTRING(infinitive FROM 1 FOR LENGTH(infinitive)-3) || 'ite", "loro": "' || SUBSTRING(infinitive FROM 1 FOR LENGTH(infinitive)-3) || 'iscono"}}}')::jsonb WHERE infinitive IN ('finire', 'capire', 'preferire', 'costruire', 'pulire', 'spedire', 'tradire', 'guarire', 'starire', 'ferire', 'mentire', 'servire', 'divertire', 'convertire', 'offrire', 'soffrire', 'coprire', 'scoprire') AND conjugations->'presenteIndicativo' IS NULL;

-- Manual fixes for specific irregular verbs that weren't covered above
UPDATE verbs SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"presenteIndicativo": {"conjugations": {"io": "do", "tu": "dai", "luiLei": "dà", "noi": "diamo", "voi": "date", "loro": "danno"}}}'::jsonb WHERE infinitive = 'dare' AND conjugations->'presenteIndicativo' IS NULL;

UPDATE verbs SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"presenteIndicativo": {"conjugations": {"io": "sto", "tu": "stai", "luiLei": "sta", "noi": "stiamo", "voi": "state", "loro": "stanno"}}}'::jsonb WHERE infinitive = 'stare' AND conjugations->'presenteIndicativo' IS NULL;

UPDATE verbs SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"presenteIndicativo": {"conjugations": {"io": "vado", "tu": "vai", "luiLei": "va", "noi": "andiamo", "voi": "andate", "loro": "vanno"}}}'::jsonb WHERE infinitive = 'andare' AND conjugations->'presenteIndicativo' IS NULL;

UPDATE verbs SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"presenteIndicativo": {"conjugations": {"io": "bevo", "tu": "bevi", "luiLei": "beve", "noi": "beviamo", "voi": "bevete", "loro": "bevono"}}}'::jsonb WHERE infinitive = 'bere' AND conjugations->'presenteIndicativo' IS NULL;

UPDATE verbs SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"presenteIndicativo": {"conjugations": {"io": "devo", "tu": "devi", "luiLei": "deve", "noi": "dobbiamo", "voi": "dovete", "loro": "devono"}}}'::jsonb WHERE infinitive = 'dovere' AND conjugations->'presenteIndicativo' IS NULL;

UPDATE verbs SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"presenteIndicativo": {"conjugations": {"io": "posso", "tu": "puoi", "luiLei": "può", "noi": "possiamo", "voi": "potete", "loro": "possono"}}}'::jsonb WHERE infinitive = 'potere' AND conjugations->'presenteIndicativo' IS NULL;

UPDATE verbs SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"presenteIndicativo": {"conjugations": {"io": "voglio", "tu": "vuoi", "luiLei": "vuole", "noi": "vogliamo", "voi": "volete", "loro": "vogliono"}}}'::jsonb WHERE infinitive = 'volere' AND conjugations->'presenteIndicativo' IS NULL;

UPDATE verbs SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"presenteIndicativo": {"conjugations": {"io": "esco", "tu": "esci", "luiLei": "esce", "noi": "usciamo", "voi": "uscite", "loro": "escono"}}}'::jsonb WHERE infinitive = 'uscire' AND conjugations->'presenteIndicativo' IS NULL;

-- Verification query
-- SELECT COUNT(*) as total_verbs, COUNT(CASE WHEN conjugations->'presenteIndicativo' IS NOT NULL THEN 1 END) as with_presente FROM verbs;