var timer = null;

// Wechselt zwischen den verschiedenen Schritten: (1)Start Countdown, (4)Countdown, (3)Start Rackete, (4)Erfolg, (5)Verlust.
var wechselSchritt = function(nummer){
    var countDownNummer = 10;
    clearInterval(timer);
    document.body.className = 'x'+nummer;
    
    // Timer auf 0 stellen (geht aber nicht)
    if (nummer == 1) {
        countDownNummer = 10;
    }

    // Startet den Countdown
    if (nummer == 2) {
        // Alle 1000ms den timer um 1 verringern
        timer = setInterval(function(){
            countDownNummer = countDownNummer - 1;
            document.getElementById('zahl').innerHTML = countDownNummer;
            
            // Wenn countdown zu ende ist -> gehe zu Schitt 3
            if (countDownNummer < 0) {
                wechselSchritt(3)
            }
        }, 1000)
    // Startet Auslosung ob es einen Erfolg oder eine Niederlage gibt.
    }else if (nummer == 3) {
        // Diese Funktion läuft in einem Zeitraum von 3s.
        var ttest = setTimeout(function() {
            var rndmNumber = 0;
            // Erstellt zufällige nummer zwischen 0 und 1, multipliziert diese mal 10 und rundet das Ergebniss.
            rndmNumber = Math.round(Math.random()*10);
            console.log(rndmNumber);

            // Ermittelt anhand der gezogenen Nummer über Sieg oder Niederlage. Hier auch einstellen der Wahrschenlichkeiten.
            if (rndmNumber > 4) {
                wechselSchritt(4)
            }else {
                wechselSchritt(5)
            }
        }, 3000)
            
    }


}

