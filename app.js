//trois values sont entrées par défaut  dans le document
// ici la fonction displayBlank est activée par la propriété onclick
// et remplace par, la méthode getElementById, les trois valeurs
// par une  chaîne de caractères vide aux trois 'input' ciblés par leurs ID
function displayBlank(){
document.getElementById('name').value="";
document.getElementById('firstname').value="";
document.getElementById('city').value="";
}
