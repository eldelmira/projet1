

// Exercice 1 démonstration
function exercice1(){
    let a = prompt('Choisisez un nombre')
    let b = prompt('Choisisez un nombre')
    let Resultat1 = Number(a)+Number(b)
    document.write(Resultat1)
    document.write("<br><button><a href='index.html'>Retour</button>")
}

// Exercice 1 voir résultat
function p1(){
    document.write("<code>function exercice1(){<br>let a = prompt('Choisisez un nombre')<br>let b = prompt('Choisisez un nombre')<br>let Resultat1 = Number(a)+Number(b)<br>document.write(Resultat1)</code>")
    document.write("<br><button><a href='index.html'>Retour</button>")
}

// Exercice 3 démonstration

function affiche(){
    
    let a = prompt("Enter un nombre")
    for (var i=1; i<Number(a); i++)
        
    {
        document.write(i+"<br>")
        
    }
    document.write("<br><button><a href='index.html'>Retour</button>") 

}


// Exercice 3 voir résultat
function p3(){
    document.write("<code>function affiche(){<br>let a = prompt('Enter un nombre')<br>for (var i=0; i<Number(a); i++){<br>{document.write(i+'<br>')}}</code>");
    document.write("<br><button><a href='index.html'>Retour</button>") 
}

// Exercice 2 démonstration
function type1() {
    
    let a = prompt("Entrez quelque chose");
    
    if (a === null) {
        document.write("Type : null");
        return;
    }

    if (!isNaN(a) && a.trim() !== "") {
        document.write("Type : number");
    } else if (a.toLowerCase() === "true" || a.toLowerCase() === "false") {
        document.write("Type : boolean");
    } else {
        document.write("Type : string");
    }
    document.write("<br><button><a href='index.html'>Retour</button>") 
}

// Exercice 2 voir résultat

function p2(){
    document.write("<code>function type1() {<br>let a = prompt('Entrez quelque chose');<br>if (a === null) {<br>document.write('Type : null');return;}<br>if (!isNaN(a) && a.trim() !== '') {<br>document.write('Type : number');} else if (a.toLowerCase() === 'true' || a.toLowerCase() === 'false') {document.write('Type : boolean');}<br> else {document.write('Type : string');}}</code>");
    document.write("<br><button><a href='index.html'>Retour</button>") 
}

// Exercice 4 demonstration

function factorielle() {
    n = prompt('Entrer un nombre');
    if (Number(n) < 0){
        document.write("La factorielle n'est pas définie pour les nombres négatifs.");}
     else{
        let resultat = 1;
        let i = 1;
        while (i <= n) {
            resultat *= i;
            i++;
        }
    alert(resultat);
    }
    document.write("<br><button><a href='index.html'>Retour</button>") 
}

// Exercice 4 voir la solution
function p4(){
document.write("<code>function factorielle() {<br>n = prompt('Entrer un nombre');<br>if (Number(n) < 0){<br>document.write('La factorielle n'est pas définie pour les nombres négatifs.');}<br>else{<br>let resultat = 1;<br>let i = 1;<br>while (i <= n) {<br>resultat *= i;<br>i++;<br>}<br>alert(resultat);<br>}}<br></code>")
document.write("<br><button><a href='index.html'>Retour</button>") 
}   


//Exercice 5 démonstration
function tableMultiplication() {
    let n =Number(prompt("Entrer un nombre"))
    let mut = Number(prompt("Entrer un nombre."))
   for (i  = 1; i <= mut; i++) {
        document.write(n +'  x '+ i+ ' ' + '=' +' ' + n * i+' <br>')
    }
    document.write("<br><button><a href='index.html'>Retour</button>")    
    
       
}
// Exercice 5 voir la solution
function p5(){ 
    document.write("<code>function tableMultiplication() {<br>let n =Number(prompt('Entrer un nombre'))<br>let mut = Number(prompt('Entrer un nombre.'))<br>for (i  = 1; i <= mut; i++) {<br>document.write(n +'  x '+ i+ ' ' + '=' +' ' + n * i+' <br>')}<br>}</code>")
    document.write("<br><button><a href='index.html'>Retour</button>") 
}

// Exercice 6
function tva(){
    let ht = Number(prompt('Montant HT'))
    let a = Number(prompt('Pourcenatge du tva'))
    let tva1 = (ht*a)/100
    let ttc = ht + tva1
    document.write(ttc)
    document.write("<br><button><a href='index.html'>Retour</button>") 
}

