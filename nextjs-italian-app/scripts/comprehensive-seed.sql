-- Comprehensive seed data based on original seedDatabase.ts

TRUNCATE verbs, phrases, lessons, pronouns RESTART IDENTITY CASCADE;

-- Insert Pronouns (exactly as in original)
INSERT INTO pronouns (type, pronouns) VALUES
('subject', ARRAY['Io', 'Tu', 'Lui/Lei', 'Noi', 'Voi', 'Loro']),
('directObject', ARRAY['Mi', 'Ti', 'Lo/La', 'Ci', 'Vi', 'Li/Le']),
('indirectObject', ARRAY['Mi', 'Ti', 'Gli/Lei', 'Ci', 'Vi', 'Gli/Le']);

-- Insert ALL ARE verbs from original seed data
INSERT INTO verbs (infinitive, type, definition, auxiliary_verb, regular_presente_indicativo, regular_passato_prossimo, conjugations) VALUES
('parlare', 'are', 'to speak', 'avere', true, true, NULL),
('mangiare', 'are', 'to eat', 'avere', true, true, NULL),
('lavorare', 'are', 'to work', 'avere', true, true, NULL),
('guardare', 'are', 'to watch', 'avere', true, true, NULL),
('pensare', 'are', 'to think', 'avere', true, true, NULL),
('trovare', 'are', 'to find', 'avere', true, true, NULL),
('aspettare', 'are', 'to wait', 'avere', true, true, NULL),
('comprare', 'are', 'to buy', 'avere', true, true, NULL),
('chiamare', 'are', 'to call', 'avere', true, true, NULL),
('studiare', 'are', 'to study', 'avere', true, true, NULL),
('amare', 'are', 'to love', 'avere', true, true, NULL),
('portare', 'are', 'to bring', 'avere', true, true, NULL),
('arrivare', 'are', 'to arrive', 'essere', true, true, NULL),
('entrare', 'are', 'to enter', 'essere', true, true, NULL),
('lasciare', 'are', 'to leave', 'avere', true, true, NULL),
('giocare', 'are', 'to play', 'avere', true, true, NULL),
('ascoltare', 'are', 'to listen', 'avere', true, true, NULL),
('camminare', 'are', 'to walk', 'avere', true, true, NULL),
('aiutare', 'are', 'to help', 'avere', true, true, NULL),
('usare', 'are', 'to use', 'avere', true, true, NULL),
('cantare', 'are', 'to sing', 'avere', true, true, NULL),
('pagare', 'are', 'to pay', 'avere', true, true, NULL),
('preparare', 'are', 'to prepare', 'avere', true, true, NULL),
('cercare', 'are', 'to search', 'avere', false, true, '{"presenteIndicativo": {"io": "cerco", "tu": "cerchi", "luiLei": "cerca", "noi": "cerchiamo", "voi": "cercate", "loro": "cercano"}}'),
('incontrare', 'are', 'to meet', 'avere', true, true, NULL),
('tornare', 'are', 'to return', 'essere', true, true, NULL),
('mandare', 'are', 'to send', 'avere', true, true, NULL),
('passare', 'are', 'to pass', 'avere', true, true, NULL),
('viaggiare', 'are', 'to travel', 'avere', true, true, NULL),
('cominciare', 'are', 'to begin', 'avere', true, true, NULL),
('abitare', 'are', 'to live (reside)', 'avere', true, true, NULL),
('suonare', 'are', 'to play (an instrument)', 'avere', true, true, NULL),
('imparare', 'are', 'to learn', 'avere', true, true, NULL),
('insegnare', 'are', 'to teach', 'avere', true, true, NULL),
('ricordare', 'are', 'to remember', 'avere', true, true, NULL),
('dimenticare', 'are', 'to forget', 'avere', true, true, NULL),
('cambiare', 'are', 'to change', 'avere', true, true, NULL),
('provare', 'are', 'to try', 'avere', true, true, NULL),
('ordinare', 'are', 'to order', 'avere', true, true, NULL),
('cucinare', 'are', 'to cook', 'avere', true, true, NULL),
('andare', 'are', 'to go', 'essere', false, true, '{"presenteIndicativo": {"io": "vado", "tu": "vai", "luiLei": "va", "noi": "andiamo", "voi": "andate", "loro": "vanno"}}'),
('dare', 'are', 'to give', 'avere', false, true, '{"presenteIndicativo": {"io": "do", "tu": "dai", "luiLei": "dà", "noi": "diamo", "voi": "date", "loro": "danno"}}'),
('stare', 'are', 'to stay', 'essere', false, true, '{"presenteIndicativo": {"io": "sto", "tu": "stai", "luiLei": "sta", "noi": "stiamo", "voi": "state", "loro": "stanno"}}');

