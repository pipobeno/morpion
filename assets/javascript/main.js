let boxes = document.querySelectorAll(".box");

let currentPlayer = "X";

let wordsContainer = document.getElementById("wordsContainer");

let conteneur = document.getElementById("conteneur");

let twoPlayersButton = document.getElementById("twoPlayersButton");

let AiPlayersButton = document.getElementById("AiPlayersButton");

let contreAi = false;

function ChoicePlayer() {
    twoPlayersButton.classList.remove("hidden");
    twoPlayersButton.addEventListener("click", () => {
        conteneur.classList.remove("hidden");
        twoPlayersButton.classList.add("hidden");
        AiPlayersButton.classList.add("hidden");
        contreAi = false;
    });
}

ChoicePlayer();

function ChoiceAi() {
    AiPlayersButton.classList.remove("hidden");
    AiPlayersButton.addEventListener("click", () => {
        conteneur.classList.remove("hidden");
        AiPlayersButton.classList.add("hidden");
        twoPlayersButton.classList.add("hidden");
        contreAi = true;
    });
}

ChoiceAi();

function initgame() {
    boxes.forEach((box, i) => {
        box.addEventListener("click", () => {
            // Ne rien faire si la case est déjà remplie ou si le jeu est terminé
            if (box.innerHTML !== "" || endGame() || matchnul()) {
                return;
            }

            box.textContent = currentPlayer;

            // Vérifier si un joueur a gagné ou si la partie est nulle
            if (endGame()) {
                wordsContainer.innerHTML = currentPlayer + " a gagné";  // Afficher le gagnant
            } else if (matchnul()) {
                wordsContainer.innerHTML = "Match nul";  // Si c'est un match nul
            }

            // Changer de joueur pour le tour suivant
            currentPlayer = (currentPlayer === "X") ? "O" : "X";  // Alterner entre "X" et "O"

            // Si on joue contre l'IA et que le jeu n'est pas terminé, faire jouer l'IA
            if (contreAi && !endGame() && !matchnul()) {
                aiMove();
            }
        });
    });
}

initgame();

function aiMove() {
    if (endGame() || matchnul()) {
        return;  // L'IA ne joue pas si le jeu est terminé
    }

    // Trouver les cases vides
    let emptyBoxes = [];
    boxes.forEach((box, i) => {
        if (box.textContent === "") {
            emptyBoxes.push(i);
        }
    });

    // Choisir une case vide au hasard et la remplir avec "O" (symbole de l'IA)
    if (emptyBoxes.length > 0) {
        let randomIndex = getRandomInt(emptyBoxes.length);
        boxes[emptyBoxes[randomIndex]].textContent = "O";

        if (endGame()) {
            wordsContainer.innerHTML = "L'IA a gagné";
        }

        else if (matchnul()) {
            wordsContainer.innerHTML = "Match nul";
        }

        currentPlayer = "X";
    }
}

function endGame() {
    let c1 = boxes[0].textContent
    let c2 = boxes[1].textContent
    let c3 = boxes[2].textContent
    let c4 = boxes[3].textContent
    let c5 = boxes[4].textContent
    let c6 = boxes[5].textContent
    let c7 = boxes[6].textContent
    let c8 = boxes[7].textContent
    let c9 = boxes[8].textContent

    if (c1 == c2 && c2 == c3 && c1 != "") {
        return c1
    }
    if (c4 == c5 && c5 == c6 && c4 != "") {
        return c4
    }
    if (c7 == c8 && c8 == c9 && c7 != "") {
        return c7
    }
    if (c2 == c5 && c5 == c8 && c2 != "") {
        return c2
    } if (c3 == c6 && c6 == c9 && c3 != "") {
        return c3
    }
    if (c1 == c4 && c4 == c7 && c1 != "") {
        return c1
    }
    if ((c1 == c5 && c5 == c9 && c1 != "")) {
        return c1
    } if (c3 == c5 && c5 == c7 && c3 != "") {
        return c3
    }
    else {
        return ""
    }
}

function matchnul() {
    let c1 = boxes[0].textContent
    let c2 = boxes[1].textContent
    let c3 = boxes[2].textContent
    let c4 = boxes[3].textContent
    let c5 = boxes[4].textContent
    let c6 = boxes[5].textContent
    let c7 = boxes[6].textContent
    let c8 = boxes[7].textContent
    let c9 = boxes[8].textContent

    if (c1 !== "" && c2 !== "" && c3 !== "" && c4 !== "" && c5 !== "" && c6 !== "" && c7 !== "" && c8 !== "" && c9 !== "") {
        return true
    }
    return false;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
