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

// Fonction pour télécharger les réponses sous forme de fichier texte
function downloadAnswers() {
    const answers = `
Quizz de culture générale - Réponses

1. Quel est le plus grand océan du monde ? Réponse : B) L'océan Pacifique
2. Quelle est la capitale de l’Australie ? Réponse : C) Canberra
3. Quel élément chimique a pour symbole "O" ? Réponse : B) Oxygène
4. Qui a peint "La Joconde" ? Réponse : B) Léonard de Vinci
5. Quelle planète est surnommée la "planète rouge" ? Réponse : A) Mars
6. Quels pays forment le Royaume-Uni ? Réponse : A) Angleterre, B) Écosse, C) Pays de Galles, D) Irlande du Nord
7. Quelle est la plus haute montagne du monde ? Réponse : B) Mont Everest
8. Quel est l’océan le plus vaste ? Réponse : C) Pacifique
9. Quelle est la langue officielle du Brésil ? Réponse : B) Portugais
10. Quel scientifique a proposé la théorie de la relativité ? Réponse : B) Albert Einstein
    `;
    const blob = new Blob([answers], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "reponses_quizz.txt";
    link.click();
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
        
        li{
        color:green;
        }
    </style>
</head>
<body>
    <h1>Réponses du Quizz</h1>
    <ul>
        <li>Question 1 : B) L'océan Pacifique</li>
        <li>Question 2 : C) Canberra</li>
        <li>Question 3 : B) Oxygène</li>
        <li>Question 4 : B) Léonard de Vinci</li>
        <li>Question 5 : A) Mars</li>
        <li>Question 6 : A) Angleterre, B) Écosse, C) Pays de Galles, D) Irlande du Nord</li>
        <li>Question 7 : B) Mont Everest</li>
        <li>Question 8 : C) Pacifique</li>
        <li>Question 9 : B) Portugais</li>
        <li>Question 10 : B) Albert Einstein</li>
    </ul>
</body>
</html>
    `;
    const newWindow = window.open("", "_blank", "width=600,height=700");
    newWindow.document.open();
    newWindow.document.write(answersHTML);
    newWindow.document.close();
}
