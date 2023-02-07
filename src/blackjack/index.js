import { newDeck, pickCard, printCard, points, computerTurn } from './usecases/index';

(() => {
  'use strict'

  let deck = [];
  const   cardsTypes = ['C','D','H','S'],
          specialTypes = ['A','J','Q','K'];
  
  let pointsPlayers = [];
  
  //HTML references 
  const   btnCard = document.querySelector('#btnCard'),
          btnFinish = document.querySelector('#btnFinish'),
          btnNewGame = document.querySelector('#btnNewGame');

  const   divCardsPlayers = document.querySelectorAll('.divCards'),
          htmlPoints = document.querySelectorAll('small');
  
  const initGame = (numPlayers = 2) => {
      deck = newDeck(cardsTypes, specialTypes);
      pointsPlayers = [];
      for (let i = 0; i < numPlayers ; i++){
          pointsPlayers.push(0); 
          htmlPoints[i].innerText = 0;
          divCardsPlayers[i].innerHTML = '';
      }

      btnCard.disabled = false;
      btnFinish.disabled = false;

  }
  

  //Events
  btnCard.addEventListener('click', () => {
      const card = pickCard(deck);
      const pointsPlayer = points(card,0, pointsPlayers, htmlPoints);
      
      printCard(card,0, divCardsPlayers);
  
      if(pointsPlayer > 21){
          btnCard.disabled = true;
          btnFinish.disabled = true;
          computerTurn(pointsPlayers[0], deck, pointsPlayers, htmlPoints, divCardsPlayers);
          
      }else if(pointsPlayer === 21){
          btnCard.disabled = true;
          btnFinish.disabled = true;
          computerTurn(pointsPlayers[0], deck, pointsPlayers, htmlPoints, divCardsPlayers);
      }
  });
  
  btnFinish.addEventListener('click', () => {
      btnCard.disabled = true;
      btnFinish.disabled = true;
      
      computerTurn(pointsPlayers[0], deck, pointsPlayers, htmlPoints, divCardsPlayers);
  });
  
  btnNewGame.addEventListener('click', () => {
      initGame();      
  });
  
  return ''
})();

