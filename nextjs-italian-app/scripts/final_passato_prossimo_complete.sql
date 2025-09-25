-- Final Passato Prossimo completion script with NULL handling
-- Uses COALESCE to properly handle NULL conjugations
-- Update ALL remaining verbs that don't have Passato Prossimo data
-- This script handles both NULL conjugations and missing passatoProssimo keys
-- ARE VERBS - AVERE auxiliary (regular -ato pattern)
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"passatoProssimo": {"pastParticiple": {"base": "abitato", "irregular": false}, "conjugations": {"io": "ho abitato", "tu": "hai abitato", "luiLei": "ha abitato", "noi": "abbiamo abitato", "voi": "avete abitato", "loro": "hanno abitato"}}}'::jsonb
WHERE infinitive = 'abitare'
    AND (conjugations->'passatoProssimo' IS NULL);
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"passatoProssimo": {"pastParticiple": {"base": "aiutato", "irregular": false}, "conjugations": {"io": "ho aiutato", "tu": "hai aiutato", "luiLei": "ha aiutato", "noi": "abbiamo aiutato", "voi": "avete aiutato", "loro": "hanno aiutato"}}}'::jsonb
WHERE infinitive = 'aiutare'
    AND (conjugations->'passatoProssimo' IS NULL);
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"passatoProssimo": {"pastParticiple": {"base": "amato", "irregular": false}, "conjugations": {"io": "ho amato", "tu": "hai amato", "luiLei": "ha amato", "noi": "abbiamo amato", "voi": "avete amato", "loro": "hanno amato"}}}'::jsonb
WHERE infinitive = 'amare'
    AND (conjugations->'passatoProssimo' IS NULL);
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"passatoProssimo": {"pastParticiple": {"base": "ascoltato", "irregular": false}, "conjugations": {"io": "ho ascoltato", "tu": "hai ascoltato", "luiLei": "ha ascoltato", "noi": "abbiamo ascoltato", "voi": "avete ascoltato", "loro": "hanno ascoltato"}}}'::jsonb
WHERE infinitive = 'ascoltare'
    AND (conjugations->'passatoProssimo' IS NULL);
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"passatoProssimo": {"pastParticiple": {"base": "aspettato", "irregular": false}, "conjugations": {"io": "ho aspettato", "tu": "hai aspettato", "luiLei": "ha aspettato", "noi": "abbiamo aspettato", "voi": "avete aspettato", "loro": "hanno aspettato"}}}'::jsonb
WHERE infinitive = 'aspettare'
    AND (conjugations->'passatoProssimo' IS NULL);
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"passatoProssimo": {"pastParticiple": {"base": "cambiato", "irregular": false}, "conjugations": {"io": "ho cambiato", "tu": "hai cambiato", "luiLei": "ha cambiato", "noi": "abbiamo cambiato", "voi": "avete cambiato", "loro": "hanno cambiato"}}}'::jsonb
WHERE infinitive = 'cambiare'
    AND (conjugations->'passatoProssimo' IS NULL);
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"passatoProssimo": {"pastParticiple": {"base": "camminato", "irregular": false}, "conjugations": {"io": "ho camminato", "tu": "hai camminato", "luiLei": "ha camminato", "noi": "abbiamo camminato", "voi": "avete camminato", "loro": "hanno camminato"}}}'::jsonb
WHERE infinitive = 'camminare'
    AND (conjugations->'passatoProssimo' IS NULL);
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"passatoProssimo": {"pastParticiple": {"base": "cantato", "irregular": false}, "conjugations": {"io": "ho cantato", "tu": "hai cantato", "luiLei": "ha cantato", "noi": "abbiamo cantato", "voi": "avete cantato", "loro": "hanno cantato"}}}'::jsonb
WHERE infinitive = 'cantare'
    AND (conjugations->'passatoProssimo' IS NULL);
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"passatoProssimo": {"pastParticiple": {"base": "chiamato", "irregular": false}, "conjugations": {"io": "ho chiamato", "tu": "hai chiamato", "luiLei": "ha chiamato", "noi": "abbiamo chiamato", "voi": "avete chiamato", "loro": "hanno chiamato"}}}'::jsonb
WHERE infinitive = 'chiamare'
    AND (conjugations->'passatoProssimo' IS NULL);
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"passatoProssimo": {"pastParticiple": {"base": "cominciato", "irregular": false}, "conjugations": {"io": "ho cominciato", "tu": "hai cominciato", "luiLei": "ha cominciato", "noi": "abbiamo cominciato", "voi": "avete cominciato", "loro": "hanno cominciato"}}}'::jsonb
WHERE infinitive = 'cominciare'
    AND (conjugations->'passatoProssimo' IS NULL);
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"passatoProssimo": {"pastParticiple": {"base": "comprato", "irregular": false}, "conjugations": {"io": "ho comprato", "tu": "hai comprato", "luiLei": "ha comprato", "noi": "abbiamo comprato", "voi": "avete comprato", "loro": "hanno comprato"}}}'::jsonb
WHERE infinitive = 'comprare'
    AND (conjugations->'passatoProssimo' IS NULL);
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"passatoProssimo": {"pastParticiple": {"base": "cucinato", "irregular": false}, "conjugations": {"io": "ho cucinato", "tu": "hai cucinato", "luiLei": "ha cucinato", "noi": "abbiamo cucinato", "voi": "avete cucinato", "loro": "hanno cucinato"}}}'::jsonb
WHERE infinitive = 'cucinare'
    AND (conjugations->'passatoProssimo' IS NULL);
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"passatoProssimo": {"pastParticiple": {"base": "dimenticato", "irregular": false}, "conjugations": {"io": "ho dimenticato", "tu": "hai dimenticato", "luiLei": "ha dimenticato", "noi": "abbiamo dimenticato", "voi": "avete dimenticato", "loro": "hanno dimenticato"}}}'::jsonb
WHERE infinitive = 'dimenticare'
    AND (conjugations->'passatoProssimo' IS NULL);
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"passatoProssimo": {"pastParticiple": {"base": "giocato", "irregular": false}, "conjugations": {"io": "ho giocato", "tu": "hai giocato", "luiLei": "ha giocato", "noi": "abbiamo giocato", "voi": "avete giocato", "loro": "hanno giocato"}}}'::jsonb
WHERE infinitive = 'giocare'
    AND (conjugations->'passatoProssimo' IS NULL);
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"passatoProssimo": {"pastParticiple": {"base": "guardato", "irregular": false}, "conjugations": {"io": "ho guardato", "tu": "hai guardato", "luiLei": "ha guardato", "noi": "abbiamo guardato", "voi": "avete guardato", "loro": "hanno guardato"}}}'::jsonb
WHERE infinitive = 'guardare'
    AND (conjugations->'passatoProssimo' IS NULL);
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"passatoProssimo": {"pastParticiple": {"base": "imparato", "irregular": false}, "conjugations": {"io": "ho imparato", "tu": "hai imparato", "luiLei": "ha imparato", "noi": "abbiamo imparato", "voi": "avete imparato", "loro": "hanno imparato"}}}'::jsonb
WHERE infinitive = 'imparare'
    AND (conjugations->'passatoProssimo' IS NULL);
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"passatoProssimo": {"pastParticiple": {"base": "incontrato", "irregular": false}, "conjugations": {"io": "ho incontrato", "tu": "hai incontrato", "luiLei": "ha incontrato", "noi": "abbiamo incontrato", "voi": "avete incontrato", "loro": "hanno incontrato"}}}'::jsonb
WHERE infinitive = 'incontrare'
    AND (conjugations->'passatoProssimo' IS NULL);
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"passatoProssimo": {"pastParticiple": {"base": "insegnato", "irregular": false}, "conjugations": {"io": "ho insegnato", "tu": "hai insegnato", "luiLei": "ha insegnato", "noi": "abbiamo insegnato", "voi": "avete insegnato", "loro": "hanno insegnato"}}}'::jsonb
WHERE infinitive = 'insegnare'
    AND (conjugations->'passatoProssimo' IS NULL);
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"passatoProssimo": {"pastParticiple": {"base": "lasciato", "irregular": false}, "conjugations": {"io": "ho lasciato", "tu": "hai lasciato", "luiLei": "ha lasciato", "noi": "abbiamo lasciato", "voi": "avete lasciato", "loro": "hanno lasciato"}}}'::jsonb
WHERE infinitive = 'lasciare'
    AND (conjugations->'passatoProssimo' IS NULL);
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"passatoProssimo": {"pastParticiple": {"base": "lavorato", "irregular": false}, "conjugations": {"io": "ho lavorato", "tu": "hai lavorato", "luiLei": "ha lavorato", "noi": "abbiamo lavorato", "voi": "avete lavorato", "loro": "hanno lavorato"}}}'::jsonb
WHERE infinitive = 'lavorare'
    AND (conjugations->'passatoProssimo' IS NULL);
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"passatoProssimo": {"pastParticiple": {"base": "mandato", "irregular": false}, "conjugations": {"io": "ho mandato", "tu": "hai mandato", "luiLei": "ha mandato", "noi": "abbiamo mandato", "voi": "avete mandato", "loro": "hanno mandato"}}}'::jsonb
WHERE infinitive = 'mandare'
    AND (conjugations->'passatoProssimo' IS NULL);
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"passatoProssimo": {"pastParticiple": {"base": "mangiato", "irregular": false}, "conjugations": {"io": "ho mangiato", "tu": "hai mangiato", "luiLei": "ha mangiato", "noi": "abbiamo mangiato", "voi": "avete mangiato", "loro": "hanno mangiato"}}}'::jsonb
WHERE infinitive = 'mangiare'
    AND (conjugations->'passatoProssimo' IS NULL);
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"passatoProssimo": {"pastParticiple": {"base": "ordinato", "irregular": false}, "conjugations": {"io": "ho ordinato", "tu": "hai ordinato", "luiLei": "ha ordinato", "noi": "abbiamo ordinato", "voi": "avete ordinato", "loro": "hanno ordinato"}}}'::jsonb
WHERE infinitive = 'ordinare'
    AND (conjugations->'passatoProssimo' IS NULL);
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"passatoProssimo": {"pastParticiple": {"base": "pagato", "irregular": false}, "conjugations": {"io": "ho pagato", "tu": "hai pagato", "luiLei": "ha pagato", "noi": "abbiamo pagato", "voi": "avete pagato", "loro": "hanno pagato"}}}'::jsonb
WHERE infinitive = 'pagare'
    AND (conjugations->'passatoProssimo' IS NULL);
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"passatoProssimo": {"pastParticiple": {"base": "passato", "irregular": false}, "conjugations": {"io": "ho passato", "tu": "hai passato", "luiLei": "ha passato", "noi": "abbiamo passato", "voi": "avete passato", "loro": "hanno passato"}}}'::jsonb
WHERE infinitive = 'passare'
    AND (conjugations->'passatoProssimo' IS NULL);
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"passatoProssimo": {"pastParticiple": {"base": "pensato", "irregular": false}, "conjugations": {"io": "ho pensato", "tu": "hai pensato", "luiLei": "ha pensato", "noi": "abbiamo pensato", "voi": "avete pensato", "loro": "hanno pensato"}}}'::jsonb
WHERE infinitive = 'pensare'
    AND (conjugations->'passatoProssimo' IS NULL);
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"passatoProssimo": {"pastParticiple": {"base": "portato", "irregular": false}, "conjugations": {"io": "ho portato", "tu": "hai portato", "luiLei": "ha portato", "noi": "abbiamo portato", "voi": "avete portato", "loro": "hanno portato"}}}'::jsonb
WHERE infinitive = 'portare'
    AND (conjugations->'passatoProssimo' IS NULL);
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"passatoProssimo": {"pastParticiple": {"base": "preparato", "irregular": false}, "conjugations": {"io": "ho preparato", "tu": "hai preparato", "luiLei": "ha preparato", "noi": "abbiamo preparato", "voi": "avete preparato", "loro": "hanno preparato"}}}'::jsonb
WHERE infinitive = 'preparare'
    AND (conjugations->'passatoProssimo' IS NULL);
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"passatoProssimo": {"pastParticiple": {"base": "provato", "irregular": false}, "conjugations": {"io": "ho provato", "tu": "hai provato", "luiLei": "ha provato", "noi": "abbiamo provato", "voi": "avete provato", "loro": "hanno provato"}}}'::jsonb
WHERE infinitive = 'provare'
    AND (conjugations->'passatoProssimo' IS NULL);
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"passatoProssimo": {"pastParticiple": {"base": "ricordato", "irregular": false}, "conjugations": {"io": "ho ricordato", "tu": "hai ricordato", "luiLei": "ha ricordato", "noi": "abbiamo ricordato", "voi": "avete ricordato", "loro": "hanno ricordato"}}}'::jsonb
WHERE infinitive = 'ricordare'
    AND (conjugations->'passatoProssimo' IS NULL);
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"passatoProssimo": {"pastParticiple": {"base": "studiato", "irregular": false}, "conjugations": {"io": "ho studiato", "tu": "hai studiato", "luiLei": "ha studiato", "noi": "abbiamo studiato", "voi": "avete studiato", "loro": "hanno studiato"}}}'::jsonb
WHERE infinitive = 'studiare'
    AND (conjugations->'passatoProssimo' IS NULL);
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"passatoProssimo": {"pastParticiple": {"base": "suonato", "irregular": false}, "conjugations": {"io": "ho suonato", "tu": "hai suonato", "luiLei": "ha suonato", "noi": "abbiamo suonato", "voi": "avete suonato", "loro": "hanno suonato"}}}'::jsonb
WHERE infinitive = 'suonare'
    AND (conjugations->'passatoProssimo' IS NULL);
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"passatoProssimo": {"pastParticiple": {"base": "trovato", "irregular": false}, "conjugations": {"io": "ho trovato", "tu": "hai trovato", "luiLei": "ha trovato", "noi": "abbiamo trovato", "voi": "avete trovato", "loro": "hanno trovato"}}}'::jsonb
WHERE infinitive = 'trovare'
    AND (conjugations->'passatoProssimo' IS NULL);
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"passatoProssimo": {"pastParticiple": {"base": "usato", "irregular": false}, "conjugations": {"io": "ho usato", "tu": "hai usato", "luiLei": "ha usato", "noi": "abbiamo usato", "voi": "avete usato", "loro": "hanno usato"}}}'::jsonb
WHERE infinitive = 'usare'
    AND (conjugations->'passatoProssimo' IS NULL);
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"passatoProssimo": {"pastParticiple": {"base": "viaggiato", "irregular": false}, "conjugations": {"io": "ho viaggiato", "tu": "hai viaggiato", "luiLei": "ha viaggiato", "noi": "abbiamo viaggiato", "voi": "avete viaggiato", "loro": "hanno viaggiato"}}}'::jsonb
WHERE infinitive = 'viaggiare'
    AND (conjugations->'passatoProssimo' IS NULL);
