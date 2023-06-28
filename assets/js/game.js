$(document).ready(function () {
 const demarrer = document.getElementById('demarrer');
 const nextButton = document.getElementById("question-suivante");

 demarrer.addEventListener('click', (e) => {
  e.preventDefault;
  showQuestions();
  $ajax({
    url: "https://batman-api.sayna.space/questions",
    dataType: "json",
    success: function (quizz) {
     for (let i = 0; i < quizz.length; i++) {
      console.log(quizz[i].respons);

     }
    },
    error : function() {
      console.log ('Prebleme au niveau de serveur ')
    }

  });

 })
});

nextButton.addEventListener("click", (e) => {
  e.preventDefault();
  validerQuestion();
  afficherQuestionSuivante();
});

function validerQuestion() {
  // Logique de validation de la question actuelle
  // Vérifier si la réponse de l'utilisateur est correcte, etc.
  // Vous pouvez accéder aux éléments de la question actuelle en utilisant leur ID ou en les stockant dans des variables.

  // Exemple : Vérifier si la réponse de l'utilisateur est correcte
  const reponseUtilisateur = document.getElementById(
    "reponse-utilisateur"
  ).value;
  const reponseCorrecte = document.getElementById("reponse-correcte").value;

  if (reponseUtilisateur === reponseCorrecte) {
    console.log("Bonne réponse!");
  } else {
    console.log("Mauvaise réponse!");
  }
}

function afficherQuestionSuivante() {
  // Logique pour afficher la question suivante
  // Vous pouvez cacher la question actuelle et afficher la question suivante

  const questionActuelle = document.getElementById("question-actuelle");
  const questionSuivante = document.getElementById("question-suivante");

  questionActuelle.style.display = "none";
  questionSuivante.style.display = "block";
}


function showQuestions() {
  const question = document.getElementById('questions');
  question.style.display = 'block';
  const demarrer = document.getElementById('entete');
  demarrer.style.display = 'none';
  $show('question-suivante').show();
}

