// Importation du module fs
const fs = require('fs');
//Ecrire dans un fichier
fs.writeFile('welcome.txt', 'Hello Node', function (err) {
   if (err) {
      console.error(err);
   } else {
      console.log("Écriture terminée !");

      // Lire le fichier pour vérifier que le contenu a bien ete ajoute
      fs.readFile('welcome.txt', 'utf8',function (err, data) {
         if (err) { 
            console.error(err);
         } else {
            //Afficher le contenu lu 
            console.log("Contenu : " + data.toString());
         }
      });
   }

});
//console.log("fin du programme");


