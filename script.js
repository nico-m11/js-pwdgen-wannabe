var nome = prompt("Ciao visitatore come ti chiami?");

console.log("var primo input" + nome)


var cognome = prompt("qual'è il tuo cognome?");

console.log("var secondo input" + cognome)


var colore = prompt("dimmi quel'è il tuo colore preferito?");

console.log("var terzo input" + colore)



document.getElementById("psw").innerHTML = ("la tua password è questa " + nome + cognome + colore + 19);
