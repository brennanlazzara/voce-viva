-- Test database connection and show current verb count
SELECT 'Connection successful!' as status;
SELECT COUNT(*) as total_verbs,
    COUNT(*) FILTER (
        WHERE conjugations ? 'passatoProssimo'
    ) as verbs_with_passato_prossimo
FROM verbs;
-- Show a sample verb to verify structure
SELECT infinitive,
    type,
    auxiliary_verb,
    conjugations->'presenteIndicativo' as presente,
    conjugations->'passatoProssimo' as passato_prossimo
FROM verbs
WHERE infinitive = 'parlare';