-- ARE VERBS - ESSERE auxiliary (motion/change of state)
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"passatoProssimo": {"pastParticiple": {"base": "arrivato", "irregular": false}, "conjugations": {"io": "sono arrivato/a", "tu": "sei arrivato/a", "luiLei": "è arrivato/a", "noi": "siamo arrivati/e", "voi": "siete arrivati/e", "loro": "sono arrivati/e"}}}'::jsonb
WHERE infinitive = 'arrivare'
    AND (conjugations->'passatoProssimo' IS NULL);
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"passatoProssimo": {"pastParticiple": {"base": "entrato", "irregular": false}, "conjugations": {"io": "sono entrato/a", "tu": "sei entrato/a", "luiLei": "è entrato/a", "noi": "siamo entrati/e", "voi": "siete entrati/e", "loro": "sono entrati/e"}}}'::jsonb
WHERE infinitive = 'entrare'
    AND (conjugations->'passatoProssimo' IS NULL);
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"passatoProssimo": {"pastParticiple": {"base": "tornato", "irregular": false}, "conjugations": {"io": "sono tornato/a", "tu": "sei tornato/a", "luiLei": "è tornato/a", "noi": "siamo tornati/e", "voi": "siete tornati/e", "loro": "sono tornati/e"}}}'::jsonb
WHERE infinitive = 'tornare'
    AND (conjugations->'passatoProssimo' IS NULL);
