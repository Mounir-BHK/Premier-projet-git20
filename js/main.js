// -------------------------------------------
// Fichier : js/main.js
// Rôle    : Gérer l'exercice interactif sur les commandes Git
// -------------------------------------------

/**
 * On associe un "code" simple (init, status, add, commit, log)
 * à un texte d'explication. L'intérêt pédagogique :
 * - montrer un objet JavaScript simple
 * - séparer les données (les textes) de la logique.
 */
const commandDescriptions = {
    init: "Initialise un nouveau dépôt Git dans le dossier courant. À faire une seule fois au début du projet.",
    status: "Affiche l'état des fichiers : modifiés, non suivis, prêts pour le commit, etc.",
    add: "Ajoute un ou plusieurs fichiers à la \"zone de préparation\" (staging area) pour le prochain commit.",
    commit: "Crée une nouvelle version (snapshot) du projet avec un message décrivant les changements.",
    log: "Affiche l'historique des commits (auteurs, dates, messages)."
};

/**
 * Étapes de fonctionnement :
 * 1. On sélectionne tous les boutons .show-role.
 * 2. Pour chaque bouton, on ajoute un écouteur de clic.
 * 3. Quand on clique :
 *    - on récupère la clé (data-command)
 *    - on insère le texte dans le <p> correspondant
 *    - on affiche / masque le paragraphe
 *    - on met à jour le libellé du bouton
 */
function setupGitCommandExercise() {
    const buttons = document.querySelectorAll("button.show-role");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const key = button.dataset.command; // ex: "init"
            const roleElement = document.querySelector(
                `.git-role[data-command="${key}"]`
            );

            if (!roleElement) {
                console.warn("Aucun élément .git-role pour la commande :", key);
                return;
            }

            const currentlyHidden = roleElement.hasAttribute("hidden");

            if (currentlyHidden) {
                // On veut afficher le rôle
                roleElement.textContent = commandDescriptions[key] ?? "Description manquante.";
                roleElement.removeAttribute("hidden");
                button.textContent = "Masquer le rôle";
            } else {
                // On veut masquer le rôle
                roleElement.setAttribute("hidden", "");
                button.textContent = "Afficher le rôle";
            }
        });
    });
}

// On lance l'initialisation quand le DOM est chargé
document.addEventListener("DOMContentLoaded", () => {
    setupGitCommandExercise();
});
