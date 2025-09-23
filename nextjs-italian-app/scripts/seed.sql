-- Seed data for Italian Verb Learning App

-- Clear existing data
TRUNCATE verbs, phrases, lessons, pronouns RESTART IDENTITY CASCADE;

-- Insert Pronouns
INSERT INTO pronouns (type, pronouns) VALUES
('subject', ARRAY['Io', 'Tu', 'Lui/Lei', 'Noi', 'Voi', 'Loro']);

-- Insert regular ARE verbs
INSERT INTO verbs (infinitive, type, definition, auxiliary_verb, regular_presente_indicativo, regular_passato_prossimo, conjugations) VALUES
('parlare', 'are', 'to speak', 'avere', true, true, '{"presenteIndicativo": {"io": "parlo", "tu": "parli", "luiLei": "parla", "noi": "parliamo", "voi": "parlate", "loro": "parlano"}}'),
('mangiare', 'are', 'to eat', 'avere', true, true, '{"presenteIndicativo": {"io": "mangio", "tu": "mangi", "luiLei": "mangia", "noi": "mangiamo", "voi": "mangiate", "loro": "mangiano"}}'),
('camminare', 'are', 'to walk', 'avere', true, true, '{"presenteIndicativo": {"io": "cammino", "tu": "cammini", "luiLei": "cammina", "noi": "camminiamo", "voi": "camminate", "loro": "camminano"}}'),
('cantare', 'are', 'to sing', 'avere', true, true, '{"presenteIndicativo": {"io": "canto", "tu": "canti", "luiLei": "canta", "noi": "cantiamo", "voi": "cantate", "loro": "cantano"}}'),
('giocare', 'are', 'to play', 'avere', true, true, '{"presenteIndicativo": {"io": "gioco", "tu": "giochi", "luiLei": "gioca", "noi": "giochiamo", "voi": "giocate", "loro": "giocano"}}'),
('studiare', 'are', 'to study', 'avere', true, true, '{"presenteIndicativo": {"io": "studio", "tu": "studi", "luiLei": "studia", "noi": "studiamo", "voi": "studiate", "loro": "studiano"}}'),
('lavorare', 'are', 'to work', 'avere', true, true, '{"presenteIndicativo": {"io": "lavoro", "tu": "lavori", "luiLei": "lavora", "noi": "lavoriamo", "voi": "lavorate", "loro": "lavorano"}}'),
('guardare', 'are', 'to watch', 'avere', true, true, '{"presenteIndicativo": {"io": "guardo", "tu": "guardi", "luiLei": "guarda", "noi": "guardiamo", "voi": "guardate", "loro": "guardano"}}');

-- Insert regular ERE verbs
INSERT INTO verbs (infinitive, type, definition, auxiliary_verb, regular_presente_indicativo, regular_passato_prossimo, conjugations) VALUES
('vendere', 'ere', 'to sell', 'avere', true, true, '{"presenteIndicativo": {"io": "vendo", "tu": "vendi", "luiLei": "vende", "noi": "vendiamo", "voi": "vendete", "loro": "vendono"}}'),
('credere', 'ere', 'to believe', 'avere', true, true, '{"presenteIndicativo": {"io": "credo", "tu": "credi", "luiLei": "crede", "noi": "crediamo", "voi": "credete", "loro": "credono"}}'),
('ricevere', 'ere', 'to receive', 'avere', true, true, '{"presenteIndicativo": {"io": "ricevo", "tu": "ricevi", "luiLei": "riceve", "noi": "riceviamo", "voi": "ricevete", "loro": "ricevono"}}'),
('temere', 'ere', 'to fear', 'avere', true, true, '{"presenteIndicativo": {"io": "temo", "tu": "temi", "luiLei": "teme", "noi": "temiamo", "voi": "temete", "loro": "temono"}}');

-- Insert irregular ERE verbs
INSERT INTO verbs (infinitive, type, definition, auxiliary_verb, regular_presente_indicativo, regular_passato_prossimo, conjugations) VALUES
('essere', 'ere', 'to be', 'essere', false, false, '{"presenteIndicativo": {"io": "sono", "tu": "sei", "luiLei": "è", "noi": "siamo", "voi": "siete", "loro": "sono"}}'),
('avere', 'ere', 'to have', 'avere', false, false, '{"presenteIndicativo": {"io": "ho", "tu": "hai", "luiLei": "ha", "noi": "abbiamo", "voi": "avete", "loro": "hanno"}}'),
('fare', 'ere', 'to do/make', 'avere', false, false, '{"presenteIndicativo": {"io": "faccio", "tu": "fai", "luiLei": "fa", "noi": "facciamo", "voi": "fate", "loro": "fanno"}}'),
('vedere', 'ere', 'to see', 'avere', false, false, '{"presenteIndicativo": {"io": "vedo", "tu": "vedi", "luiLei": "vede", "noi": "vediamo", "voi": "vedete", "loro": "vedono"}}'),
('sapere', 'ere', 'to know', 'avere', false, false, '{"presenteIndicativo": {"io": "so", "tu": "sai", "luiLei": "sa", "noi": "sappiamo", "voi": "sapete", "loro": "sanno"}}');