-- ERE VERBS - Regular (-uto ending)
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"passatoProssimo": {"pastParticiple": {"base": "creduto", "irregular": false}, "conjugations": {"io": "ho creduto", "tu": "hai creduto", "luiLei": "ha creduto", "noi": "abbiamo creduto", "voi": "avete creduto", "loro": "hanno creduto"}}}'::jsonb
WHERE infinitive = 'credere'
    AND (conjugations->'passatoProssimo' IS NULL);
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"passatoProssimo": {"pastParticiple": {"base": "ricevuto", "irregular": false}, "conjugations": {"io": "ho ricevuto", "tu": "hai ricevuto", "luiLei": "ha ricevuto", "noi": "abbiamo ricevuto", "voi": "avete ricevuto", "loro": "hanno ricevuto"}}}'::jsonb
WHERE infinitive = 'ricevere'
    AND (conjugations->'passatoProssimo' IS NULL);
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"passatoProssimo": {"pastParticiple": {"base": "venduto", "irregular": false}, "conjugations": {"io": "ho venduto", "tu": "hai venduto", "luiLei": "ha venduto", "noi": "abbiamo venduto", "voi": "avete venduto", "loro": "hanno venduto"}}}'::jsonb
WHERE infinitive = 'vendere'
    AND (conjugations->'passatoProssimo' IS NULL);
