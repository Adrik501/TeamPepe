const Tinkerforge = require('tinkerforge');

const HOST = 'localhost';
const PORT = 4223;
const UID = 'TODO'; // Hier muss die tatsächliche UID eingesetzt werden

// Verbindung zum Tinkerforge Master
const ipcon = new Tinkerforge.IPConnection();

// Funktion zum Verbinden mit einem Tinkerforge-Gerät
function connectToBrick(uid) {
    console.log('Verbunden mit Brick mit UID:', uid);
    // Hier können weitere Verarbeitungsschritte implementiert werden
    // Zum Beispiel: Initialisierung von Sensoren, Aktoren usw.
    // Hier ein Beispiel für die Initialisierung eines Temperatursensors:
    const temperatureSensor = new Tinkerforge.BrickletPTC(uid, ipcon);
    temperatureSensor.getTemperature((temperature) => {
        console.log('Aktuelle Temperatur:', temperature / 100.0, '°C');
        // Hier können Sie weitere Aktionen basierend auf der Temperatur durchführen
        // Zum Beispiel: Benachrichtigung bei kritischer Temperatur
        if (temperature / 100.0 > 30) {
            sendNotification('Serverraumtemperatur über kritischer Grenze!');
        }
    });
}

// Funktion zum Senden von Benachrichtigungen
function sendNotification(message) {
    // Hier können Sie Code hinzufügen, um eine Benachrichtigung zu senden
    // Zum Beispiel: per E-Mail, SMS, Slack, etc.
    console.log('Benachrichtigung:', message);
}

ipcon.on(Tinkerforge.IPConnection.CALLBACK_CONNECTED, () => {
    console.log('Verbindung hergestellt');
    connectToBrick(UID);
});

ipcon.on(Tinkerforge.IPConnection.CALLBACK_ERROR, (error) => {
    console.error('Fehler bei der Verbindung:', error);
});

ipcon.connect(HOST, PORT);
