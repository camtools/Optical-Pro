# Verifiche Web 2.3

- Selettore: FOV corretti per modulo, copertura su entrambi gli assi, proporzioni di sorgente differenti, fallback alla copertura migliore, nomi di camera in più lingue.
- Chromium e WebKit: switch reale fra flussi di prova con ID/colore differenti, ALEXA Mini 14 mm dopo correzione, ritorno alla principale, FOV separati, persistenza e migrazione delle impostazioni.
- Foto: provenienza della camera e colore dei pixel confermano la sorgente selezionata.
- Video: creazione tramite MediaRecorder, camera/FOV mantenuti e nessuno switch durante la registrazione.
- Scorrimento rapido durante un’apertura in corso: prevale la focale più recente e il salvataggio resta bloccato durante il cambio.
- Formato rinegoziato: nessun riutilizzo della correzione del formato precedente.
- Camera indisponibile o richiesta ignorata: ripristino della camera precedente e assenza di cicli continui di tentativi.
- Nessuna selezione automatica della camera frontale, del tele o di camere virtuali quando sono esposti moduli posteriori distinti.
- Una sola camera: fallback funzionante e indicazione dell’ultragrandangolare non esposta.
- Un solo flusso video attivo alla volta nelle prove.
- Regressione di cursore, ripristino, foto e video senza calibrazione obbligatoria.

Le prove usano sorgenti simulate. Il FOV del web rimane una stima o una regolazione dell’utente, non un dato ottico nativo certificato.

Test riproducibili della matematica e della selezione: node tests/optics.test.cjs e node tests/camera-policy.test.cjs.
