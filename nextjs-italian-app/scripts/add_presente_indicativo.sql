-- Add Presente Indicativo conjugations to existing verbs
-- This extends the conjugations JSONB field with presente indicativo data

-- ARE VERBS (Regular)
-- parlare (to speak)
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{
  "presenteIndicativo": {
    "conjugations": {
      "io": "parlo",
      "tu": "parli",
      "luiLei": "parla",
      "noi": "parliamo",
      "voi": "parlate",
      "loro": "parlano"
    }
  }
}'::jsonb
WHERE infinitive = 'parlare' AND (conjugations->'presenteIndicativo' IS NULL);

-- mangiare (to eat)
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{
  "presenteIndicativo": {
    "conjugations": {
      "io": "mangio",
      "tu": "mangi",
      "luiLei": "mangia",
      "noi": "mangiamo",
      "voi": "mangiate",
      "loro": "mangiano"
    }
  }
}'::jsonb
WHERE infinitive = 'mangiare' AND (conjugations->'presenteIndicativo' IS NULL);

-- camminare (to walk)
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{
  "presenteIndicativo": {
    "conjugations": {
      "io": "cammino",
      "tu": "cammini",
      "luiLei": "cammina",
      "noi": "camminiamo",
      "voi": "camminate",
      "loro": "camminano"
    }
  }
}'::jsonb
WHERE infinitive = 'camminare' AND (conjugations->'presenteIndicativo' IS NULL);

-- cantare (to sing)
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{
  "presenteIndicativo": {
    "conjugations": {
      "io": "canto",
      "tu": "canti",
      "luiLei": "canta",
      "noi": "cantiamo",
      "voi": "cantate",
      "loro": "cantano"
    }
  }
}'::jsonb
WHERE infinitive = 'cantare' AND (conjugations->'presenteIndicativo' IS NULL);

-- giocare (to play)
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{
  "presenteIndicativo": {
    "conjugations": {
      "io": "gioco",
      "tu": "giochi",
      "luiLei": "gioca",
      "noi": "giochiamo",
      "voi": "giocate",
      "loro": "giocano"
    }
  }
}'::jsonb
WHERE infinitive = 'giocare' AND (conjugations->'presenteIndicativo' IS NULL);

-- studiare (to study)
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{
  "presenteIndicativo": {
    "conjugations": {
      "io": "studio",
      "tu": "studi",
      "luiLei": "studia",
      "noi": "studiamo",
      "voi": "studiate",
      "loro": "studiano"
    }
  }
}'::jsonb
WHERE infinitive = 'studiare' AND (conjugations->'presenteIndicativo' IS NULL);

-- lavorare (to work)
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{
  "presenteIndicativo": {
    "conjugations": {
      "io": "lavoro",
      "tu": "lavori",
      "luiLei": "lavora",
      "noi": "lavoriamo",
      "voi": "lavorate",
      "loro": "lavorano"
    }
  }
}'::jsonb
WHERE infinitive = 'lavorare' AND (conjugations->'presenteIndicativo' IS NULL);

-- guardare (to watch)
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{
  "presenteIndicativo": {
    "conjugations": {
      "io": "guardo",
      "tu": "guardi",
      "luiLei": "guarda",
      "noi": "guardiamo",
      "voi": "guardate",
      "loro": "guardano"
    }
  }
}'::jsonb
WHERE infinitive = 'guardare' AND (conjugations->'presenteIndicativo' IS NULL);

-- preparare (to prepare)
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{
  "presenteIndicativo": {
    "conjugations": {
      "io": "preparo",
      "tu": "prepari",
      "luiLei": "prepara",
      "noi": "prepariamo",
      "voi": "preparate",
      "loro": "preparano"
    }
  }
}'::jsonb
WHERE infinitive = 'preparare' AND (conjugations->'presenteIndicativo' IS NULL);

-- chiamare (to call)
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{
  "presenteIndicativo": {
    "conjugations": {
      "io": "chiamo",
      "tu": "chiami",
      "luiLei": "chiama",
      "noi": "chiamiamo",
      "voi": "chiamate",
      "loro": "chiamano"
    }
  }
}'::jsonb
WHERE infinitive = 'chiamare' AND (conjugations->'presenteIndicativo' IS NULL);

