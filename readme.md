! Milestone 1:
Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse.
Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto.
// Se lo 'status' del messaggio è 'sent', si assegna la classe che applicherà il colore verde; se è 'received', la classe corrispondente applicherà il colore bianco;
    Tramite il v-for si stampano i contatti nella realtiva sezione, con nome e avatar.

! Milestone 2:
Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione.
Click sul contatto mostra la conversazione del contatto cliccato.
// Con il v-for si stampano i messaggi del contatto visibile nella relativa sezione.

! Milestone 3:
Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde.
Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.
// Scrivo una funzione per creare un oggetto da inserire nell'array messages con 'message' legato al v-model dell'input e 'status' = 'sent';
    Con una timing function (con delay = 1s) genero un altro oggetto da inserire nell'array messages con 'message' = 'ok' e 'status' = 'received'.

! Milestone 4:
Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina).
// Lego al v-model della searchbar una variabile: se questa è vuota (default) o se il nome del contatto contiene la stringa nella variabile, allora la proprietà 'visible' è uguale a 'true';
    aggiungo un v-if ai contatti per renderli visibili solo se 'visible' = 'true'.

! Milestone 5 - opzionale:
Cancella messaggio: cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato.
Visualizzazione ora e ultimo messaggio inviato/ricevuto nella lista dei contatti.
// Una volta creato il menù a tendina, cliccando su 'cancella messaggio' l'oggetto a quell'indice viene eliminato dall'array.

