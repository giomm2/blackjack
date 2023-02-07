/**
 * This function fill a new random deck
 * @param {array<string>} cardsTypes 
 * @param {array<string>} specialTypes 
 * @returns {array<string>} return a new deck
 */
export const newDeck = (cardsTypes, specialTypes) => {
    let deck = [];
    if( !cardsTypes || cardsTypes.length === 0 ) 
        throw new Error('CardsType cant be null');
        if( !specialTypes || specialTypes.length === 0 ) 
        throw new Error('SpecialTypes cant be null');
    for( let i = 2; i <= 10; i++ ){
        for( let type of cardsTypes ){
            deck.push( i + type );
        }
    }
    for( let type of cardsTypes){
        for( let special of specialTypes){
            deck.push(special + type)
        }
    }
    return deck;
}