function p6(){ 
document.write("<code>function tva(){<br>let ht = Number(prompt('Montant HT'))<br>let a = Number(prompt('Pourcenatge du tva'))<br>let tva1 = (ht*a)/100<br>let ttc = ht + tva1<br>document.write(ttc)<br>}</code>")
document.write("<br><button><a href='index.html'>Retour</button>") 
}

// Exercice 7
function pairs(){
    a = prompt('Entrer un nombre')
    Pairs = []
    imPairs = []
    for(i=1; i<=a; i++){
        if (i%2===0){
            Pairs.push(i)
        }
        else{
            imPairs.push(i)
        }

    }
    
    document.write('Les nombres paires:'+ ' ' +Pairs+ '<br>')
    document.write('Les nombres impairs : '+ ' '+imPairs)
    document.write("<br><button><a href='index.html'>Retour</button>") 
}

// Exercice 7 voir la solution
function p7(){ 
document.write("<code>function pairs(){<br>a = prompt('Entrer un nombre')<br>Pairs = []<br>imPairs = []<br>for(i=1; i<=a; i++){<br>if (i%2===0){<br>Pairs.push(i)<br>}<br>else{<br>imPairs.push(i)<br> }<br>}<br>document.write('Les nombres paires:'+ ' ' +Pairs)<br>document.write('Les nombres impairs : '+ ' '+imPairs)</code>")
document.write("<br><button><a href='index.html'>Retour</button>") 
}


//Exercice 8

function occur(){
    let nb = 0;
    let mot = String(prompt('Entrez un mot :'));
    

    let c = prompt("Veuillez choissir une seule lettre : ");

    if (c.length !== 1){
        alert("Veuillez choisir une lettre :")
        return;
    }  
    else{

        for(let i=0; i < mot.length ; i++){
        if(mot[i] === c){
            nb += 1;
        }
    }
 }
    document.write('La lettre '+' '+c+' '+'  est apparue '+nb+' '+'fois dans le mot'+' '+ mot);
    document.write("<br><button><a href='index.html'>Retour</button>") 
    
}

function p8(){

document.write("<code>function occur(){<br>let nb = 0;<br>let mot = String(prompt('Entrez un mot :'));<br>let c = prompt('Veuillez choissir une seule lettre : ');<br><br>if (c.length !== 1){<br></br>alert('Veuillez choisir une lettre :')<br>return;<br>else{<br><br>for(let i=0; i < mot.length ; i++){<br>if(mot[i] === c){<br>nb += 1;<br>}<br>}<br>}<br>document.write('La lettre '+' '+c+' '+'  est apparue '+nb+' '+'fois dans le mot'+' '+ mot);}</code>")
document.write("<br><button><a href='index.html'>Retour</button>") 
}

// Exercice 9
function affiche1(){
    document.write('<table border=2px width=30% height=100px>')
   
    c = Number(prompt("Entrer un chiffre en 1 et 4"))
        for (i=1; i<=c;i++){
            mot = prompt('Entrer un mot');
            document.write('<tr><td>'+ ' '+mot+'</td></tr>')
    }
    document.write('</table>');
    document.write("<br><button><a href='index.html'>Retour</button>") 
}


function p9(){
document.write("<code>function affiche(){<br>document.write('<table border=2px width=30% height=100px>')<br>c = Number(prompt('Entrer un chiffre en 1 et 5'))<br>for (i=1; i<=c;i++){<br>mot = prompt('Entrer un mot');<br>document.write(//'<tr><td>+ ' '+mot+</td></tr>')<br>}<br>document.write('</table>')//;<br>}</code>")
document.write("<br><button><a href='index.html'>Retour</button>") 
} 
   

