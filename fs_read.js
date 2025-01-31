const http = require('http');
const port = 3001;

//avec ce module en peut lire les fichier et les sauvgarder....
const fs = require('fs');

const serveur = http.createServer((request, response) => {

    //ingorer l'affichage de la requête => favicon.ico (l'icône du site affichée dans l'onglet du navigateur cette requête peut provoquer des erreurs si le fichier favicon.ico n'esxist ps) 
    console.log('URL de la requête:', request.url);

    // Lecture du fichier index.html dans le même dossier './'
    fs.readFile('./index.html', function (err, data) {
        if (err) {
            response.writeHead(400, { 'Content-Type': 'text/plain' });
            response.end('Erreur lors de la lecture du fichier :', err);
            console.error(err);
        }
        else {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.end(data);
        }
        // console.log("Programme terminé !");
    })
});

serveur.listen(port, () => {
    console.log(`Serveur fonctionne bien à http://localhost:${port} `);
});

