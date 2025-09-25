-- Update script to add Passato Prossimo conjugations to existing verbs
-- This extends the conjugations JSONB field without changing the schema
-- ARE VERBS (Regular) - Auxiliary: AVERE, Past Participle: -ato
-- parlare (to speak) - AVERE + parlato
UPDATE verbs
SET conjugations = conjugations || '{
  "passatoProssimo": {
    "pastParticiple": {
      "base": "parlato",
      "irregular": false
    },
    "conjugations": {
      "io": "ho parlato",
      "tu": "hai parlato",
      "luiLei": "ha parlato",
      "noi": "abbiamo parlato",
      "voi": "avete parlato",
      "loro": "hanno parlato"
    }
  }
}'::jsonb
WHERE infinitive = 'parlare';
-- mangiare (to eat) - AVERE + mangiato
UPDATE verbs
SET conjugations = conjugations || '{
  "passatoProssimo": {
    "pastParticiple": {
      "base": "mangiato",
      "irregular": false
    },
    "conjugations": {
      "io": "ho mangiato",
      "tu": "hai mangiato",
      "luiLei": "ha mangiato",
      "noi": "abbiamo mangiato",
      "voi": "avete mangiato",
      "loro": "hanno mangiato"
    }
  }
}'::jsonb
WHERE infinitive = 'mangiare';
-- camminare (to walk) - AVERE + camminato
UPDATE verbs
SET conjugations = conjugations || '{
  "passatoProssimo": {
    "pastParticiple": {
      "base": "camminato",
      "irregular": false
    },
    "conjugations": {
      "io": "ho camminato",
      "tu": "hai camminato",
      "luiLei": "ha camminato",
      "noi": "abbiamo camminato",
      "voi": "avete camminato",
      "loro": "hanno camminato"
    }
  }
}'::jsonb
WHERE infinitive = 'camminare';
-- cantare (to sing) - AVERE + cantato
UPDATE verbs
SET conjugations = conjugations || '{
  "passatoProssimo": {
    "pastParticiple": {
      "base": "cantato",
      "irregular": false
    },
    "conjugations": {
      "io": "ho cantato",
      "tu": "hai cantato",
      "luiLei": "ha cantato",
      "noi": "abbiamo cantato",
      "voi": "avete cantato",
      "loro": "hanno cantato"
    }
  }
}'::jsonb
WHERE infinitive = 'cantare';
-- giocare (to play) - AVERE + giocato
UPDATE verbs
SET conjugations = conjugations || '{
  "passatoProssimo": {
    "pastParticiple": {
      "base": "giocato",
      "irregular": false
    },
    "conjugations": {
      "io": "ho giocato",
      "tu": "hai giocato",
      "luiLei": "ha giocato",
      "noi": "abbiamo giocato",
      "voi": "avete giocato",
      "loro": "hanno giocato"
    }
  }
}'::jsonb
WHERE infinitive = 'giocare';
-- studiare (to study) - AVERE + studiato
UPDATE verbs
SET conjugations = conjugations || '{
  "passatoProssimo": {
    "pastParticiple": {
      "base": "studiato",
      "irregular": false
    },
    "conjugations": {
      "io": "ho studiato",
      "tu": "hai studiato",
      "luiLei": "ha studiato",
      "noi": "abbiamo studiato",
      "voi": "avete studiato",
      "loro": "hanno studiato"
    }
  }
}'::jsonb
WHERE infinitive = 'studiare';
-- lavorare (to work) - AVERE + lavorato
UPDATE verbs
SET conjugations = conjugations || '{
  "passatoProssimo": {
    "pastParticiple": {
      "base": "lavorato",
      "irregular": false
    },
    "conjugations": {
      "io": "ho lavorato",
      "tu": "hai lavorato",
      "luiLei": "ha lavorato",
      "noi": "abbiamo lavorato",
      "voi": "avete lavorato",
      "loro": "hanno lavorato"
    }
  }
}'::jsonb
WHERE infinitive = 'lavorare';
-- guardare (to watch) - AVERE + guardato
UPDATE verbs
SET conjugations = conjugations || '{
  "passatoProssimo": {
    "pastParticiple": {
      "base": "guardato",
      "irregular": false
    },
    "conjugations": {
      "io": "ho guardato",
      "tu": "hai guardato",
      "luiLei": "ha guardato",
      "noi": "abbiamo guardato",
      "voi": "avete guardato",
      "loro": "hanno guardato"
    }
  }
}'::jsonb
WHERE infinitive = 'guardare';
-- ERE VERBS (Regular) - Auxiliary: AVERE, Past Participle: -uto
-- vendere (to sell) - AVERE + venduto
UPDATE verbs
SET conjugations = conjugations || '{
  "passatoProssimo": {
    "pastParticiple": {
      "base": "venduto",
      "irregular": false
    },
    "conjugations": {
      "io": "ho venduto",
      "tu": "hai venduto",
      "luiLei": "ha venduto",
      "noi": "abbiamo venduto",
      "voi": "avete venduto",
      "loro": "hanno venduto"
    }
  }
}'::jsonb
WHERE infinitive = 'vendere';
-- credere (to believe) - AVERE + creduto
UPDATE verbs
SET conjugations = conjugations || '{
  "passatoProssimo": {
    "pastParticiple": {
      "base": "creduto",
      "irregular": false
    },
    "conjugations": {
      "io": "ho creduto",
      "tu": "hai creduto",
      "luiLei": "ha creduto",
      "noi": "abbiamo creduto",
      "voi": "avete creduto",
      "loro": "hanno creduto"
    }
  }
}'::jsonb
WHERE infinitive = 'credere';
-- ricevere (to receive) - AVERE + ricevuto
UPDATE verbs
SET conjugations = conjugations || '{
  "passatoProssimo": {
    "pastParticiple": {
      "base": "ricevuto",
      "irregular": false
    },
    "conjugations": {
      "io": "ho ricevuto",
      "tu": "hai ricevuto",
      "luiLei": "ha ricevuto",
      "noi": "abbiamo ricevuto",
      "voi": "avete ricevuto",
      "loro": "hanno ricevuto"
    }
  }
}'::jsonb
WHERE infinitive = 'ricevere';
-- temere (to fear) - AVERE + temuto
UPDATE verbs
SET conjugations = conjugations || '{
  "passatoProssimo": {
    "pastParticiple": {
      "base": "temuto",
      "irregular": false
    },
    "conjugations": {
      "io": "ho temuto",
      "tu": "hai temuto",
      "luiLei": "ha temuto",
      "noi": "abbiamo temuto",
      "voi": "avete temuto",
      "loro": "hanno temuto"
    }
  }
}'::jsonb
WHERE infinitive = 'temere';
-- ERE VERBS (Irregular) - Mixed auxiliaries and irregular past participles
-- essere (to be) - ESSERE + stato (irregular)
UPDATE verbs
SET conjugations = conjugations || '{
  "passatoProssimo": {
    "pastParticiple": {
      "base": "stato",
      "irregular": true
    },
    "conjugations": {
      "io": "sono stato/a",
      "tu": "sei stato/a",
      "luiLei": "è stato/a",
      "noi": "siamo stati/e",
      "voi": "siete stati/e",
      "loro": "sono stati/e"
    }
  }
}'::jsonb
WHERE infinitive = 'essere';
-- avere (to have) - AVERE + avuto (irregular)
UPDATE verbs
SET conjugations = conjugations || '{
  "passatoProssimo": {
    "pastParticiple": {
      "base": "avuto",
      "irregular": true
    },
    "conjugations": {
      "io": "ho avuto",
      "tu": "hai avuto",
      "luiLei": "ha avuto",
      "noi": "abbiamo avuto",
      "voi": "avete avuto",
      "loro": "hanno avuto"
    }
  }
}'::jsonb
WHERE infinitive = 'avere';
-- fare (to do/make) - AVERE + fatto (irregular)
UPDATE verbs
SET conjugations = conjugations || '{
  "passatoProssimo": {
    "pastParticiple": {
      "base": "fatto",
      "irregular": true
    },
    "conjugations": {
      "io": "ho fatto",
      "tu": "hai fatto",
      "luiLei": "ha fatto",
      "noi": "abbiamo fatto",
      "voi": "avete fatto",
      "loro": "hanno fatto"
    }
  }
}'::jsonb
WHERE infinitive = 'fare';
-- vedere (to see) - AVERE + visto (irregular)
UPDATE verbs
SET conjugations = conjugations || '{
  "passatoProssimo": {
    "pastParticiple": {
      "base": "visto",
      "irregular": true
    },
    "conjugations": {
      "io": "ho visto",
      "tu": "hai visto",
      "luiLei": "ha visto",
      "noi": "abbiamo visto",
      "voi": "avete visto",
      "loro": "hanno visto"
    }
  }
}'::jsonb
WHERE infinitive = 'vedere';
-- sapere (to know) - AVERE + saputo (irregular)
UPDATE verbs
SET conjugations = conjugations || '{
  "passatoProssimo": {
    "pastParticiple": {
      "base": "saputo",
      "irregular": true
    },
    "conjugations": {
      "io": "ho saputo",
      "tu": "hai saputo",
      "luiLei": "ha saputo",
      "noi": "abbiamo saputo",
      "voi": "avete saputo",
      "loro": "hanno saputo"
    }
  }
}'::jsonb
WHERE infinitive = 'sapere';
-- IRE VERBS (Regular) - Mixed auxiliaries, Past Participle: -ito
-- dormire (to sleep) - AVERE + dormito
UPDATE verbs
SET conjugations = conjugations || '{
  "passatoProssimo": {
    "pastParticiple": {
      "base": "dormito",
      "irregular": false
    },
    "conjugations": {
      "io": "ho dormito",
      "tu": "hai dormito",
      "luiLei": "ha dormito",
      "noi": "abbiamo dormito",
      "voi": "avete dormito",
      "loro": "hanno dormito"
    }
  }
}'::jsonb
WHERE infinitive = 'dormire';
-- partire (to leave) - ESSERE + partito (with agreement)
UPDATE verbs
SET conjugations = conjugations || '{
  "passatoProssimo": {
    "pastParticiple": {
      "base": "partito",
      "irregular": false
    },
    "conjugations": {
      "io": "sono partito/a",
      "tu": "sei partito/a",
      "luiLei": "è partito/a",
      "noi": "siamo partiti/e",
      "voi": "siete partiti/e",
      "loro": "sono partiti/e"
    }
  }
}'::jsonb
WHERE infinitive = 'partire';
-- aprire (to open) - AVERE + aperto (irregular past participle)
UPDATE verbs
SET conjugations = conjugations || '{
  "passatoProssimo": {
    "pastParticiple": {
      "base": "aperto",
      "irregular": true
    },
    "conjugations": {
      "io": "ho aperto",
      "tu": "hai aperto",
      "luiLei": "ha aperto",
      "noi": "abbiamo aperto",
      "voi": "avete aperto",
      "loro": "hanno aperto"
    }
  }
}'::jsonb
WHERE infinitive = 'aprire';
-- sentire (to hear/feel) - AVERE + sentito
UPDATE verbs
SET conjugations = conjugations || '{
  "passatoProssimo": {
    "pastParticiple": {
      "base": "sentito",
      "irregular": false
    },
    "conjugations": {
      "io": "ho sentito",
      "tu": "hai sentito",
      "luiLei": "ha sentito",
      "noi": "abbiamo sentito",
      "voi": "avete sentito",
      "loro": "hanno sentito"
    }
  }
}'::jsonb
WHERE infinitive = 'sentire';
-- finire (to finish) - AVERE + finito
UPDATE verbs
SET conjugations = conjugations || '{
  "passatoProssimo": {
    "pastParticiple": {
      "base": "finito",
      "irregular": false
    },
    "conjugations": {
      "io": "ho finito",
      "tu": "hai finito",
      "luiLei": "ha finito",
      "noi": "abbiamo finito",
      "voi": "avete finito",
      "loro": "hanno finito"
    }
  }
}'::jsonb
WHERE infinitive = 'finire';
-- IRE VERBS (Irregular)
-- venire (to come) - ESSERE + venuto (irregular past participle)
UPDATE verbs
SET conjugations = conjugations || '{
  "passatoProssimo": {
    "pastParticiple": {
      "base": "venuto",
      "irregular": true
    },
    "conjugations": {
      "io": "sono venuto/a",
      "tu": "sei venuto/a",
      "luiLei": "è venuto/a",
      "noi": "siamo venuti/e",
      "voi": "siete venuti/e",
      "loro": "sono venuti/e"
    }
  }
}'::jsonb
WHERE infinitive = 'venire';
-- dire (to say) - AVERE + detto (irregular past participle)
UPDATE verbs
SET conjugations = conjugations || '{
  "passatoProssimo": {
    "pastParticiple": {
      "base": "detto",
      "irregular": true
    },
    "conjugations": {
      "io": "ho detto",
      "tu": "hai detto",
      "luiLei": "ha detto",
      "noi": "abbiamo detto",
      "voi": "avete detto",
      "loro": "hanno detto"
    }
  }
}'::jsonb
WHERE infinitive = 'dire';
-- Verification queries to check the updates
-- SELECT infinitive, auxiliary_verb, regular_passato_prossimo, conjugations->'passatoProssimo' as passato_prossimo FROM verbs ORDER BY type, infinitive;