-- ERE VERBS (Regular)
-- vendere (to sell)
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{
  "presenteIndicativo": {
    "conjugations": {
      "io": "vendo",
      "tu": "vendi",
      "luiLei": "vende",
      "noi": "vendiamo",
      "voi": "vendete",
      "loro": "vendono"
    }
  }
}'::jsonb
WHERE infinitive = 'vendere' AND (conjugations->'presenteIndicativo' IS NULL);

-- credere (to believe)
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{
  "presenteIndicativo": {
    "conjugations": {
      "io": "credo",
      "tu": "credi",
      "luiLei": "crede",
      "noi": "crediamo",
      "voi": "credete",
      "loro": "credono"
    }
  }
}'::jsonb
WHERE infinitive = 'credere' AND (conjugations->'presenteIndicativo' IS NULL);

-- ricevere (to receive)
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{
  "presenteIndicativo": {
    "conjugations": {
      "io": "ricevo",
      "tu": "ricevi",
      "luiLei": "riceve",
      "noi": "riceviamo",
      "voi": "ricevete",
      "loro": "ricevono"
    }
  }
}'::jsonb
WHERE infinitive = 'ricevere' AND (conjugations->'presenteIndicativo' IS NULL);

-- temere (to fear)
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{
  "presenteIndicativo": {
    "conjugations": {
      "io": "temo",
      "tu": "temi",
      "luiLei": "teme",
      "noi": "temiamo",
      "voi": "temete",
      "loro": "temono"
    }
  }
}'::jsonb
WHERE infinitive = 'temere' AND (conjugations->'presenteIndicativo' IS NULL);

-- mettere (to put) - irregular
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{
  "presenteIndicativo": {
    "conjugations": {
      "io": "metto",
      "tu": "metti",
      "luiLei": "mette",
      "noi": "mettiamo",
      "voi": "mettete",
      "loro": "mettono"
    }
  }
}'::jsonb
WHERE infinitive = 'mettere' AND (conjugations->'presenteIndicativo' IS NULL);

-- crescere (to grow) - irregular
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{
  "presenteIndicativo": {
    "conjugations": {
      "io": "cresco",
      "tu": "cresci",
      "luiLei": "cresce",
      "noi": "cresciamo",
      "voi": "crescete",
      "loro": "crescono"
    }
  }
}'::jsonb
WHERE infinitive = 'crescere' AND (conjugations->'presenteIndicativo' IS NULL);

-- conoscere (to know/meet) - irregular
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{
  "presenteIndicativo": {
    "conjugations": {
      "io": "conosco",
      "tu": "conosci",
      "luiLei": "conosce",
      "noi": "conosciamo",
      "voi": "conoscete",
      "loro": "conoscono"
    }
  }
}'::jsonb
WHERE infinitive = 'conoscere' AND (conjugations->'presenteIndicativo' IS NULL);

-- ERE VERBS (Highly Irregular)
-- essere (to be)
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{
  "presenteIndicativo": {
    "conjugations": {
      "io": "sono",
      "tu": "sei",
      "luiLei": "è",
      "noi": "siamo",
      "voi": "siete",
      "loro": "sono"
    }
  }
}'::jsonb
WHERE infinitive = 'essere' AND (conjugations->'presenteIndicativo' IS NULL);

-- avere (to have)
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{
  "presenteIndicativo": {
    "conjugations": {
      "io": "ho",
      "tu": "hai",
      "luiLei": "ha",
      "noi": "abbiamo",
      "voi": "avete",
      "loro": "hanno"
    }
  }
}'::jsonb
WHERE infinitive = 'avere' AND (conjugations->'presenteIndicativo' IS NULL);

-- fare (to do/make)
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{
  "presenteIndicativo": {
    "conjugations": {
      "io": "faccio",
      "tu": "fai",
      "luiLei": "fa",
      "noi": "facciamo",
      "voi": "fate",
      "loro": "fanno"
    }
  }
}'::jsonb
WHERE infinitive = 'fare' AND (conjugations->'presenteIndicativo' IS NULL);