-- Insert ALL ERE verbs from original seed data
INSERT INTO verbs (infinitive, type, definition, auxiliary_verb, regular_presente_indicativo, regular_passato_prossimo, conjugations) VALUES
('credere', 'ere', 'to believe', 'avere', true, true, NULL),
('scrivere', 'ere', 'to write', 'avere', true, false, NULL),
('leggere', 'ere', 'to read', 'avere', false, false, '{"presenteIndicativo": {"io": "leggo", "tu": "leggi", "luiLei": "legge", "noi": "leggiamo", "voi": "leggete", "loro": "leggono"}}'),
('mettere', 'ere', 'to put', 'avere', true, false, NULL),
('prendere', 'ere', 'to take', 'avere', true, false, NULL),
('chiedere', 'ere', 'to ask', 'avere', true, false, NULL),
('vivere', 'ere', 'to live', 'essere', true, false, NULL),
('ricevere', 'ere', 'to receive', 'avere', true, true, NULL),
('perdere', 'ere', 'to lose', 'avere', true, false, NULL),
('vendere', 'ere', 'to sell', 'avere', true, true, NULL),
('rispondere', 'ere', 'to answer', 'avere', true, false, NULL),
('decidere', 'ere', 'to decide', 'avere', true, false, NULL),
('conoscere', 'ere', 'to know (a person)', 'avere', true, false, NULL),
('crescere', 'ere', 'to grow', 'essere', true, false, NULL),
('correre', 'ere', 'to run', 'essere', true, false, NULL),
('sapere', 'ere', 'to know', 'avere', false, true, '{"presenteIndicativo": {"io": "so", "tu": "sai", "luiLei": "sa", "noi": "sappiamo", "voi": "sapete", "loro": "sanno"}}'),
('rimanere', 'ere', 'to stay/remain', 'essere', false, false, '{"presenteIndicativo": {"io": "rimango", "tu": "rimani", "luiLei": "rimane", "noi": "rimaniamo", "voi": "rimanete", "loro": "rimangono"}}'),
('essere', 'ere', 'to be', 'essere', false, false, '{"presenteIndicativo": {"io": "sono", "tu": "sei", "luiLei": "è", "noi": "siamo", "voi": "siete", "loro": "sono"}}'),
('avere', 'ere', 'to have', 'avere', false, false, '{"presenteIndicativo": {"io": "ho", "tu": "hai", "luiLei": "ha", "noi": "abbiamo", "voi": "avete", "loro": "hanno"}}'),
('fare', 'ere', 'to do/make', 'avere', false, false, '{"presenteIndicativo": {"io": "faccio", "tu": "fai", "luiLei": "fa", "noi": "facciamo", "voi": "fate", "loro": "fanno"}}');

