//Lista emails
var emails = ["pippo@gmail.com", "pluto@gmail.com", "topolino@gmail.com", "paperino@gmail.com", "ciao@gmail.com", "google@gmail.com", "apple@gmail.com","linux@gmail.com","windows@gmail.com"]

//Chiedere dato ad utente
var userEmail = prompt("Inserisci la tua email");

console.log(userEmail);

//Controllo email nella lista
var flag = false;

for (var i = 0; i < emails.length; i++) {
  if (emails[i] == userEmail) {
    flag = true;
  }
}

//Stampa messaggio appropriato
if (flag) {
  document.getElementById("message").innerHTML = "Accesso approvato!"
} else {
  document.getElementById("message").innerHTML = "Accesso negato! Inserisci una email valida."
}
