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

// Fonction pour corriger le quiz
function testqcm() {
    let score = 0;
    const totalQuestions = Object.keys(correctAnswers).length;
    const resultDetails = [];

    // Parcours de toutes les questions
    for (let i = 1; i <= totalQuestions; i++) {
        const correctAnswer = correctAnswers[i];
        const selectedAnswers = [];

        // Récupérer les cases cochées pour la question actuelle
        document.querySelectorAll(`.ex${i}, .ex${i}b, .ex${i}c, .ex${i}d`).forEach((checkbox, index) => {
            if (checkbox.checked) {
                selectedAnswers.push(String.fromCharCode(65 + index)); // Convertit 0 -> A, 1 -> B, etc.
            }
        });

        // Vérifier les réponses
        if (Array.isArray(correctAnswer)) {
            // Si la question a plusieurs réponses correctes
            if (
                selectedAnswers.length === correctAnswer.length &&
                selectedAnswers.every((ans) => correctAnswer.includes(ans))
            ) {
                score++;
            } else {
                resultDetails.push(`Question ${i} : Mauvaise réponse. Les bonnes réponses sont ${correctAnswer.join(", ")}`);
            }
        } else {
            // Si la question a une seule bonne réponse
            if (selectedAnswers.includes(correctAnswer)) {
                score++;
            } else {
                resultDetails.push(`Question ${i} : Mauvaise réponse. La bonne réponse est ${correctAnswer}`);
            }
        }
    }

    // Affichage des résultats
    alert(`Votre score est de ${score} sur ${totalQuestions}`);
    if (resultDetails.length > 0) {
        alert(`Corrections :\n${resultDetails.join("\n")}`);
    }
}

// Fonction pour réinitialiser le quiz
function resetQuiz() {
    document.querySelectorAll("input[type='checkbox']").forEach((checkbox) => {
        checkbox.checked = false;
    });
    alert("Le quiz a été réinitialisé. Vous pouvez recommencer !");
}


// Fonction pour afficher les réponses dans une nouvelle fenêtre
function openAnswersWindow() {
    const answersHTML = `
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Réponses du Quizz</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            line-height: 1.6;
        }
        h1 {
            color: #333;
        }
        
        .bonne{
        color:green;
        }
        .mauvaise{
        color: red;
        }
    </style>
</head>
<body>
    <h1>Réponses du Quizz</h1>
    <ul>
        <li class="mauvaise">Question 1 : A) L'océan Atlantique</li>
        <li class="bonne">Question 1 : B) L'océan Pacifique</li>
        <li class="mauvaise">Question 1 : C) L'océan Indien</li>
        <li class="mauvaise">Question 1 : D) L'océan  Arctique</li>
        <br>
        <br>

        <li class="mauvaise">Question 2 : A) Sydney</li>
        <li class="mauvaise">Question 2 : B) Melbourne</li>
        <li class="bonne">Question 2 : C) Canberra</li>
        <li class="mauvaise">Question 2 : D) Brisbane</li>
        <br>
        <br>

        <li class="mauvaise">Question 3 :A) Or</li>
        <li class="bonne">Question 3 : B) Oxygène</li>
        <li class="mauvaise">Question 3 : C) Osmium</li>
        <li class="mauvaise">Question 3 : D) Oganesson</li>
        <br>
        <br>




        <li class="mauvaise">Question 4 :A) Vincent van Gogh</li>
        <li class="bonne">Question 4 : B) Léonard de Vinci</li>
        <li class="mauvaise">Question 4 : C) Pablo Picasso</li>
        <li class="mauvaise">Question 4 : D)  Claude Monet</li>
        <br><br>



        <li class="bonne">Question 5 : A) Mars</li>
        <li class="mauvaise">Question 5 : B)  Jupiter</li>
        <li class="mauvaise">Question 5 : C) Saturne</li>
        <li class="mauvaise">Question 5 : D)  Vénus</li>
        <br><br>

        <li class="bonne">Question 6 : A) Angleterre, B) Écosse, C) Pays de Galles, D) Irlande du Nord</li>
        <br><br>
        <li class="mauvaise">Question 7 : A)  Mont Kilimandjaro</li>
        <li class="bonne">Question 7 : B) Mont Everest</li>
        <li class="mauvaise">Question 7 : C) Mont Blanc</li>
        <li class="mauvaise">Question 7 : D) Mont McKinley</li>
        <br><br>
        <li class="mauvaise">Question 8 : A) Atlantique</li>
        <li class="mauvaise">Question 8 : B) Indien</li>
        <li class="bonne">Question 8 : C) Pacifique</li>
        <li class="mauvaise">Question 8 : D) Arctique</li>
        <br><br>
        <li class="mauvaise">Question 9 : A) Espagnol</li>
        <li class="bonne">Question 9 : B) Portugais</li>
        <li class="mauvaise">Question 9 : C) Italien</li>
        <li class="mauvaise">Question 9 : D)  Français</li>
        <br><br>
        <li class="mauvaise">Question 10 : A) Isaac Newton</li>
        <li class="bonne">Question 10 : B) Albert Einstein</li>
        <li class="mauvaise">Question 10 : C) Galileo Galilée</li>
        <li class="mauvaise">Question 10 : D) Nikola Tesla</li>
        <br><br>
    </ul>
</body>
</html>
    `;
    const newWindow = window.open("", "_blank", "width=600,height=700");
    newWindow.document.open();
    newWindow.document.write(answersHTML);
    newWindow.document.close();
}