-- ERE VERBS - Irregular past participles
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"passatoProssimo": {"pastParticiple": {"base": "chiesto", "irregular": true}, "conjugations": {"io": "ho chiesto", "tu": "hai chiesto", "luiLei": "ha chiesto", "noi": "abbiamo chiesto", "voi": "avete chiesto", "loro": "hanno chiesto"}}}'::jsonb
WHERE infinitive = 'chiedere'
    AND (conjugations->'passatoProssimo' IS NULL);
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"passatoProssimo": {"pastParticiple": {"base": "conosciuto", "irregular": true}, "conjugations": {"io": "ho conosciuto", "tu": "hai conosciuto", "luiLei": "ha conosciuto", "noi": "abbiamo conosciuto", "voi": "avete conosciuto", "loro": "hanno conosciuto"}}}'::jsonb
WHERE infinitive = 'conoscere'
    AND (conjugations->'passatoProssimo' IS NULL);
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"passatoProssimo": {"pastParticiple": {"base": "corso", "irregular": true}, "conjugations": {"io": "sono corso/a", "tu": "sei corso/a", "luiLei": "è corso/a", "noi": "siamo corsi/e", "voi": "siete corsi/e", "loro": "sono corsi/e"}}}'::jsonb
WHERE infinitive = 'correre'
    AND (conjugations->'passatoProssimo' IS NULL);
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"passatoProssimo": {"pastParticiple": {"base": "cresciuto", "irregular": true}, "conjugations": {"io": "sono cresciuto/a", "tu": "sei cresciuto/a", "luiLei": "è cresciuto/a", "noi": "siamo cresciuti/e", "voi": "siete cresciuti/e", "loro": "sono cresciuti/e"}}}'::jsonb
WHERE infinitive = 'crescere'
    AND (conjugations->'passatoProssimo' IS NULL);
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"passatoProssimo": {"pastParticiple": {"base": "deciso", "irregular": true}, "conjugations": {"io": "ho deciso", "tu": "hai deciso", "luiLei": "ha deciso", "noi": "abbiamo deciso", "voi": "avete deciso", "loro": "hanno deciso"}}}'::jsonb
WHERE infinitive = 'decidere'
    AND (conjugations->'passatoProssimo' IS NULL);
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"passatoProssimo": {"pastParticiple": {"base": "messo", "irregular": true}, "conjugations": {"io": "ho messo", "tu": "hai messo", "luiLei": "ha messo", "noi": "abbiamo messo", "voi": "avete messo", "loro": "hanno messo"}}}'::jsonb
WHERE infinitive = 'mettere'
    AND (conjugations->'passatoProssimo' IS NULL);
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"passatoProssimo": {"pastParticiple": {"base": "perso", "irregular": true}, "conjugations": {"io": "ho perso", "tu": "hai perso", "luiLei": "ha perso", "noi": "abbiamo perso", "voi": "avete perso", "loro": "hanno perso"}}}'::jsonb
WHERE infinitive = 'perdere'
    AND (conjugations->'passatoProssimo' IS NULL);
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"passatoProssimo": {"pastParticiple": {"base": "preso", "irregular": true}, "conjugations": {"io": "ho preso", "tu": "hai preso", "luiLei": "ha preso", "noi": "abbiamo preso", "voi": "avete preso", "loro": "hanno preso"}}}'::jsonb
WHERE infinitive = 'prendere'
    AND (conjugations->'passatoProssimo' IS NULL);
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"passatoProssimo": {"pastParticiple": {"base": "risposto", "irregular": true}, "conjugations": {"io": "ho risposto", "tu": "hai risposto", "luiLei": "ha risposto", "noi": "abbiamo risposto", "voi": "avete risposto", "loro": "hanno risposto"}}}'::jsonb
WHERE infinitive = 'rispondere'
    AND (conjugations->'passatoProssimo' IS NULL);
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"passatoProssimo": {"pastParticiple": {"base": "scritto", "irregular": true}, "conjugations": {"io": "ho scritto", "tu": "hai scritto", "luiLei": "ha scritto", "noi": "abbiamo scritto", "voi": "avete scritto", "loro": "hanno scritto"}}}'::jsonb
WHERE infinitive = 'scrivere'
    AND (conjugations->'passatoProssimo' IS NULL);
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"passatoProssimo": {"pastParticiple": {"base": "vissuto", "irregular": true}, "conjugations": {"io": "sono vissuto/a", "tu": "sei vissuto/a", "luiLei": "è vissuto/a", "noi": "siamo vissuti/e", "voi": "siete vissuti/e", "loro": "sono vissuti/e"}}}'::jsonb
WHERE infinitive = 'vivere'
    AND (conjugations->'passatoProssimo' IS NULL);