//Exercice 10 démonstration
function jeu(){
    let a = Math.floor(Math.random() * 50);
    let u = Number(prompt('Veuiller saissir une valeur'));
    let i=0;
    while(a!==u){
        i++;
        if(a < u){
            alert('La valeur proposée est trop grande');
           
        }
        else{ 
            alert('La valeur proposée est trop petite');
           
        }
        u = Number(prompt('Essayez encore :'));
        
   
    }
    document.write('Bravo ! La valeur cherchée est bien ' + a + '.');
    document.write("<br><button><a href='index.html'>Retour</button>") 
    
       
}
//Exercice 10 voir la solution
function p10(){

document.write("<code>function jeu(){<br>let a = Math.floor(Math.random() * 50);<br>let u = Number(prompt('Veuiller saissir une valeur'));<br>let i=0;<br>while(a!==u){<br>i++;<br>if(a < u){<br>alert('La valeur proposée est trop grande');<br>}<br>else{<br>alert('La valeur proposée est trop petite');<br>}<br>u = Number(prompt('Essayez encore :'));<br>}<br>alert('Bravo ! La valeur de cherchée est bien,'+' '+ a);<br>}<br></code>")
document.write("<br><button><a href='index.html'>Retour</button>") 
}
// Exercice 11 démonstration
function maximum(){
    let L = [];
    let a = Number(prompt('Enter un nombre'));
    for(i=0; i<=a; i++){
        L.push(i)
        
    }
    document.write("L'inverse de la liste de L est:'+ ' ',L.reverse()")
    document.write("<br><button><a href='index.html'>Retour</button>") 
}

//Exercice 10 voir la solution
function p11(){
document.write("<code>function maximum(){<br>let L = [];<br>let a = Number(prompt('Enter un nombre'));<br>for(i=0; i<=a; i++){<br>L.push(i)<br>}<br>document.write('L//inverse de la liste de L est:'+ ' ',L.reverse())<br>}</code>")
document.write("<br><button><a href='index.html'>Retour</button>") 
}

//Exercice 12 démonstration
function jeu1(){
    
    nb=0
    for(i=1;i<=5;i++){
        let a = Math.floor(Math.random() * 7);
        
        
        if (a===6){
            nb++;
           
            
        }
        else{
            document.write("Ce n'est pas 6, c'est : " + a + "<br>");
        }
        
        
    } document.write('Nombre total de 6 générés : ' + nb + '<br>');
      document.write("<br><button><a href='index.html'>Retour</button>") 
   
}
// Exercice 12 voir la solution

function p12(){
document.write("<code>function jeu1(){<br>nb=0<br>for(i=1;i<=5;i++){let a = Math.floor(Math.random() * 7);<br>if (a===6){<br>nb++;<br>}<br>else{<br>document.write('Ce n'est pas 6, c'est : ' + a + '<br>');<br}<br>} document.write('Nombre total de 6 générés : ' + nb + '<br>');<br>}</code>")
document.write("<br><button><a href='index.html'>Retour</button>") 
}

//Exercice 13 démonstration
//𝑥3 − 3𝑥 + 1
function f() {
    // Demander les valeurs à l'utilisateur
    let x = Number(prompt('Entrez un nombre pour x :'));
    let a = Number(prompt('Entrez une puissance a :'));
    let b = Number(prompt('Entrez un coefficient b :'));
    let c = Number(prompt('Entrez une constante c :'));

    // Calculer la valeur de la fonction
    let resultat = x ** a - b * x + c;

    // Afficher la fonction et son résultat
    document.write(
        'La fonction : f(x) = '+' '+x+' '+'**'+' '+a+''+'-'+''+ b+''+'*'+''+x+'' + '+'+' '+ c+''+' ' +'est égale à '+' '+resultat
    );
    document.write("<br><button><a href='index.html'>Retour</button>") 
}
// Exercice 13 voir la solution

function p13(){ 
document.write("<code>function f() {<br><!-- Demander les valeurs à l'utilisateur--><br>let x = Number(prompt('Entrez un nombre pour x :'));<br>let a = Number(prompt('Entrez une puissance a :'));<br>let b = Number(prompt('Entrez un coefficient b :'));<br>let c = Number(prompt('Entrez une constante c :'));<br><br><!--Calculer la valeur de la fonction--><br>let resultat = x ** a - b * x + c;<br><!--Afficher la fonction et son résultat--><br>document.write('La fonction : f(x) = '+' '+x+' '+'**'+' '+a+''+'-'+''+ b+''+'*'+''+x+'' + '+'+' '+ c+''+' ' +'est égale à '+' '+resultat);<br>}</code>")
document.write("<br><button><a href='index.html'>Retour</button>") 
}

// Exercice 14 démonstration
function longueur(){
    mot = String(prompt('Veuiller saisir un mot'));
    mot1 = String(prompt('Veuiller saisir un mot'));
    if(mot.length > mot1.length){
        document.write('Le mot'+' '+mot+' '+'comporte'+' '+mot.length+' '+ 'caractère et est donc le plus long');
    }
    else{
        document.write('Le mot'+' '+mot1+' '+'comporte'+' '+mot1.length+' '+ 'caractère et est  donc le plus long');
     
    }
    document.write("<br><button><a href='index.html'>Retour</button>") 
}

