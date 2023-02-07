import { pickCard, printCard } from "./card";
import { cardValue } from "./card";

/**
 * turn 0 = first player and last computer
 * @param { number } card 
 * @param { number } turn 
 * @param { number } pointsPlayers 
 * @param { HtmlElement } htmlPoints 
 * @returns 
 */
export const points = (card, turn, pointsPlayers, htmlPoints) =>{
    pointsPlayers[turn] = pointsPlayers[turn]  + cardValue(card);
    htmlPoints[turn].innerText = pointsPlayers[turn];
    return pointsPlayers[turn];
}

/**
 * Computer turn
 * @param {number} minPoints 
 * @param {array<string>} deck 
 */
export const computerTurn = (minPoints, deck, pointsPlayers, htmlPoints, divCardsPlayers) =>{

    if(!minPoints) throw new Error('Minpoints cant be null');
    if(!deck) throw new Error('Deck cant be null');
    
    let pointsComputer = 0;
    do{
        const card = pickCard(deck);
        pointsComputer = points(card, pointsPlayers.length - 1, pointsPlayers, htmlPoints);
        printCard(card, pointsPlayers.length - 1, divCardsPlayers );

    } while((pointsComputer < minPoints) && (minPoints <= 21));
   winner(pointsPlayers);
}


/**
 * Game winner
 * @param {number} pointsPlayers 
 */
const winner = (pointsPlayers) => {
    const [minPoints,pointsComputer] = pointsPlayers;
    setTimeout(() => {     
        const winner = (pointsComputer > 21 ) ?
            'player won' : 
            ((pointsComputer < minPoints) && minPoints <= 21) ?
            'Player won' :
            ((pointsComputer > minPoints) || minPoints > 21) ?
            'Computer won' :
            'Tie';  
            alert(winner);
    }, 40);
}
