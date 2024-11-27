function affiche1(){
    document.write('<table border=2px width=30% height=50px>');
   
    
        for (i=1; i<=5;i++){
            
            document.write('<tr><td>*</td><td>*</td><td>*</td></tr>');
    }
    document.write('</table>');
}

function affiche2(){
    document.write('<table border=2px width=30% height=50px>')
   
    c = Number(prompt("Entrer un chiffre "));
        for (i=1; i<=c;i++){
    
            document.write('<tr><td>'+i+'</td>'+ '<td>*</td><td>*</td></tr>');
    }
    document.write('</table>');
}

function seconnecter(){
    var login = prompt("Donner votre nom d'utilisateur");
    var password = prompt("Donner votre mot de passe");
    if (login=="admin" && password=="admin"){
        document.write("Bienvenue:" + " "+login)
    }
    else{
        alert("Access refusé!!!")
       
    }
}

function connection2(){
    window.location.href="identification.html"
}


function cdc(){
    var chaine = String(prompt("Donner un mot"));
    document.write(chaine.toUpperCase()+"<br>");
    document.write(chaine.toLowerCase()+"<br>");
    document.write("La chaîne contient"+" "+ chaine.length+" "+ " caractères" +"<br>");
    document.write("La chaîne contient"+ " "+ chaine.substr(0,1) +"<br>");
}
/*
function ajouterLigne(){
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    if (a==""|| b==""){
        alert("Un ou 2 champs vide);")
    }
    else if((Number(b) < 10 || Number(b) > 20)){
        alert("Age invalide")
    }
    else{
        var table = document.getElementById("mytable");
        var newRow = table.insertRow(-1);
        var cell1= newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        cell1.innerHTML = document.getElementById('t1').value;
        cell2.innerHTML = document.getElementById('t2').value;


    }
}
    */

function ajouterLigne() {
    var a = document.getElementById("t1").value.trim(); // Supprime les espaces en début/fin
    var b = document.getElementById("t2").value.trim();

    if (a === "" || b === "") {
        alert("Un ou deux champs sont vides !");
    } else if (Number(b) < 10 || Number(b) > 20) {
        alert("Âge invalide !");
    } else {
        var table = document.getElementById("mytable");
        var newRow = table.insertRow(-1);
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);

        // Ajout du contenu en majuscule et en gras
        cell1.innerHTML = `<strong>${a.toUpperCase()}</strong>`;
        cell2.innerHTML = `<strong>${b.toUpperCase()}</strong>`;
    }
}


function ligne(){
     window.location.href="ajout.html"
}


function seconnecter3(){
    i=0;
    do{
    var login = prompt("Donner votre nom d'utilisateur");
    var password = prompt("Donner votre mot de passe");
    if (login=="admin" && password=="admin"){
        document.write("Bienvenue:" + " "+login);
        break;
    }
    else{
        alert("Accès refusé");


    i+=1;}
    }
    while(i<3)
        if(i==3){
            alert("Délai dépassé")
        }
        
     
    }



    function login(){
        var login = document.getElementById("t1").value;
        var password = document.getElementById("t2").value;
        if (login=="admin" && password=="admin"){
            
            window.location.href="yes.html"
        }
        else{

            window.location.href="no.html"
           
        }
    }


   
    function facture() {
        let prixTotalProduits = 0; // Initialiser le total des produits à 0
        let continuer = "true"; // Définir une variable pour contrôler la boucle
    
        do {
            // Saisir les détails du produit
            let nom = prompt("Veuillez écrire le nom du produit");
            let prix = Number(prompt("Veuillez écrire le prix du produit"));
            let quantité = Number(prompt("Veuillez écrire la quantité du produit"));
    
            // Calculer le coût total pour ce produit
            let coûtProduit = prix * quantité;
    
            // Ajouter au total des produits
            prixTotalProduits += coûtProduit;
    
            // Afficher les informations du produit
            document.write("Nom: " + nom + "<br>");
            document.write("Prix unitaire: " + prix + " €<br>");
            document.write("Quantité: " + quantité + "<br>");
            document.write("Total pour ce produit: " + coûtProduit + " €<br><br>");
    
            // Demander si l'utilisateur veut continuer
            continuer = prompt("Voulez-vous continuer ? (true/false)");
        } while (continuer === "true");
    
        // Afficher le total final des produits
        document.write("<strong>Prix total des produits: " + prixTotalProduits + " €</strong><br>");

    }

    function annuler(){
        window.location.href="index.html"
    }
    
    