-- IRE VERBS - Regular with AVERE (-ito ending)
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"passatoProssimo": {"pastParticiple": {"base": "assalito", "irregular": false}, "conjugations": {"io": "ho assalito", "tu": "hai assalito", "luiLei": "ha assalito", "noi": "abbiamo assalito", "voi": "avete assalito", "loro": "hanno assalito"}}}'::jsonb
WHERE infinitive = 'assalire'
    AND (conjugations->'passatoProssimo' IS NULL);
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"passatoProssimo": {"pastParticiple": {"base": "bollito", "irregular": false}, "conjugations": {"io": "ho bollito", "tu": "hai bollito", "luiLei": "ha bollito", "noi": "abbiamo bollito", "voi": "avete bollito", "loro": "hanno bollito"}}}'::jsonb
WHERE infinitive = 'bollire'
    AND (conjugations->'passatoProssimo' IS NULL);
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"passatoProssimo": {"pastParticiple": {"base": "conseguito", "irregular": false}, "conjugations": {"io": "ho conseguito", "tu": "hai conseguito", "luiLei": "ha conseguito", "noi": "abbiamo conseguito", "voi": "avete conseguito", "loro": "hanno conseguito"}}}'::jsonb
WHERE infinitive = 'conseguire'
    AND (conjugations->'passatoProssimo' IS NULL);
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"passatoProssimo": {"pastParticiple": {"base": "convertito", "irregular": false}, "conjugations": {"io": "ho convertito", "tu": "hai convertito", "luiLei": "ha convertito", "noi": "abbiamo convertito", "voi": "avete convertito", "loro": "hanno convertito"}}}'::jsonb
WHERE infinitive = 'convertire'
    AND (conjugations->'passatoProssimo' IS NULL);
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"passatoProssimo": {"pastParticiple": {"base": "costituito", "irregular": false}, "conjugations": {"io": "ho costituito", "tu": "hai costituito", "luiLei": "ha costituito", "noi": "abbiamo costituito", "voi": "avete costituito", "loro": "hanno costituito"}}}'::jsonb
WHERE infinitive = 'costituire'
    AND (conjugations->'passatoProssimo' IS NULL);
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"passatoProssimo": {"pastParticiple": {"base": "dormito", "irregular": false}, "conjugations": {"io": "ho dormito", "tu": "hai dormito", "luiLei": "ha dormito", "noi": "abbiamo dormito", "voi": "avete dormito", "loro": "hanno dormito"}}}'::jsonb
WHERE infinitive = 'dormire'
    AND (conjugations->'passatoProssimo' IS NULL);
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"passatoProssimo": {"pastParticiple": {"base": "inseguito", "irregular": false}, "conjugations": {"io": "ho inseguito", "tu": "hai inseguito", "luiLei": "ha inseguito", "noi": "abbiamo inseguito", "voi": "avete inseguito", "loro": "hanno inseguito"}}}'::jsonb
WHERE infinitive = 'inseguire'
    AND (conjugations->'passatoProssimo' IS NULL);
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"passatoProssimo": {"pastParticiple": {"base": "inserito", "irregular": false}, "conjugations": {"io": "ho inserito", "tu": "hai inserito", "luiLei": "ha inserito", "noi": "abbiamo inserito", "voi": "avete inserito", "loro": "hanno inserito"}}}'::jsonb
WHERE infinitive = 'inserire'
    AND (conjugations->'passatoProssimo' IS NULL);
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"passatoProssimo": {"pastParticiple": {"base": "mentito", "irregular": false}, "conjugations": {"io": "ho mentito", "tu": "hai mentito", "luiLei": "ha mentito", "noi": "abbiamo mentito", "voi": "avete mentito", "loro": "hanno mentito"}}}'::jsonb
WHERE infinitive = 'mentire'
    AND (conjugations->'passatoProssimo' IS NULL);
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"passatoProssimo": {"pastParticiple": {"base": "nutrito", "irregular": false}, "conjugations": {"io": "ho nutrito", "tu": "hai nutrito", "luiLei": "ha nutrito", "noi": "abbiamo nutrito", "voi": "avete nutrito", "loro": "hanno nutrito"}}}'::jsonb
WHERE infinitive = 'nutrire'
    AND (conjugations->'passatoProssimo' IS NULL);
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"passatoProssimo": {"pastParticiple": {"base": "restituito", "irregular": false}, "conjugations": {"io": "ho restituito", "tu": "hai restituito", "luiLei": "ha restituito", "noi": "abbiamo restituito", "voi": "avete restituito", "loro": "hanno restituito"}}}'::jsonb
WHERE infinitive = 'restituire'
    AND (conjugations->'passatoProssimo' IS NULL);
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"passatoProssimo": {"pastParticiple": {"base": "seguito", "irregular": false}, "conjugations": {"io": "ho seguito", "tu": "hai seguito", "luiLei": "ha seguito", "noi": "abbiamo seguito", "voi": "avete seguito", "loro": "hanno seguito"}}}'::jsonb
WHERE infinitive = 'seguire'
    AND (conjugations->'passatoProssimo' IS NULL);
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"passatoProssimo": {"pastParticiple": {"base": "sentito", "irregular": false}, "conjugations": {"io": "ho sentito", "tu": "hai sentito", "luiLei": "ha sentito", "noi": "abbiamo sentito", "voi": "avete sentito", "loro": "hanno sentito"}}}'::jsonb
WHERE infinitive = 'sentire'
    AND (conjugations->'passatoProssimo' IS NULL);
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"passatoProssimo": {"pastParticiple": {"base": "servito", "irregular": false}, "conjugations": {"io": "ho servito", "tu": "hai servito", "luiLei": "ha servito", "noi": "abbiamo servito", "voi": "avete servito", "loro": "hanno servito"}}}'::jsonb
WHERE infinitive = 'servire'
    AND (conjugations->'passatoProssimo' IS NULL);
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"passatoProssimo": {"pastParticiple": {"base": "vestito", "irregular": false}, "conjugations": {"io": "ho vestito", "tu": "hai vestito", "luiLei": "ha vestito", "noi": "abbiamo vestito", "voi": "avete vestito", "loro": "hanno vestito"}}}'::jsonb
WHERE infinitive = 'vestire'
    AND (conjugations->'passatoProssimo' IS NULL);