-- Insert regular IRE verbs
INSERT INTO verbs (infinitive, type, definition, auxiliary_verb, regular_presente_indicativo, regular_passato_prossimo, conjugations) VALUES
('dormire', 'ire', 'to sleep', 'avere', true, true, '{"presenteIndicativo": {"io": "dormo", "tu": "dormi", "luiLei": "dorme", "noi": "dormiamo", "voi": "dormite", "loro": "dormono"}}'),
('partire', 'ire', 'to leave', 'essere', true, true, '{"presenteIndicativo": {"io": "parto", "tu": "parti", "luiLei": "parte", "noi": "partiamo", "voi": "partite", "loro": "partono"}}'),
('aprire', 'ire', 'to open', 'avere', true, true, '{"presenteIndicativo": {"io": "apro", "tu": "apri", "luiLei": "apre", "noi": "apriamo", "voi": "aprite", "loro": "aprono"}}'),
('sentire', 'ire', 'to hear/feel', 'avere', true, true, '{"presenteIndicativo": {"io": "sento", "tu": "senti", "luiLei": "sente", "noi": "sentiamo", "voi": "sentite", "loro": "sentono"}}'),
('finire', 'ire', 'to finish', 'avere', true, true, '{"presenteIndicativo": {"io": "finisco", "tu": "finisci", "luiLei": "finisce", "noi": "finiamo", "voi": "finite", "loro": "finiscono"}}');

-- Insert irregular IRE verbs
INSERT INTO verbs (infinitive, type, definition, auxiliary_verb, regular_presente_indicativo, regular_passato_prossimo, conjugations) VALUES
('venire', 'ire', 'to come', 'essere', false, false, '{"presenteIndicativo": {"io": "vengo", "tu": "vieni", "luiLei": "viene", "noi": "veniamo", "voi": "venite", "loro": "vengono"}}'),
('dire', 'ire', 'to say', 'avere', false, false, '{"presenteIndicativo": {"io": "dico", "tu": "dici", "luiLei": "dice", "noi": "diciamo", "voi": "dite", "loro": "dicono"}}');

-- Insert Phrases
INSERT INTO phrases (phrase, translation, meaning) VALUES
('Ciao!', 'Hello/Goodbye!', 'Informal greeting'),
('Come stai?', 'How are you?', 'Informal way to ask about someones well-being'),
('Molto bene, grazie!', 'Very well, thank you!', 'Response to how are you'),
('Mi chiamo...', 'My name is...', 'Introducing yourself'),
('Piacere di conoscerti', 'Nice to meet you', 'Formal introduction response'),
('Parli inglese?', 'Do you speak English?', 'Asking if someone speaks English'),
('Non capisco', 'I dont understand', 'When you need clarification'),
('Scusi, dov''è...?', 'Excuse me, where is...?', 'Asking for directions'),
('Quanto costa?', 'How much does it cost?', 'Asking about price'),
('Vorrei...', 'I would like...', 'Making a polite request');

-- Insert Regular Lessons
INSERT INTO lessons (type, tense, pattern_explanation, memory_tricks, common_phrases, learner_pitfalls, conjugation_examples) VALUES
('regular', 'presenteIndicativo', 'For regular -ARE verbs, remove -are and add: o, i, a, iamo, ate, ano',
 ARRAY['Think of "I AM" for io (am-o)', 'Tu always ends in -i', 'Loro always ends in -ano'],
 ARRAY['Io parlo italiano', 'Tu mangi la pizza', 'Noi studiamo insieme'],
 ARRAY['Don''t confuse tu/lui forms', 'Remember the double consonants in some verbs'],
 '{"are": {"stem": "parl", "infinitive": "parlare", "conjugations": ["parlo", "parli", "parla", "parliamo", "parlate", "parlano"]}}'),

('regular', 'presenteIndicativo', 'For regular -ERE verbs, remove -ere and add: o, i, e, iamo, ete, ono',
 ARRAY['ERE verbs are similar to ARE but with E', 'Think "E for ERE" in the endings'],
 ARRAY['Io vendo libri', 'Tu credi in me', 'Loro ricevono lettere'],
 ARRAY['Watch out for irregular ERE verbs like essere', 'ERE endings are less predictable'],
 '{"ere": {"stem": "vend", "infinitive": "vendere", "conjugations": ["vendo", "vendi", "vende", "vendiamo", "vendete", "vendono"]}}'),

('regular', 'presenteIndicativo', 'For regular -IRE verbs, remove -ire and add: o, i, e, iamo, ite, ono. Some add -isc- in singular and loro forms.',
 ARRAY['Some IRE verbs add -isc-', 'Finire becomes finisco, not fino'],
 ARRAY['Io dormo bene', 'Tu parti domani', 'Lei finisce il lavoro'],
 ARRAY['Not all IRE verbs use -isc-', 'Learn which ones need the -isc- insertion'],
 '{"ire": {"stem": "dorm", "infinitive": "dormire", "conjugations": ["dormo", "dormi", "dorme", "dormiamo", "dormite", "dormono"]}}');

-- Insert Irregular Lessons
INSERT INTO lessons (type, infinitive, tense, etymology, memory_tricks, common_phrases, learner_pitfalls) VALUES
('irregular', 'essere', 'presenteIndicativo', 'From Latin "esse" meaning "to be"',
 ARRAY['Sono = I am (like Spanish "soy")', 'Sei = you are (sounds like "say")', 'È = he/she is (with accent!)'],
 ARRAY['Io sono italiano', 'Tu sei bravo', 'Lei è bella'],
 ARRAY['Don''t forget the accent on è', 'Sono can mean both "I am" and "they are" - context matters']),

('irregular', 'avere', 'presenteIndicativo', 'From Latin "habere" meaning "to have"',
 ARRAY['Ho = I have (no -o ending!)', 'Hai = you have (like "hi")', 'Ha = he/she has (no accent!)'],
 ARRAY['Io ho fame', 'Tu hai ragione', 'Noi abbiamo tempo'],
 ARRAY['Ha vs è - ha = has, è = is', 'Ho doesn''t follow normal -o pattern']);

-- Verify data insertion
SELECT 'Schema and seed data created successfully!' as status;