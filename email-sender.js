var nodemailer = require('nodemailer');
// Définir les options de l'email
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'testemail@gmail.com',
    pass: 'azfgthcsqh'
  }
});
//le contenu de l'email
var mailOptions = {
  from: 'testemail@gmail.com',
  to: 'destinataire@example.com',//destinataire
  subject: 'Sending Email using Node.js',
  text: 'Bonjour, \n\n Ceci est un email de test.\n\nCordialement ^^'
};

// Pour envoyer l'email
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log('Erreur lors de l\'envoi :',error);
  } else {
    console.log('Email envoyé: ' , info.response);
  }
})