-- IRE VERBS - ESSERE auxiliary
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"passatoProssimo": {"pastParticiple": {"base": "fuggito", "irregular": false}, "conjugations": {"io": "sono fuggito/a", "tu": "sei fuggito/a", "luiLei": "è fuggito/a", "noi": "siamo fuggiti/e", "voi": "siete fuggiti/e", "loro": "sono fuggiti/e"}}}'::jsonb
WHERE infinitive = 'fuggire'
    AND (conjugations->'passatoProssimo' IS NULL);
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"passatoProssimo": {"pastParticiple": {"base": "partito", "irregular": false}, "conjugations": {"io": "sono partito/a", "tu": "sei partito/a", "luiLei": "è partito/a", "noi": "siamo partiti/e", "voi": "siete partiti/e", "loro": "sono partiti/e"}}}'::jsonb
WHERE infinitive = 'partire'
    AND (conjugations->'passatoProssimo' IS NULL);
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"passatoProssimo": {"pastParticiple": {"base": "salito", "irregular": false}, "conjugations": {"io": "sono salito/a", "tu": "sei salito/a", "luiLei": "è salito/a", "noi": "siamo saliti/e", "voi": "siete saliti/e", "loro": "sono saliti/e"}}}'::jsonb
WHERE infinitive = 'salire'
    AND (conjugations->'passatoProssimo' IS NULL);