-- Insert ALL IRE verbs from original seed data
INSERT INTO verbs (infinitive, type, definition, auxiliary_verb, regular_presente_indicativo, regular_passato_prossimo, conjugations) VALUES
('partire', 'ire', 'to depart', 'essere', true, true, NULL),
('dormire', 'ire', 'to sleep', 'avere', true, true, NULL),
('sentire', 'ire', 'to hear/feel', 'avere', true, true, NULL),
('aprire', 'ire', 'to open', 'avere', true, false, NULL),
('seguire', 'ire', 'to follow', 'avere', true, true, NULL),
('offrire', 'ire', 'to offer', 'avere', true, false, NULL),
('servire', 'ire', 'to serve', 'avere', true, true, NULL),
('coprire', 'ire', 'to cover', 'avere', true, false, NULL),
('scoprire', 'ire', 'to discover', 'avere', true, false, NULL),
('soffrire', 'ire', 'to suffer', 'avere', true, false, NULL),
('bollire', 'ire', 'to boil', 'avere', true, true, NULL),
('fuggire', 'ire', 'to flee', 'essere', true, true, NULL),
('mentire', 'ire', 'to lie', 'avere', true, true, NULL),
('nutrire', 'ire', 'to nourish/feed', 'avere', true, true, NULL),
('restituire', 'ire', 'to return (give back)', 'avere', true, true, NULL),
('salire', 'ire', 'to go up', 'essere', true, true, NULL),
('vestire', 'ire', 'to dress', 'avere', true, true, NULL),
('assalire', 'ire', 'to attack/assail', 'avere', true, true, NULL),
('conseguire', 'ire', 'to achieve', 'avere', true, true, NULL),
('convertire', 'ire', 'to convert', 'avere', true, true, NULL),
('inseguire', 'ire', 'to chase/pursue', 'avere', true, true, NULL),
('inserire', 'ire', 'to insert', 'avere', true, true, NULL),
('costituire', 'ire', 'to constitute', 'avere', true, true, NULL),
('venire', 'ire', 'to come', 'essere', false, true, '{"presenteIndicativo": {"io": "vengo", "tu": "vieni", "luiLei": "viene", "noi": "veniamo", "voi": "venite", "loro": "vengono"}}'),
('uscire', 'ire', 'to go out', 'essere', false, true, '{"presenteIndicativo": {"io": "esco", "tu": "esci", "luiLei": "esce", "noi": "usciamo", "voi": "uscite", "loro": "escono"}}'),
('dire', 'ire', 'to say/tell', 'avere', false, true, '{"presenteIndicativo": {"io": "dico", "tu": "dici", "luiLei": "dice", "noi": "diciamo", "voi": "dite", "loro": "dicono"}}');

-- Insert phrases from original data
INSERT INTO phrases (phrase, translation, meaning) VALUES
('Buona giornata!', 'Have a good day!', 'A common way to wish someone well for their day.'),
('In bocca al lupo!', 'Good luck!', 'Literally ''into the wolf''s mouth,'' it''s the Italian way to wish someone luck, often before an exam or performance.'),
('Ci vediamo presto!', 'See you soon!', 'Friendly and casual way to say you''ll meet someone again soon.'),
('Come va?', 'How''s it going?', 'Informal greeting used in everyday conversations.'),
('A presto!', 'See you soon!', 'A polite way to say goodbye, often used in both formal and informal settings.'),
('Non vedo l''ora!', 'I can''t wait!', 'Used to express excitement about something in the future.'),
('Grazie mille!', 'Thank you very much!', 'Common way to express sincere gratitude.'),
('Va tutto bene.', 'Everything''s fine.', 'Reassurance that things are okay.'),
('Scusa, puoi ripetere?', 'Sorry, can you repeat?', 'Useful everyday phrase when you don''t understand something.'),
('Buona fortuna!', 'Good luck!', 'General way to wish someone luck in any situation.');

