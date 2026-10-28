# Optical Pro Web 2.3 — FOV e cambio automatico di camera

Il mirino si usa immediatamente. Nella scheda FOV sono disponibili selezione Automatica delle camere, scelta esplicita di una camera, cursore e Ripristina automatico. Non servono fogli o misure obbligatorie.

## Switch automatico

La modalità Automatica sceglie fra le camere posteriori distinguibili dal browser, preferendo la principale e passando all’ultragrandangolare quando serve un campo più ampio. Il cursore non disattiva questa modalità. Tornando a una focale più lunga si può tornare alla principale, con il suo FOV salvato.

La selezione confronta la copertura su entrambi gli assi usando il FOV corretto di ciascuna camera e le proporzioni del video. Le camere frontali e tele non vengono scelte automaticamente. Le camere virtuali vengono escluse se sono disponibili moduli posteriori distinti. La scelta esplicita nel selettore resta possibile, compreso il tele.

Ogni cambio richiede un nuovo flusso con il deviceId della camera desiderata. Prima di aprirlo viene fermato il precedente; il mirino torna pronto solo dopo l’arrivo delle nuove immagini. Foto e registrazioni sono bloccate durante il cambio. Richieste ravvicinate usano la focale più recente e una registrazione in corso mantiene la sua camera. Identificatori restituiti dal browser diversi da quelli richiesti non vengono mostrati come un cambio riuscito.

I metadati dell’ultimo formato osservato aiutano a prevedere quale camera scegliere; dopo l’apertura vengono controllati di nuovo il formato realmente consegnato e la sua regolazione. Il programma non applica a un nuovo formato una correzione appartenente a un formato precedente.

Se una camera non è disponibile, il programma prova a ripristinare quella precedente e offre Riprova cambio camera. Non esegue tentativi continui. Se il browser espone una sola camera o non distingue l’ultragrandangolare, la schermata lo indica e non finge uno switch. L’area fuori copertura resta vuota.

## FOV automatico stimato

Il browser non fornisce il FOV ottico del formato come l’app nativa iPhone. Il valore iniziale è quindi indicato come “Automatico · FOV stimato”. La stima usa il tipo riconoscibile nel nome della camera: principale 65°, ultra-wide 100°, tele 48°, frontale 62°, con fallback a 65°. Lo zoom dichiarato, quando disponibile, riduce la stima. Nomi e capacità servono a distinguere le camere, non certificano un campo visivo.

Il browser può gestire internamente più lenti senza esporre un deviceId distinto. In questo caso il sito non può garantire lo stesso controllo dei moduli offerto da AVFoundation nell’app iPhone.

## Cursore e persistenza

Il cursore modifica il FOV orizzontale della camera del telefono, separatamente dalla focale cinematografica. La regolazione è salvata per identificatore e formato effettivo del flusso: risoluzione/orientamento, zoom, ridimensionamento e frequenza dichiarata. Ogni camera recupera la propria regolazione, anche mentre la selezione dei moduli resta Automatica.

Ripristina automatico rimuove la regolazione FOV della camera/formato attivi. Eventuali correzioni precedenti sono mantenute. Senza identificatore persistente la regolazione vale solo per il flusso corrente. Il primo avvio della 2.3 abilita una volta il nuovo selettore Automatica conservando le correzioni; le scelte esplicite successive restano salvate.

## Foto, video e verifiche

Mirino e media esportati usano la stessa proiezione. I file riportano la camera effettiva e la provenienza estimated/manual del FOV. Il video conserva i dati ottici presenti al suo avvio.

Collaudi Chromium e WebKit con flussi simulati distinti per ID e colore: ALEXA Mini Open Gate / 14 mm dopo regolazione FOV, ritorno alla principale, correzioni separate, persistenza, foto e video, scorrimento mentre un cambio è in corso, formato rinegoziato, camera indisponibile o richiesta ignorata, una sola camera e assenza di flussi lasciati attivi. Verifiche matematiche di copertura su entrambi gli assi. Questi test verificano il software; non sono una misurazione fisica del FOV su tutti i telefoni/browser.

Riferimento API: https://www.w3.org/TR/mediacapture-streams/ — deviceId, getSettings, enumerateDevices e facingMode. La disponibilità concreta dei moduli dipende dal browser e dal dispositivo.
