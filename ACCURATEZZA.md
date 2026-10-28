# Optical Pro Web 2.1 — verifica guidata

La webapp usa una proiezione rettilineare centrata, condivisa tra mirino, foto e registrazioni. Formato di consegna, dimensioni nominali del sensore e squeeze anamorfico determinano il frame simulato. I dati di catalogo restano nominali.

## Uso

1. In CALIBRA aprire il foglio da stampare. Stampare senza deformarlo e tenerlo piano; non servono larghezza della stampa né distanza dalla lente. Una superficie rigida opaca è preferibile a uno schermo.
2. Premere Verifica guidata. Inquadrare tutta la scacchiera frontalmente, da sinistra/destra e dall’alto/basso. Tenere fermo il telefono a ogni posizione. I punti ciano indicano il riconoscimento, quelli verdi un’acquisizione.
3. Il programma raccoglie 12 inquadrature diverse. A verifica completata premere Usa calibrazione. Annullare o incontrare un errore conserva la misura precedente.

La verifica manuale precedente resta in “Verifica manuale e altre opzioni”. Prima di una misura valida si vede l’immagine completa senza simulazione e il salvataggio del mirino resta disabilitato.

## Metodo

Bersaglio ChArUco 7 × 5, dizionario 4x4/50, rapporto simbolo/quadrato 0,72. Il bersaglio SVG è generato dalla stessa definizione del rilevatore. I punti interni identificati vengono affinati con gradienti di intensità. La misura usa più viste del piano: la scala fisica dei quadrati si semplifica nel calcolo degli intrinseci.

Il rilevatore scarta immagini troppo piccole, fuori margine o sfocate, attende stabilità e rifiuta duplicati. Servono almeno due viste per ciascuna delle cinque direzioni e due ulteriori viste inclinate. Il calcolo controlla centro ottico, distorsione radiale, errore di riproiezione, incertezza sulla focale e concordanza fra due sottoinsiemi. Vengono rifiutati risultati non compatibili con il modello centrato del mirino. Un basso errore matematico non certifica da solo la precisione ottica fisica.

La misura resta separata per identificatore di fotocamera e formato video effettivo, incluse risoluzione/orientamento del flusso, zoom, modalità di ridimensionamento e frequenza dichiarati. Senza identificatore persistente vale solo per il flusso corrente. I browser possono nascondere cambi interni di lente/elaborazione: ricontrollare dopo aggiornamenti e cambi della lente. La calibrazione iOS non è trasferibile direttamente al browser, che può effettuare crop differenti.

## Esecuzione e dipendenza

OpenCV 4.13.0 viene caricato solo aprendo la verifica guidata, da https://docs.opencv.org/4.13.0/opencv.js. Serve una connessione per il primo caricamento. La dipendenza è separata dall’avvio dell’app e dalla verifica manuale. Riconoscimento e calcoli avvengono in un Web Worker locale: nessuna immagine viene caricata su un server. Annullamento, cambio formato e passaggio in background interrompono la procedura.

Riferimenti del metodo: https://docs.opencv.org/4.13.0/da/d13/tutorial_aruco_calibration.html e https://github.com/opencv/opencv/blob/4.13.0/modules/js/test/test_objdetect.js.

## Verifiche eseguite

Bersagli sintetici proiettati con campo visivo noto: rilevamento reale, acquisizione automatica di 12 viste e recupero del FOV entro 0,25 gradi nel caso di prova. Riprese insufficienti, ripetute, rumorose, distorte o con centro ottico spostato vengono rifiutate. Collaudo Chromium e WebKit (motore di Safari) dell’intera procedura, salvataggio esplicito, provenienza nelle foto e annullamento senza perdita della calibrazione precedente. Controlli di regressione su foto, video, persistenza, isolamento tra fotocamere e reset.

Queste verifiche usano immagini sintetiche. Non equivalgono a una misurazione fisica su tutti i telefoni/browser.
