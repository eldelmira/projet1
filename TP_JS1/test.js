function test_age(){
    let age = prompt("Quelle est votre age ?");
    if (age<18)
        {
            document.write("Attention accès refusé, vous êtes Mineur")
            document.body.style.backgroundColor="red";
        } 
        
        else
        {
            document.write("Ok, vous êtes Majeur");
            document.body.style.backgroundColor = "green"
        }



}

function affiche(){

    let prenom = prompt("Saissisez votre prénom");
    let nom = prompt("Saissisez votre nom");
    let age = prompt("Saississez votre age ?");
    document.write("<div style='border:5px solid blue; width:auto; height:300px; margin:auto; font-size:2em; text-align:center; background: linear-gradient(90deg, rgba(131,58,180,1) 50%, rgba(29,253,107,1) 50%;'>")
    document.write("Bonjour  "+ prenom+ "   "+nom+ ".  "+"Vous avez"+ "   "+age+"  "+ "ans");
    document.write("</div>");
}

function test_couleur(){
    let couleur = prompt("Donner une couleur")
    if (couleur == "red"){ 
        document.body.style.backgroundColor = "red"
    }

    else if (couleur == "lightblue"){ 
        document.body.style.backgroundColor = "lightblue"
    } 

    else if (couleur == "lightgreen"){ 
        document.body.style.backgroundColor = "lightgreen"

    } 

    else if (couleur == "lightpink"){ 
        document.body.style.backgroundColor = "lightpink"
    } 

    else if (couleur == "teal"){ 
        document.body.style.backgroundColor = "teal"
    } 
    else
    {
        document.write("Couleur non comprise")
    }
}

function calcul_moyenne(){
    var n1 = prompt("Donner la première note : ");
    var n2 = prompt("Donner la deuxième note : ");
    var n3 = prompt("Donner la troisième note : ");

    
    var somme = Number(n1)+Number(n2)+Number(n3);

    document.write("Voici la somme : "+ somme+ "<br>")
    var moyenne = somme/3;

    document.write("Voici la moyenne :" + moyenne+"<br>")

    if (moyenne < 10){
        document.write("Vous n'êtes pas ADMIS ")
    }

    else if (moyenne <14){
        document.write("Vous êtes ADMIS passable ")
    }

    else
    {
        document.write("Vous êtes ADMIS bien ")
    }
}