// Exercice 14 voir la solution

function p14(){ 

document.write("<code>function longueur(){<br>mot = String(prompt('Veuiller saisir un mot'));<br>mot1 = String(prompt('Veuiller saisir un mot'));<br>if(mot.length > mot1.length){<br>document.write('Le mot'+' '+mot+' '+'comporte'+' '+mot.length+' '+ 'caractère et est donc le plus long');<br>}<br>else{<br>document.write('Le mot'+' '+mot1+' '+'comporte'+' '+mot1.length+' '+ 'caractère et est  donc le plus long');<br>}<br}</code>")
document.write("<br><button><a href='index.html'>Retour</button>") 
}

//Exercice 15 démonstration

function date(){
    a = Number(prompt('Entrer votre année de naissance:'));
    b = Number(prompt('Entrer votre année actuelle:'))
    age = b-a
    document.write('Vous avez'+' '+age+' '+'ans.')
    document.write("<br><button><a href='index.html'>Retour</button>") 
;
}

// Exercice 15 voir solution
function p15(){

document.write("<code>function date(){<br>a = Number(prompt('Entrer votre année de naissance:'));<br>b = Number(prompt('Entrer votre année actuelle:'))<br>age = b-a<br>document.write('Vous avez'+' '+age+' '+'ans.');<br>}</code>")
document.write("<br><button><a href='index.html'>Retour</button>") 

}



function saveButton() {
    const exercices = []; // Liste des exercices

    // Parcourir toutes les sections d'exercices
    const sections = document.querySelectorAll(".section");
    sections.forEach((section, index) => {
        const exercice = {}; // Objet pour un exercice

        // Récupérer la question
        const questionElement = section.querySelector("p.Question");
        if (questionElement) {
            exercice.question = questionElement.textContent.trim();
        }

        // Récupérer les fonctions associées
        const solutionFunctionName = `p${index + 1}`;
        const demonstrationFunctionName = getDemonstrationFunctionName(index + 1);

        // Ajouter la solution (code)
        if (typeof window[solutionFunctionName] === "function") {
            exercice.solution = formatCode(window[solutionFunctionName]);
        } else {
            exercice.solution = "Solution non définie.";
        }

        // Ajouter la démonstration (code)
        if (typeof window[demonstrationFunctionName] === "function") {
            exercice.demonstration = formatCode(window[demonstrationFunctionName]);
        } else {
            exercice.demonstration = "Démonstration non définie.";
        }

        // Ajouter l'exercice complet à la liste
        exercices.push(exercice);
    });

    // Convertir en JSON
    const jsonData = JSON.stringify(exercices, null, 2);

    // Générer le fichier JSON
    const blob = new Blob([jsonData], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    // Créer un lien pour télécharger
    const link = document.createElement("a");
    link.href = url;
    link.download = "exercices.json";
    document.body.appendChild(link);
    link.click(); // Lancer le téléchargement
    document.body.removeChild(link);

    // Libérer l'URL
    URL.revokeObjectURL(url);
}

// Fonction pour formater le code
function formatCode(func) {
    return func
        .toString()
        .replace(/^\s*|\s*$/g, "") // Supprimer espaces au début/fin
        .replace(/\s{2,}/g, " ")   // Remplacer plusieurs espaces par un seul
        .replace(/</g, "&lt;")    // Échapper caractères spéciaux
        .replace(/>/g, "&gt;");
}

// Fonction pour récupérer le nom de la fonction démonstration
function getDemonstrationFunctionName(index) {
    switch (index) {
        case 1: return "exercice1";
        case 2: return "type1";
        case 3: return "affiche";
        case 4: return "factorielle";
        case 5: return "tableMultiplication";
        case 6: return "tva";
        case 7: return "pairs";
        case 8: return "occur";
        case 9: return "affiche1"
        case 10: return "jeu"
        case 11: return "maximum"
        case 12: return "jeu1"
        case 13: return "f"
        case 14: return "longueur"
        case 15: return "date"
       
        

        // Ajouter d'autres correspondances pour les exercices suivants si nécessaire
        default: return null;
    }
}
