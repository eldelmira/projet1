
function couleur(){
    let couleur = prompt("Donner une couleur")
    if (couleur == "red"){ 
        document.querySelector('.calculatrice').style.backgroundColor ="red"       
    }

    else if (couleur == "lightblue"){ 
        document.querySelector('.calculatrice').style.backgroundColor ="lightblue"
    } 

    else if (couleur == "lightgreen"){ 
        document.querySelector('.calculatrice').style.backgroundColor ="lightgreen"

    } 

    else if (couleur == "lightpink"){ 
        document.querySelector('.calculatrice').style.backgroundColor ="lightpink"
    } 

    else if (couleur == "teal"){ 
        document.querySelector('.calculatrice').style.backgroundColor ="teal"
    } 
    else if (couleur == "black"){ 
        document.querySelector('.calculatrice').style.backgroundColor ="black"
    }
    else if (couleur == "yellow"){ 
        document.querySelector('.calculatrice').style.backgroundColor ="yellow"
    } 
    else if (couleur == "violet"){ 
        document.querySelector('.calculatrice').style.backgroundColor ="mediumslateblue"
    }
    else if (couleur == "blue"){ 
        document.querySelector('.calculatrice').style.backgroundColor ="blue"
    }  
    else if (couleur == "green"){ 
        document.querySelector('.calculatrice').style.backgroundColor ="green"
    } 
    else if (couleur == "lightgrey"){ 
        document.querySelector('.calculatrice').style.backgroundColor ="lightgrey"
    }  
    else if (couleur == "orange"){ 
        document.querySelector('.calculatrice').style.backgroundColor ="orange"
    }     
    else
    {
        document.write("Couleur non comprise")
        document.write("<body style='background-color: red; text-align:center; font-size:px;180'>")
    }
}



const touches = [...document.querySelectorAll('.bouton')];
const listeKeycode = touches.map(touche => touche.dataset.key);


const ecran = document.querySelector('.ecran');


document.addEventListener('keydown', (e) =>{
    const valeur = e.keyCode.toString();
    //calcul(valeur);//
    //console.log(values, typeof values)//
})


document.addEventListener('click',(e) => {
    const valeur = e.target.dataset.key;
    calculer(valeur)
})


const calculer = (valeur) =>{
    if (listeKeycode.includes(valeur)){
        switch (valeur) {
            case '8':
                ecran.textContent = "";
                break;
            case '13':
                const calcul = eval(ecran.textContent);
                ecran.textContent = calcul;
            
            break;

              
            default:
                const indexKeycode = listeKeycode.indexOf(valeur);
                const touche = touches[indexKeycode];
                ecran.textContent += touche.innerHTML;
                
        } 
    }
    
}


window.addEventListener('error', (e) =>{
    alert('Une erreur est survenue dans votre calcul: '+ e.message)
})

