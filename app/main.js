const Tinkerforge = require('tinkerforge');

const HOST = 'localhost';
const PORT = 4223;
const UID = 'TODO'; // Hier muss die tatsächliche UID eingesetzt werden

//Verbindung zum Tinkerforge Master
const ipcon = new Tinkerforge.IPConnection();

//Funktion zum Verbinden mit einem Tinkerforge-Gerät
function connectToBrick(uid) {
    // Hier können weitere Verarbeitungsschritte implementiert werden
    console.log('Verbunden mit Brick mit UID:', uid);
}
ipcon.on(Tinkerforge.IPConnection.CALLBACK_CONNECTED, () => {
    console.log('Verbindung hergestellt');
    connectToBrick(UID);
});

ipcon.on(Tinkerforge.IPConnection.CALLBACK_ERROR, (error) => {
    console.error('Fehler bei der Verbindung:', error);
});

ipcon.connect(HOST, PORT);
