
    function showNextDiv(nextDivId) {
        // Cache le div actuellement visible
        const currentDiv = document.querySelector('div:not([style*="display: none"])');
        if (currentDiv) {
            currentDiv.style.display = "none";
        }
        // Affiche le div suivant
        const nextDiv = document.getElementById("question" + nextDivId);
        if (nextDiv) {
            nextDiv.style.display = "block";
        }
    }

// Liste des bonnes réponses pour chaque question
const correctAnswers = {
    1: "B", // L'océan Pacifique
    2: "C", // Canberra
    3: "B", // Oxygène
    4: "B", // Léonard de Vinci
    5: "A", // Mars
    6: ["A", "B", "C", "D"], // Tous les pays du Royaume-Uni
    7: "B", // Mont Everest
    8: "C", // Pacifique
    9: "B", // Portugais
    10: "B" // Albert Einstein
};

// Fonction pour calculer le score
function calculateScore() {
    let score = 0; // Initialisation du score
    const totalQuestions = Object.keys(correctAnswers).length; // Nombre total de questions
    const resultDetails = []; // Liste pour afficher les bonnes réponses
    
    // Parcours des questions
    for (let i = 1; i <= totalQuestions; i++) {
        const correctAnswer = correctAnswers[i];
        const selectedAnswers = [];

        // Récupère les réponses sélectionnées pour la question i
        document.querySelectorAll(`.ex${i}, .ex${i}b, .ex${i}c, .ex${i}d`).forEach((checkbox, index) => {
            if (checkbox.checked) {
                selectedAnswers.push(String.fromCharCode(65 + index)); // Convertit 0 => A, 1 => B, etc.
            }
        });

        // Vérifie si la réponse est correcte
        if (Array.isArray(correctAnswer)) {
            // Cas d'une question avec plusieurs réponses correctes
            if (
                selectedAnswers.length === correctAnswer.length &&
                selectedAnswers.every((ans) => correctAnswer.includes(ans))
            ) {
                score++; // Incrémente le score si toutes les réponses sont correctes
            } else {
                resultDetails.push(`Question ${i}: La bonne réponse est ${correctAnswer.join(", ")}`);
            }
        } else {
            // Cas d'une question avec une seule réponse correcte
            if (selectedAnswers.includes(correctAnswer)) {
                score++; // Incrémente le score si la réponse est correcte
            } else {
                resultDetails.push(`Question ${i}: La bonne réponse est ${correctAnswer}`);
            }
        }
    }

    // Affiche le score et les bonnes réponses
    alert(`Votre score est de ${score} sur ${totalQuestions}`);
    if (resultDetails.length > 0) {
        alert(`Corrections:\n${resultDetails.join("\n")}`);
    }
}
function resetQuiz() {
    // Sélectionne toutes les cases à cocher
    const checkboxes = document.querySelectorAll("input[type='checkbox']");

    // Parcours des cases à cocher et les décocher
    checkboxes.forEach((checkbox) => {
        checkbox.checked = false;
    });

    // Message d'information à l'utilisateur (optionnel)
    alert("Le quiz a été réinitialisé. Vous pouvez recommencer !");
}


function downloadAnswers() {
    // Les réponses aux questions
    const answers = `
Quizz de culture générale - Réponses

1. Quel est le plus grand océan du monde ?
   Réponse : B) L'océan Pacifique

2. Quelle est la capitale de l’Australie ?
   Réponse : C) Canberra

3. Quel élément chimique a pour symbole "O" ?
   Réponse : B) Oxygène

4. Qui a peint "La Joconde" ?
   Réponse : B) Léonard de Vinci

5. Quelle planète est surnommée la "planète rouge" ?
   Réponse : A) Mars

6. Quels pays forment le Royaume-Uni ?
   Réponse : A) Angleterre, B) Écosse, C) Pays de Galles, D) Irlande du Nord

7. Quelle est la plus haute montagne du monde ?
   Réponse : B) Mont Everest

8. Quel est l’océan le plus vaste ?
   Réponse : C) Pacifique

9. Quelle est la langue officielle du Brésil ?
   Réponse : B) Portugais

10. Quel scientifique a proposé la théorie de la relativité ?
   Réponse : B) Albert Einstein
    `;

    // Créer un blob avec les réponses
    const blob = new Blob([answers], { type: "text/plain" });

    // Créer un lien pour télécharger le fichier
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "reponses_quizz.txt";

    // Simuler un clic sur le lien pour télécharger le fichier
    link.click();
}
