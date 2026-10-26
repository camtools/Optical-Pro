# Optical Pro Web 2.0

La webapp utilizza la geometria del frame dell'app iPhone 2.0, compresi crop del formato e squeeze delle serie anamorfiche. I dati di catalogo restano nominali.

Il browser non offre il campo visivo ottico del formato come AVFoundation: non vengono più proposti valori Wide/UW/2x/Android dedotti dal modello. Prima della calibrazione si vede la ripresa completa, senza simulazione; foto e registrazioni del mirino richiedono una misura.

In CALIBRA selezionare la fotocamera, inquadrare un oggetto piano centrato e parallelo al telefono, misurare larghezza e distanza dalla lente, acquisire l'immagine completa e allineare le due guide ai bordi dell'oggetto. Le due misure devono essere in centimetri. Il campo visivo deriva da 2 atan(larghezza / (2 distanza frazione_immagine)).

La misura è salvata in questo browser, separatamente per identificatore di fotocamera, dimensioni effettive del video, zoom, modalità di ridimensionamento, orientamento del flusso e frequenza dichiarata. Un cambiamento osservabile richiede una misura distinta. Senza identificatore persistente si conserva la misura solo per il flusso corrente. La misura dell'app nativa non viene importata: il browser può ritagliare diversamente.

Il browser può nascondere cambi interni di lente o elaborazione. La calibrazione non può rilevarli: verificare l'inquadratura dopo aggiornamenti o cambi della lente e non considerare la misura una certificazione ottica. Le zone fuori copertura restano vuote. Riprese e foto usano la stessa proiezione centrata; nessun fallback registra il video grezzo al posto del mirino.

Verifiche: formule ottiche e crop; collaudo browser con fotocamera sintetica di blocco pre-calibrazione, misura, foto con provenienza, persistenza al ricaricamento, registrazione reale tramite MediaRecorder, isolamento tra fotocamere e reset; nessun errore JavaScript. Nessuna misura fisica eseguita dal collaudo automatico.
