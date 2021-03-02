//Generare numero random per utente e pc
var userNumber = Math.floor(Math.random() * 6) + 1;

console.log(userNumber);

document.getElementById('user').innerHTML = "Dado dell'utente: " + userNumber;

var pcNumber = Math.floor(Math.random() * 6) + 1;

console.log(pcNumber);

document.getElementById('pc').innerHTML = "Dado del computer: " + pcNumber;

//Stabilire numero maggiore e determinare vincitore con messaggio
if (userNumber > pcNumber) {
  document.getElementById('winner').innerHTML = "L'utente vince!";
} else if (userNumber < pcNumber) {
  document.getElementById('winner').innerHTML = "Il computer vince!";
} else {
  document.getElementById('winner').innerHTML = "Pareggio!";
}