-- IRE VERBS - Irregular past participles
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"passatoProssimo": {"pastParticiple": {"base": "aperto", "irregular": true}, "conjugations": {"io": "ho aperto", "tu": "hai aperto", "luiLei": "ha aperto", "noi": "abbiamo aperto", "voi": "avete aperto", "loro": "hanno aperto"}}}'::jsonb
WHERE infinitive = 'aprire'
    AND (conjugations->'passatoProssimo' IS NULL);
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"passatoProssimo": {"pastParticiple": {"base": "coperto", "irregular": true}, "conjugations": {"io": "ho coperto", "tu": "hai coperto", "luiLei": "ha coperto", "noi": "abbiamo coperto", "voi": "avete coperto", "loro": "hanno coperto"}}}'::jsonb
WHERE infinitive = 'coprire'
    AND (conjugations->'passatoProssimo' IS NULL);
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"passatoProssimo": {"pastParticiple": {"base": "offerto", "irregular": true}, "conjugations": {"io": "ho offerto", "tu": "hai offerto", "luiLei": "ha offerto", "noi": "abbiamo offerto", "voi": "avete offerto", "loro": "hanno offerto"}}}'::jsonb
WHERE infinitive = 'offrire'
    AND (conjugations->'passatoProssimo' IS NULL);
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"passatoProssimo": {"pastParticiple": {"base": "scoperto", "irregular": true}, "conjugations": {"io": "ho scoperto", "tu": "hai scoperto", "luiLei": "ha scoperto", "noi": "abbiamo scoperto", "voi": "avete scoperto", "loro": "hanno scoperto"}}}'::jsonb
WHERE infinitive = 'scoprire'
    AND (conjugations->'passatoProssimo' IS NULL);
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{"passatoProssimo": {"pastParticiple": {"base": "sofferto", "irregular": true}, "conjugations": {"io": "ho sofferto", "tu": "hai sofferto", "luiLei": "ha sofferto", "noi": "abbiamo sofferto", "voi": "avete sofferto", "loro": "hanno sofferto"}}}'::jsonb
WHERE infinitive = 'soffrire'
    AND (conjugations->'passatoProssimo' IS NULL);
-- Final count
SELECT 'All remaining verbs updated! Total verbs with Passato Prossimo: ' || COUNT(*) as final_status
FROM verbs
WHERE conjugations->'passatoProssimo' IS NOT NULL;