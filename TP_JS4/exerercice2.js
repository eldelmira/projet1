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

