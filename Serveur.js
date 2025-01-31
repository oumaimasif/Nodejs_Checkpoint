// Importation du module http
const http=require("http");
const port=3000;

// Création du serveur HTTP
const serveur=http.createServer((request,response)=>{

    response.writeHead(200,{'Content-Type':'text/html'});
    response.end('<h1> Hello Node !!!!</h1>\n');
});
serveur.listen(port);

console.log(` Démarage du programme http://localhost:${port} `);