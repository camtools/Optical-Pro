# Optical Pro Web 2.2 — FOV semplice

Il mirino si usa immediatamente. Nella scheda FOV sono disponibili selezione della fotocamera, cursore e Ripristina automatico. Non servono fogli, misure o procedure di calibrazione.

## Automatico stimato

Il browser non fornisce il campo visivo ottico del formato come l'app nativa iPhone. Il valore automatico è quindi sempre presentato come “Automatico · FOV stimato”. La stima parte da un valore indicativo per la tipologia riconoscibile nel nome della fotocamera (principale 65°, ultra-wide 100°, tele 48°, frontale 62°), con fallback a 65°. Quando disponibile, lo zoom dichiarato dal flusso riduce la stima. Questi valori non sono profili misurati o certificati per il modello di telefono.

## Cursore facoltativo

Il cursore modifica il FOV orizzontale della fotocamera, non la focale della lente cinematografica. La modifica è immediata e viene salvata per identificatore di fotocamera e formato effettivamente consegnato dal browser, incluse risoluzione/orientamento, zoom, ridimensionamento e frequenza dichiarati. La schermata indica “Regolazione manuale”. Ripristina automatico elimina la regolazione del formato corrente e torna alla stima. Eventuali misure salvate nelle versioni precedenti sono mantenute come regolazioni personalizzate finché non si preme Ripristina automatico.

Senza identificatore persistente la regolazione vale solo per il flusso corrente. Non si trasferisce automaticamente a un'altra fotocamera/formato. I browser possono nascondere cambi interni di lente o elaborazione: l'automatico web non garantisce il campo visivo esatto telefono per telefono.

## Foto e video

Mirino, foto e registrazioni usano la stessa proiezione centrata. Le zone oltre la copertura della fotocamera restano vuote. I file conservano la provenienza “estimated” o “manual”; la regolazione del FOV non è descritta come una calibrazione misurata. La registrazione conserva i dati ottici presenti al suo avvio.

Non viene caricato OpenCV né altro motore di riconoscimento; la procedura con il foglio è stata rimossa.

## Verifiche

Chromium e WebKit con fotocamere simulate: foto subito in modalità stimata, cursore manuale, salvataggio al ricaricamento, video MediaRecorder, ripristino e separazione tra fotocamere/zoom. Questi controlli verificano comportamento e geometria del software, non la precisione fisica della stima su tutti i telefoni.
