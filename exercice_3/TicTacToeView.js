class TicTacToeView {
    constructor(game, name) {
        this.game = game;
        this.name = name;
        this.create_listeneurs();
        this.nom_joueur();
    }

    // crée un listeneur par case du tableau
    create_listeneurs() {
        let tab = document.getElementById("morpion");
        for (let i = 0; i < 3; ++i) {
            for (let j = 0; j < 3; ++j) {
                tab.rows[i].cells[j].addEventListener('click', () => {
                    this.click_event(i, j);
                });
            }
        }
    }

    // lorsque l'on clique sur l'une des cases du tableau
    click_event(x, y) {
        // place le pion
        this.game.play(x, y);

        // affiche les pions
        this.pions();
        // affiche le bouton reset
        this.bouton_reset();

        // si la partie est fini
        if (this.game.hasWinner() || this.game.tour == 9) this.affichage_gagnant();

        // affiche le nom du joueur a qui est le tour
        if (!this.game.isFinished() && this.game.tour != 9) this.nom_joueur();
    }

    // affiche les pions
    pions() {
        let tab = document.getElementById("morpion");
        let img;
        for (let i = 0; i < 3; ++i) {
            for (let j = 0; j < 3; ++j) {
                // supprime les images présents sur une case
                for (let enfants = 0; enfants < tab.rows[i].cells[j].childElementCount; ++enfants){
                    tab.rows[i].cells[j].removeChild(tab.rows[i].cells[j].firstChild);
                }
                // affiche l'image correspondant au joueur
                if (this.game.grid[i][j] != undefined) {
                    img = document.createElement('img');
                    tab.rows[i].cells[j].appendChild(img);
                    img.setAttribute('class', 'personnages');

                    if (this.game.grid[i][j] == 0) {
                        img.setAttribute('src', 'frodon.png');
                    }
                    else if (this.game.grid[i][j] == 1) {
                        img.setAttribute('src', 'sauron.png');
                    }
                }
            }
        }
    }

    // affiche le nom du joueur qui peut jouer
    nom_joueur() {
        if (this.game.currentPlayer == 0) document.getElementById("player_number").textContent = "C'est au joueur Frodon";
        else document.getElementById("player_number").textContent = "C'est au joueur Sauron";
        this.blason();
    }

    // affiche l'image du joueur qui peut jouer
    blason() {
        // supprime l'image existante
        if (document.getElementsByClassName("mini_persos")[0] != undefined) {
            document.getElementsByClassName("mini_persos")[0].remove();
        }

        // affiche l'image
        let currentDiv = document.getElementById("player_number");

        let img = document.createElement("img");
        currentDiv.parentElement.appendChild(img);
        img.setAttribute('class', 'mini_persos');

        // on définit quel est l'image que l'on doit afficher
        if (this.game.currentPlayer == 0) img.setAttribute('src', 'frodon.png');
        else img.setAttribute('src', 'sauron.png');
    }

    // affiche une image qui permet de relancer le jeu
    bouton_reset() {
        // on affiche pas l'image si le jeu n'a pas commencé
        if ((this.game.isFinished() || this.game.tour != 0) && document.getElementsByClassName("reset").length == 0) {
            let currentDiv = document.getElementsByClassName('masthead')[0];

            // permet de centrer le bouton
            let center = document.createElement("center");
            currentDiv.appendChild(center);

            let img = document.createElement("img");
            center.appendChild(img);
            img.setAttribute('src', 'bouton.png');
            img.setAttribute('class', 'reset');

            img.addEventListener('click', () => {
                this.game.reset();
                img.remove();
                this.pions();
                this.nom_joueur();
            })
        }
    }

    // affiche le gagnant ou s'il y a égalité
    affichage_gagnant() {
        if (this.game.isFinished()) {
            // affiche le joueur qui a gagné
            if (!this.game.getWinner()) document.getElementById("player_number").textContent = "Frodon a gagné !";
            else if (this.game.getWinner()) document.getElementById("player_number").textContent = "Sauron a gagné !";
        }
        else {
            // supprime l'image qui indique à qui le tour est
            if (document.getElementsByClassName("mini_persos")[0] != undefined) {
                document.getElementsByClassName("mini_persos")[0].remove();
            }
            document.getElementById("player_number").textContent = "Il y a égalité !";
        }
    }
}