

// Exercice 1 démonstration
function exercice1(){
    let a = prompt('Choisisez un nombre')
    let b = prompt('Choisisez un nombre')
    let Resultat1 = Number(a)+Number(b)
    document.write(Resultat1)
}

// Exercice 1 voir résultat
function p1(){
    document.write("<code>function exercice1(){<br>let a = prompt('Choisisez un nombre')<br>let b = prompt('Choisisez un nombre')<br>let Resultat1 = Number(a)+Number(b)<br>document.write(Resultat1)</code>")
}

// Exercice 2 démonstration
function affiche(){
    let a = prompt("Enter un nombre")
    for (var i=1; i<Number(a); i++)
        
    {
        document.write(i+"<br>")
    }

}

// Exercice 2 voir résultat
function p3(){
    document.write("<code>function affiche(){<br>let a = prompt('Enter un nombre')<br>for (var i=0; i<Number(a); i++){<br>{document.write(i+'<br>')}}</code>");
}

// Exercice 3 démonstration
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
}

// Exercice 3 voir résultat

function p2(){
    document.write("<code>function type1() {<br>let a = prompt('Entrez quelque chose');<br>if (a === null) {<br>document.write('Type : null');return;}<br>if (!isNaN(a) && a.trim() !== '') {<br>document.write('Type : number');} else if (a.toLowerCase() === 'true' || a.toLowerCase() === 'false') {document.write('Type : boolean');}<br> else {document.write('Type : string');}}</code>");
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
}

// Exercice 4 voir la solution
function p4(){
document.write("<code>function factorielle() {<br>n = prompt('Entrer un nombre');<br>if (Number(n) < 0){<br>document.write('La factorielle n'est pas définie pour les nombres négatifs.');}<br>else{<br>let resultat = 1;<br>let i = 1;<br>while (i <= n) {<br>resultat *= i;<br>i++;<br>}<br>alert(resultat);<br>}}<br></code>")

}   


//Exercice 5 démonstration
function tableMultiplication() {
    let n =Number(prompt("Entrer un nombre"))
    let mut = Number(prompt("Entrer un nombre."))
   for (i  = 1; i <= mut; i++) {
        document.write(n +'  x '+ i+ ' ' + '=' +' ' + n * i+' <br>')
    }
        
    
       
}
// Exercice 5 voir la solution
function p5(){ 
    document.write("<code>function tableMultiplication() {<br>let n =Number(prompt('Entrer un nombre'))<br>let mut = Number(prompt('Entrer un nombre.'))<br>for (i  = 1; i <= mut; i++) {<br>document.write(n +'  x '+ i+ ' ' + '=' +' ' + n * i+' <br>')}<br>}</code>")
}

// Exercice 6
function tva(){
    let ht = Number(prompt('Montant HT'))
    let a = Number(prompt('Pourcenatge du tva'))
    let tva1 = (ht*a)/100
    let ttc = ht + tva1
    document.write(ttc)
}

function p6(){ 
document.write("<code>function tva(){<br>let ht = Number(prompt('Montant HT'))<br>let a = Number(prompt('Pourcenatge du tva'))<br>let tva1 = (ht*a)/100<br>let ttc = ht + tva1<br>document.write(ttc)<br>}</code>")
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
}

// Exercice 7 voir la solution
function p7(){ 
document.write("<code>function pairs(){<br>a = prompt('Entrer un nombre')<br>Pairs = []<br>imPairs = []<br>for(i=1; i<=a; i++){<br>if (i%2===0){<br>Pairs.push(i)<br>}<br>else{<br>imPairs.push(i)<br> }<br>}<br>document.write('Les nombres paires:'+ ' ' +Pairs)<br>document.write('Les nombres impairs : '+ ' '+imPairs)</code>")

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
    
}

function p8(){

document.write("<code>function occur(){<br>let nb = 0;<br>let mot = String(prompt('Entrez un mot :'));<br>let c = prompt('Veuillez choissir une seule lettre : ');<br><br>if (c.length !== 1){<br></br>alert('Veuillez choisir une lettre :')<br>return;<br>else{<br><br>for(let i=0; i < mot.length ; i++){<br>if(mot[i] === c){<br>nb += 1;<br>}<br>}<br>}<br>document.write('La lettre '+' '+c+' '+'  est apparue '+nb+' '+'fois dans le mot'+' '+ mot);}</code>")
}

// Exercice 9
function affiche(){
    document.write('<table border=2px width=30% height=100px>')
   
    c = Number(prompt("Entrer un chiffre en 1 et 4"))
        for (i=1; i<=c;i++){
            mot = prompt('Entrer un mot');
            document.write('<tr><td>'+ ' '+mot+'</td></tr>')
    }
    document.write('</table>');
}


