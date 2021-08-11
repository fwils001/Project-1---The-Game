
class Hero {
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
let enterGame = confirm("Would you like to enter the game of life?")

if(enterGame == true) 
    prompt("Which do you choose? Mount Doom or the Jungle of Death?")
    //if (choice === "Mount Doom") {
     //   scaleMountDoom();
    //} else if (choice === "Jungle of Death") {
      //  enterJungleOfDeath();






/*


}
*/
//let form = document.getElementById