# Step  0 - Progettazione

Progettare la struttura del global state sulla linea degli esercizi svolti 
nei giorni precedenti.

# Step 1 - Layout base
Creare un layout base con una searchbar (una input e un button) in cui possiamo 
scrivere completamente o parzialmente il nome di un film.
Possiamo, cliccando il  bottone, cercare sull’API tutti i film che contengono 
ciò che ha scritto l’utente. Vogliamo dopo la risposta dell’API visualizzare 
a schermo i seguenti valori per ogni film trovato: 
 * Titolo
 * Titolo Originale
 * Lingua
 * Voto (medio)

# Step 2 - Film e serie tv
## Primo task
Ottenuti i risultati, trasformiamo la stringa statica della lingua in una vera e 
propria bandiera della nazione corrispondente, gestendo il caso in cui non abbiamo 
la bandiera della nazione ritornata dall’API (le flag non ci sono in FontAwesome).

## Secondo task
Allarghiamo poi la ricerca anche alle serie tv. Con la stessa azione di ricerca dovremo prendere sia i film che corrispondono alla query, sia le serie tv, stando attenti ad avere alla fine dei valori simili (le serie e i film hanno campi nel JSON di risposta diversi, simili ma non sempre identici)
Qui un esempio di chiamata per le serie tv:
https://api.themoviedb.org/3/search/tv?api_key=e99307154c6dfb0b4750f6603256716d&language=it_IT&query=scrubs