-- vedere (to see)
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{
  "presenteIndicativo": {
    "conjugations": {
      "io": "vedo",
      "tu": "vedi",
      "luiLei": "vede",
      "noi": "vediamo",
      "voi": "vedete",
      "loro": "vedono"
    }
  }
}'::jsonb
WHERE infinitive = 'vedere' AND (conjugations->'presenteIndicativo' IS NULL);

-- sapere (to know)
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{
  "presenteIndicativo": {
    "conjugations": {
      "io": "so",
      "tu": "sai",
      "luiLei": "sa",
      "noi": "sappiamo",
      "voi": "sapete",
      "loro": "sanno"
    }
  }
}'::jsonb
WHERE infinitive = 'sapere' AND (conjugations->'presenteIndicativo' IS NULL);

-- IRE VERBS (Regular)
-- dormire (to sleep)
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{
  "presenteIndicativo": {
    "conjugations": {
      "io": "dormo",
      "tu": "dormi",
      "luiLei": "dorme",
      "noi": "dormiamo",
      "voi": "dormite",
      "loro": "dormono"
    }
  }
}'::jsonb
WHERE infinitive = 'dormire' AND (conjugations->'presenteIndicativo' IS NULL);

-- partire (to leave)
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{
  "presenteIndicativo": {
    "conjugations": {
      "io": "parto",
      "tu": "parti",
      "luiLei": "parte",
      "noi": "partiamo",
      "voi": "partite",
      "loro": "partono"
    }
  }
}'::jsonb
WHERE infinitive = 'partire' AND (conjugations->'presenteIndicativo' IS NULL);

-- aprire (to open)
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{
  "presenteIndicativo": {
    "conjugations": {
      "io": "apro",
      "tu": "apri",
      "luiLei": "apre",
      "noi": "apriamo",
      "voi": "aprite",
      "loro": "aprono"
    }
  }
}'::jsonb
WHERE infinitive = 'aprire' AND (conjugations->'presenteIndicativo' IS NULL);

-- sentire (to hear/feel)
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{
  "presenteIndicativo": {
    "conjugations": {
      "io": "sento",
      "tu": "senti",
      "luiLei": "sente",
      "noi": "sentiamo",
      "voi": "sentite",
      "loro": "sentono"
    }
  }
}'::jsonb
WHERE infinitive = 'sentire' AND (conjugations->'presenteIndicativo' IS NULL);

-- finire (to finish) - ISC verb
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{
  "presenteIndicativo": {
    "conjugations": {
      "io": "finisco",
      "tu": "finisci",
      "luiLei": "finisce",
      "noi": "finiamo",
      "voi": "finite",
      "loro": "finiscono"
    }
  }
}'::jsonb
WHERE infinitive = 'finire' AND (conjugations->'presenteIndicativo' IS NULL);

-- IRE VERBS (Irregular)
-- venire (to come)
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{
  "presenteIndicativo": {
    "conjugations": {
      "io": "vengo",
      "tu": "vieni",
      "luiLei": "viene",
      "noi": "veniamo",
      "voi": "venite",
      "loro": "vengono"
    }
  }
}'::jsonb
WHERE infinitive = 'venire' AND (conjugations->'presenteIndicativo' IS NULL);

-- dire (to say)
UPDATE verbs
SET conjugations = COALESCE(conjugations, '{}'::jsonb) || '{
  "presenteIndicativo": {
    "conjugations": {
      "io": "dico",
      "tu": "dici",
      "luiLei": "dice",
      "noi": "diciamo",
      "voi": "dite",
      "loro": "dicono"
    }
  }
}'::jsonb
WHERE infinitive = 'dire' AND (conjugations->'presenteIndicativo' IS NULL);

-- Verification query to check the updates
-- SELECT infinitive, conjugations->'presenteIndicativo' as presente_indicativo FROM verbs WHERE conjugations->'presenteIndicativo' IS NOT NULL ORDER BY type, infinitive;