-- Insert comprehensive lessons from original data
INSERT INTO lessons (type, tense, pattern_explanation, memory_tricks, common_phrases, learner_pitfalls, conjugation_examples) VALUES
('regular', 'presenteIndicativo',
 'Regular Italian verbs follow predictable patterns based on their infinitive endings. The magic lies in recognizing the STEM (infinitive minus ending) + ENDING system that works across all three verb families.',
 ARRAY[
   'ARE: ''A-R-E'' sounds like ''ANO'' - remember the ''loro'' ending!',
   'ERE: Think ''E-R-E'' leads to ''ONO'' - they end similar!',
   'IRE: ''I-R-E'' uses ''ONO'' too, but ''voi'' gets ''ITE'' (sounds like ''bite'')',
   'Shared pattern: io/tu/lui forms are nearly identical across all types',
   'The ''3-2-1'' rule: 3 singular forms are short, noi/voi are longer, loro is longest'
 ],
 ARRAY[
   'ARE verbs: Parlo italiano - I speak Italian',
   'ARE verbs: Mangiamo pizza - We eat pizza',
   'ARE verbs: Studiate molto? - Do you all study a lot?',
   'ERE verbs: Credi in me? - Do you believe in me?',
   'ERE verbs: Vendono libri - They sell books',
   'IRE verbs: Dormo bene - I sleep well',
   'IRE verbs: Partite domani - You all are leaving tomorrow'
 ],
 ARRAY[
   'Don''t mix up -ete (ERE verbs) and -ite (IRE verbs) for ''voi''',
   '-ano vs -ono: ARE verbs use ''ano'', ERE/IRE use ''ono''',
   'Remember to drop the entire ending (-are/-ere/-ire), not just the ''e''',
   'Silent ''h'' in ''noi'' forms: ''parliamo'' not ''parlaimo''',
   'Double letters in ''voi'': ''parlate'', ''credete'', ''dormite'' - don''t drop letters!'
 ],
 '{"are": {"stem": "parl", "infinitive": "parlare", "conjugations": ["parlo", "parli", "parla", "parliamo", "parlate", "parlano"]}, "ere": {"stem": "cred", "infinitive": "credere", "conjugations": ["credo", "credi", "crede", "crediamo", "credete", "credono"]}, "ire": {"stem": "dorm", "infinitive": "dormire", "conjugations": ["dormo", "dormi", "dorme", "dormiamo", "dormite", "dormono"]}}'
);

-- Insert irregular verb lessons
INSERT INTO lessons (type, infinitive, tense, etymology, memory_tricks, common_phrases, learner_pitfalls) VALUES
-- andare lesson
('irregular', 'andare', 'presenteIndicativo',
 'From Latin ''ambulare'' (to walk), but merged with Latin ''vadere'' (to go). The ''vad-'' forms come from ''vadere'', explaining why ''io vado'' doesn''t look like ''andare''!',
 ARRAY[
   'Remember: ''io VADO'' - I go with a V!',
   '''noi andiamo'' keeps the original ''and-'' root',
   'Think: ''They VANNO go'' = ''loro vanno'''
 ],
 ARRAY[
   'Vado a casa - I''m going home',
   'Dove vai? - Where are you going?',
   'Andiamo! - Let''s go!'
 ],
 ARRAY[
   'Don''t say ''io ando'' - it''s ''io vado''',
   '''loro vanno'' has double ''n'', not ''vano''',
   'Remember ''andiamo'' keeps the ''and-'' root'
 ]
),

-- dare lesson
('irregular', 'dare', 'presenteIndicativo',
 'From Latin ''dare'' (to give). One of the few verbs that kept its Latin form almost unchanged, but developed irregular conjugations over time.',
 ARRAY[
   '''io DO'' - I Do give (very short!)',
   '''dà'' (he gives) has an accent to distinguish from ''da'' (from)',
   '''loro danno'' - they give damage (danno = damage)'
 ],
 ARRAY[
   'Ti do una mano - I''ll give you a hand',
   'Dai! - Come on! (literally: give!)',
   'Cosa danno al cinema? - What''s playing at the cinema?'
 ],
 ARRAY[
   'Don''t forget the accent: ''lui dà'' not ''lui da''',
   '''loro danno'' has double ''n''',
   'Very short forms: ''io do'', ''tu dai'''
 ]
),

-- sapere lesson
('irregular', 'sapere', 'presenteIndicativo',
 'From Latin ''sapere'' (to taste, to have good taste, to know). Originally meant ''to taste'' - you ''taste'' knowledge!',
 ARRAY[
   '''io SO'' - Simple One letter = I know',
   '''sai'' rhymes with ''hai'' (you have) - you have knowledge',
   '''sappiamo'' - we Share APPreciated wisdom'
 ],
 ARRAY[
   'Non lo so - I don''t know',
   'Sai parlare inglese? - Do you know how to speak English?',
   'Sapete la risposta? - Do you know the answer?'
 ],
 ARRAY[
   'Very short: ''io so'' not ''io sapo''',
   'Don''t confuse with ''conoscere'' - ''sapere'' is for facts/skills',
   '''sappiamo'' has double ''p'''
 ]
);

SELECT 'Comprehensive seed data loaded successfully!' as status;