window.addEventListener( 'DOMContentLoaded', function () {
	
		const buttonRoolDice = document.querySelector( '.dice-roll' );

    function rollDice () {

        const diceSide1 = document.getElementById( 'dice-side-1' );
        const diceSide2 = document.getElementById( 'dice-side-2' );
        const status = document.getElementById( 'status' );
//6-2,3-5,4-4
      var side1 = 2;
      var side2 = 2;
        const i = Math.floor( Math.random() * 6 ) + 1;
        if(i>4){
          side1 = 2;
          side2 = 6;
        }
        else if(i<2){
          side1 = 3;
          side2 = 5;
        }
        else{
          side1 = 4;
          side2 = 4;
        }
      
      
        const diceTotal = side1 + side2;

        diceSide1.innerHTML = side1;
        diceSide2.innerHTML = side2;

        status.innerHTML = 'You rolled ' + diceTotal + '. The most common dice roll';

        if ( side1 === side2 ) {
            status.innerHTML += ' Doubles! You get a free turn!';
        }
    }

    buttonRoolDice.addEventListener( 'click', rollDice, false );

}, false);