_________________________________________________________________
In questo esercizio creeremo un server http con node:
___________________________________

    Importare il metodo createServer da node:http
    ed assegnamolo ad un constante server, a questo
    metodo passeremo una arrow function con due 
    oggetti che saranno:
        _____________________________________________
        request:
            è un'istanza che viene fornita 
            da node.js che prende un messagio
            in arrivo da un client verso
            il server, a cui è collegato
            il sito, esistono diversi 
            metodi per lavore con questo
            elemento ed il server
        ___________________________________
        response:
            è un'istanza sempre fornita da
            node.js ed è una risposta dal 
            server ad un richiesta, ci sono
            diversi metodi con cui si può
            lavorare con questa istanza
        __________________________________________________
    
    fatto questo creeremo un console.log per controllare
    il successo della request.

    Aseegenremo a response i seguenti valori:
       _____________________________________________
        response.statusCode = 200;
            questo response code 200
            indica una risposta
            avvenuta con successo,
            un esempio di risposta 
            con questo tipo di 
            sintassi potrebbe essere
            la 404, che serebbe un
            errore di page not found
        _____________________________________
        response.setHeader("Content-Type", "text/html");
            in questo modo settiamo il
            tipo di data da inviare
            usando il metodo setHeader,
            possono essere settati diversi
            tipi di Header, ma in questo 
            caso useremo il "Content-Type"
            e diremmo che il valore sarà
            testo html
        ____________________________________
        response.end("<html><body><h1>Welcome to my page with server</h1></body></html>");
            questo metodo inizializa
            la fine di queste risposte
            che sarà visualizzata all'
            interno del sito web
        ________________________________________________________

    Fatto qeusto inzializzeremo il server chiamandolo
    con il metono listen assegnandoli una port 3000
    (porta di default per inizilizzare un server senza
    incorrere ad eventuali errori), ed una arrow funcion 
    con un console.log per verificare il successo della 
    precendete operazione con scritto il link http a cui 
    arriveranno richieste e risposte dal server e dall'
    utente