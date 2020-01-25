class TicTacToe extends Observable {
    constructor() {
        super();
        this.grid = new Array(3); // tableau de position en 3*3
        this.init_grid();
        this.reset();
        this.tour = 0; // nombre pair : joueur 0, nombre impair : joueur 1
        this.currentPlayer = 0;
    }

    init_grid() {
        for (let i = 0; i < 3; ++i) {
            this.grid[i] = Array(3);
        }
    }

    play(x, y) {
        this.tour++;
        if (this.getCaseState(x, y) == undefined) {
            this.grid[x][y] = this.currentPlayer;
        }
        this.currentPlayer = this.getCurrentPlayer();

    }

    reset() {
        for (let i = 0; i < 3; ++i) {
            for (let j = 0; j < 3; ++j) {
                this.grid[i][j] = undefined;
            }
        }
        this.tour = 0;
    }

    getCurrentPlayer() {
        return (this.tour % 2);
    }

    getCaseState(x, y) {
        return this.grid[x][y];
    }

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
        return this.egalite();
    }

    hasWinner() {
        if (this.isFinished()) {
            if (this.egalite()) {
                return undefined;
            }
            return true;
        }

        return false;
    }

    getWinner() {
        if (this.hasWinner() == undefined) {
            return undefined;
        }
        return !this.currentPlayer;
    }

    egalite() {
        let fini = true;
        for (let i = 0; i < 3; ++i) {
            for (let j = 0; j < 3; ++j) {
                if (this.grid[i][j] == undefined) {
                    fini = false;
                }
            }
        }
        return fini;
    }

}