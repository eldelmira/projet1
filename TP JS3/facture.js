
/*
function Résultat(){
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t4").value;
    var c = Number(a)*Number(b)

    t7.value = c;


    var d = document.getElementById("t2").value;
    var e = document.getElementById("t5").value;
    var f = Number(d)*Number(e)

    t8.value = f;

    var g = document.getElementById("t3").value;
    var h = document.getElementById("t6").value;
    var i = Number(g)*Number(h)

    t9.value = i;

    var a = document.getElementById("t7").value;
    var b = document.getElementById("t8").value;
    var c = document.getElementById("t9").value;
    var d = Number(a)+Number(b)+Number(c)

    t10.value = d;

}

function Reinitialiser(){
    var a = document.getElementById("t1").value
    var a = document.getElementById("t1").value
}
    
*/

function calculerResultat() {
    // Ligne 1
    var a = Number(document.getElementById("t1").value);
    var b = Number(document.getElementById("t4").value);
    var c = a * b;
    document.getElementById("t7").value = c;

    // Ligne 2
    var d = Number(document.getElementById("t2").value);
    var e = Number(document.getElementById("t5").value);
    var f = d * e;
    document.getElementById("t8").value = f;

    // Ligne 3
    var g = Number(document.getElementById("t3").value);
    var h = Number(document.getElementById("t6").value);
    var i = g * h;
    document.getElementById("t9").value = i;

    // Somme totale
    var total = c + f + i;
    document.getElementById("t10").value = total;
}

function reinitialiser() {
    // Réinitialiser tous les champs à vide
    var ids = ["t1", "t2", "t3", "t4", "t5", "t6", "t7", "t8", "t9", "t10", "E1", "E2","E3"];
    ids.forEach(function(id) {
        document.getElementById(id).value = '';
    });
}
