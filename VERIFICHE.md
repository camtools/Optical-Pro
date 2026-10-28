# Verifiche 2.1

- OpenCV 4.13.0: rilevamento delle immagini del bersaglio realmente proiettate, 12 acquisizioni automatiche, recupero di un FOV noto entro 0,25° nel caso sintetico.
- Rifiuto di viste insufficienti, ripetute, rumorose, con forte distorsione o centro ottico incompatibile.
- Scacchiera SVG identica pixel per pixel al bersaglio generato dalla definizione del rilevatore.
- Chromium e WebKit: worker reale, tutte le acquisizioni automatiche, proposta del risultato senza salvataggio implicito, conferma, foto con provenienza e annullamento che conserva il risultato precedente.
- Regressioni: calibrazione manuale, foto, video MediaRecorder, persistenza al ricaricamento, separazione delle fotocamere e reset.

Le prove automatiche usano immagini sintetiche, non una misura fisica su tutti i telefoni. L’app nativa usa i dati del formato iOS e offre una verifica facoltativa separata.
