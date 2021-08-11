
function playGame() {
    let enterWorld = confirm("Do you want to begin your journey?")

if(enterWorld == true) {
   let firstChoice = prompt("You come across a fork in the road. Which way do you go? Mt. Doom/Jungle of Death?")

   if (firstChoice == "Mt. Doom") {
       alert("Now entering Mt. Doom")
       
       let doomChoice = prompt("Do you want to climb the mountain alone or use a tour guide? alone/guide")
       
       if (doomChoice == "alone") {
           alert("You get stuck just as it is getting dark. You freeze to death. GAME OVER!")


       }else if(doomChoice == "guide") {
            alert ("Your tour guide is eaten by a bear! Luckily, you are able to find your way back to the lodge.")
        }
       }
   }
   else if(firstChoice == "Jungle of Death") {
       alert("Now entering the Jungle of Death");

    
   }
}

else {
    alert("You decided to end life before it even began. Good bye.")
}
}
playGame();
/*class Hero {
    constructor(name) {
         this.name = name;
         
     }
 }

 const game = {
    newHero: null,

    start(name) {
        const inputname=document.getElementById('yourname')
        const nameDisplay=inputname.value
        this.newHero=new Hero(name);
    }
 }
 
//let enterGame = confirm("Would you like to enter the game of life?")

//if(enterGame == true) 
//We are faced with our first choice.
  // prompt("Which do you choose? Mount Doom or the Jungle of Death?")
    if (choice === "Mount Doom") {
        scaleMountDoom();
    } else if (choice === "Jungle of Death") {
       enterJungleOfDeath();


//let form = document.getElementById

    }
    */