class TicTacToe extends Observable {
    constructor() {
        super();
        // mise à 0 des variables utiles
        this.grid = new Array(3); // tableau de position en 3*3
        this.init_grid();
        this.reset();
        this.tour = 0; // nombre pair : joueur 0, nombre impair : joueur 1
        this.currentPlayer = 0;
    }

    // initialise la taille de la liste grid
    init_grid() {
        for (let i = 0; i < 3; ++i) {
            this.grid[i] = Array(3);
        }
    }

    // permet de placer un pion
    play(x, y) {
        if (this.getCaseState(x, y) == undefined && !this.isFinished() && this.tour != 9) {
            this.tour++;
            this.grid[x][y] = this.currentPlayer;
            this.currentPlayer = this.getCurrentPlayer();
        }
    }

    // remet à 0 le tableau grid et les variables utiles
    reset() {
        for (let i = 0; i < 3; ++i) {
            for (let j = 0; j < 3; ++j) {
                this.grid[i][j] = undefined;
            }
        }
        this.tour = 0;
        this.currentPlayer = 0;
    }

    // renvoi le joueur
    getCurrentPlayer() {
        return (this.tour % 2);
    }

    // renvoi l'etat d'une case
    getCaseState(x, y) {
        return this.grid[x][y];
    }

    // renvoi si un joueur à gagner ou non
    isFinished() {
        for (let i = 0; i < 3; ++i) {
            // test colonnes
            if (this.grid[i][0] == this.grid[i][1] && this.grid[i][1] == this.grid[i][2] && this.grid[i][0] != undefined) {
                return true;
            }

            // test lignes
            if (this.grid[0][i] == this.grid[1][i] && this.grid[1][i] == this.grid[2][i] && this.grid[0][i] != undefined) {
                return true;
            }
        }

        // test diagonales
        if (this.grid[0][0] == this.grid[1][1] && this.grid[1][1] == this.grid[2][2] && this.grid[0][0] != undefined) {
            return true;
        }
        if (this.grid[0][2] == this.grid[1][1] && this.grid[1][1] == this.grid[2][0] && this.grid[0][2] != undefined) {
            return true;
        }

        // test si égalite à la fin du jeu
        return false;
    }

    // renvoi si l'on a un gagnant ou non
    hasWinner() {
        return this.isFinished();
    }

    // donne le gagnant
    getWinner() {
        return !this.currentPlayer;
    }
}