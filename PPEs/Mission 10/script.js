// Fonction pour effectuer les calculs
function calcul() {
    // Sélectionne toutes les lignes du tableau dans le corps (<tbody>)
    const rows = document.querySelectorAll("tbody tr");
    // Sélectionne les éléments pour afficher les totaux calculés
    const sousTotalElement = document.getElementById("sous_total");
    const sousTotalMoinsRemisesElement = document.getElementById("sous_total_moins_remises");
    const taxeTotaleElement = document.getElementById("taxe_totale");
    const soldeFinalElement = document.getElementById("solde_final");

    // Sélectionne les champs pour les remises, les taxes et les frais d'expédition
    const remiseInput = document.getElementById("remise");
    const tauxImpositionInput = document.getElementById("taux_imposition");
    const fraisExpeditionInput = document.getElementById("frais_expedition");

    // Initialisation du sous-total à 0
    let sousTotal = 0;

    // Parcourt chaque ligne du tableau pour calculer les totaux
    rows.forEach((row) => {
        // Sélectionne les champs de quantité, prix unitaire et total dans la ligne
        const quantiteInput = row.querySelector("td:nth-child(2) input");
        const prixUnitaireInput = row.querySelector("td:nth-child(3) input");
        const totalInput = row.querySelector("td:nth-child(4) input");

        // Récupère les valeurs de quantité et de prix unitaire, avec une valeur par défaut de 0
        const quantite = parseFloat(quantiteInput.value) || 0;
        const prixUnitaire = parseFloat(prixUnitaireInput.value) || 0;

        // Calcule le total pour la ligne (quantité * prix unitaire)
        const total = quantite * prixUnitaire;
        // Affiche le total dans le champ correspondant
        totalInput.value = total.toFixed(2);

        // Ajoute le total de cette ligne au sous-total général
        sousTotal += total;
    });

    // Met à jour l'affichage du sous-total
    sousTotalElement.textContent = sousTotal.toFixed(2);

    // Calcule les remises (réduction sur le sous-total)
    const remise = parseFloat(remiseInput.value) || 0;
    const sousTotalMoinsRemises = sousTotal - (sousTotal * remise) / 100;
    // Met à jour l'affichage du sous-total après remise
    sousTotalMoinsRemisesElement.textContent = sousTotalMoinsRemises.toFixed(2);

    // Calcule les taxes (imposition sur le sous-total moins remises)
    const tauxImposition = parseFloat(tauxImpositionInput.value) || 0;// 
    const taxeTotale = (sousTotalMoinsRemises * tauxImposition) / 100;
    // Met à jour l'affichage des taxes
    taxeTotaleElement.textContent = taxeTotale.toFixed(2);

    // Ajoute les frais d'expédition et calcule le solde final
    const fraisExpedition = parseFloat(fraisExpeditionInput.value) || 0;
    const soldeFinal = sousTotalMoinsRemises + taxeTotale + fraisExpedition;
    // Met à jour l'affichage du solde final
    soldeFinalElement.textContent = soldeFinal.toFixed(2);
}

// Fonction pour ajouter une nouvelle ligne dans le tableau
function ajouterLigne() {
    // Sélectionne le tableau
    const table = document.getElementById("table");
    // Crée une nouvelle ligne (<tr>)
    const nouvelleLigne = document.createElement("tr");

    // Définit le contenu HTML de la nouvelle ligne avec des champs par défaut
    nouvelleLigne.innerHTML = `
      <td>Nouvelle description</td>
      <td><input type="number" value="0"></td>
      <td><input type="number" value="0"></td>
      <td><input type="number" value="0" readonly></td>
    `;

    // Ajoute la nouvelle ligne au tableau
    table.appendChild(nouvelleLigne);
}

// Fonction pour réinitialiser tous les champs
function reinitialiser() {
    // Sélectionne tous les champs d'entrée (<input>)
    document.querySelectorAll("input").forEach((input) => {
        // Si le champ est un nombre, le remettre à 0
        if (input.type === "number") {
            input.value = 0;
        } else {
            // Si le champ est un texte ou autre, le vider
            input.value = "";
        }
    });

    // Réinitialise également les champs de calcul à zéro
    document.getElementById("sous_total").textContent = "0.00";
    document.getElementById("sous_total_moins_remises").textContent = "0.00";
    document.getElementById("taxe_totale").textContent = "0.00";
    document.getElementById("solde_final").textContent = "0.00";
}
