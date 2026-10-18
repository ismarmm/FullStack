type Ranking = [number, string, boolean];

let position: number;
let playerName: string;
let finishedGame: boolean;
let ranking: Ranking;
let hallOfRanking: Ranking[] = [];

position = 1;
playerName = "Ismael";
finishedGame = true;
ranking = [position, playerName, finishedGame];
hallOfRanking.push(ranking);

position = 2;
playerName = "adri";
finishedGame = false;
ranking = [position, playerName, finishedGame];
hallOfRanking.push(ranking);

function printRankings(rankings: Ranking[]): void {
    for (let i = 0; i < rankings.length; i++) {
        console.log( "Posicion: " + rankings[i][0] +", jugador: " + rankings[i][1] + ", partida finalizada: " + rankings[i][2]
        );
    }
}

printRankings(hallOfRanking);