type Ranking = [number, string, boolean];

let position: number;
let playerName: string;
let finishedGame: boolean;
let ranking: Ranking;
let hallOfRanking: Ranking[] = [];

// Primer jugador
position = 1;
playerName = "Ismael";
finishedGame = true;
ranking = [position, playerName, finishedGame];
hallOfRanking.push(ranking);

// Segundo jugador
position = 2;
playerName = "Adrián";
finishedGame = false;
ranking = [position, playerName, finishedGame];
hallOfRanking.push(ranking);

function printRankings(rankings: Ranking[]): void {
    for (let i = 0; i < rankings.length; i++) {
        console.log( "Posición: " + rankings[i][0] +", jugador: " + rankings[i][1] + ", partida finalizada: " + rankings[i][2]
        );
    }
}

printRankings(hallOfRanking);