function p9(){
document.write("<code>function affiche(){<br>document.write('<table border=2px width=30% height=100px>')<br>c = Number(prompt('Entrer un chiffre en 1 et 5'))<br>for (i=1; i<=c;i++){<br>mot = prompt('Entrer un mot');<br>document.write(//'<tr><td>+ ' '+mot+</td></tr>')<br>}<br>document.write('</table>')//;<br>}</code>")
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
    
       
}
//Exercice 10 voir la solution
function p10(){

document.write("<code>function jeu(){<br>let a = Math.floor(Math.random() * 50);<br>let u = Number(prompt('Veuiller saissir une valeur'));<br>let i=0;<br>while(a!==u){<br>i++;<br>if(a < u){<br>alert('La valeur proposée est trop grande');<br>}<br>else{<br>alert('La valeur proposée est trop petite');<br>}<br>u = Number(prompt('Essayez encore :'));<br>}<br>alert('Bravo ! La valeur de cherchée est bien,'+' '+ a);<br>}<br></code>")

}
// Exercice 11 démonstration
function maximum(){
    let L = [];
    let a = Number(prompt('Enter un nombre'));
    for(i=0; i<=a; i++){
        L.push(i)
        
    }
    document.write('L//inverse de la liste de L est:'+ ' ',L.reverse())
}

//Exercice 10 voir la solution
function p11(){
document.write("<code>function maximum(){<br>let L = [];<br>let a = Number(prompt('Enter un nombre'));<br>for(i=0; i<=a; i++){<br>L.push(i)<br>}<br>document.write('L//inverse de la liste de L est:'+ ' ',L.reverse())<br>}</code>")
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
   
}

function p12(){
document.write("<code>function jeu1(){<br>nb=0<br>for(i=1;i<=5;i++){let a = Math.floor(Math.random() * 7);<br>if (a===6){<br>nb++;<br>}<br>else{<br>document.write('Ce n'est pas 6, c'est : ' + a + '<br>');<br}<br>} document.write('Nombre total de 6 générés : ' + nb + '<br>');<br>}</code>")
}

//Exercice 13
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
}

function p13(){ 
document.write("<code>function f() {<br><!-- Demander les valeurs à l'utilisateur--><br>let x = Number(prompt('Entrez un nombre pour x :'));<br>let a = Number(prompt('Entrez une puissance a :'));<br>let b = Number(prompt('Entrez un coefficient b :'));<br>let c = Number(prompt('Entrez une constante c :'));<br><br><!--Calculer la valeur de la fonction--><br>let resultat = x ** a - b * x + c;<br><!--Afficher la fonction et son résultat--><br>document.write('La fonction : f(x) = '+' '+x+' '+'**'+' '+a+''+'-'+''+ b+''+'*'+''+x+'' + '+'+' '+ c+''+' ' +'est égale à '+' '+resultat);<br>}</code>")
}

// Exercice 14
function longueur(){
    mot = String(prompt('Veuiller saisir un mot'));
    mot1 = String(prompt('Veuiller saisir un mot'));
    if(mot.length > mot1.length){
        document.write('Le mot'+' '+mot+' '+'comporte'+' '+mot.length+' '+ 'caractère et est donc le plus long');
    }
    else{
        document.write('Le mot'+' '+mot1+' '+'comporte'+' '+mot1.length+' '+ 'caractère et est  donc le plus long');
     
    }
}


function p14(){ 

document.write("<code>function longueur(){<br>mot = String(prompt('Veuiller saisir un mot'));<br>mot1 = String(prompt('Veuiller saisir un mot'));<br>if(mot.length > mot1.length){<br>document.write('Le mot'+' '+mot+' '+'comporte'+' '+mot.length+' '+ 'caractère et est donc le plus long');<br>}<br>else{<br>document.write('Le mot'+' '+mot1+' '+'comporte'+' '+mot1.length+' '+ 'caractère et est  donc le plus long');<br>}<br}</code>")
}

//Exercice 15

function date(){
    a = Number(prompt('Entrer votre année de naissance:'));
    b = Number(prompt('Entrer votre année actuelle:'))
    age = b-a
    document.write('Vous avez'+' '+age+' '+'ans.')
;
}

function p15(){

document.write("<code>function date(){<br>a = Number(prompt('Entrer votre année de naissance:'));<br>b = Number(prompt('Entrer votre année actuelle:'))<br>age = b-a<br>document.write('Vous avez'+' '+age+' '+'ans.');<br>}</code>")

}


