class Hero {
    constructor(name) {
         this.name = name;
         this.dead = false
         this.pageLocation = 0
     }
}
const game = {
    newHero: null,

    start: function(name) {
        const inputname=document.getElementById('yourname')
        const nameDisplay=inputname.value
        this.newHero=new Hero(name);
    },

    pageOne: function() {
        //remove what's on the page (function remove everything but the background image. Select them and remove them.)
        const words = document.getElementById("words")
        words.style.display="none"
    }
}
const endGame = ()=>{
    alert("GAME OVER!")
}

const turnPage = ()=>{
     const page = document.querySelector("#page-0")
     page.style.display = "block"
     const img = document.querySelector("#page-1")
     img.style.display = "none"

}
    
//EVENT LISTENERS
let form = document.getElementById('nameform')
    form.addEventListener('click', (event) =>{
let submitName = document.getElementById('yourname').value;
console.log(document.querySelector('#name'))
document.querySelector('#name').innerHTML = `${submitName}`
    document.querySelector('#name').style.display = "none"
//Add the value from submit name to the game object
game.name=document.getElementById("yourname").value
    game.start(submitName)
    form.style.display = "none"
    })



   /* let enterWorld = confirm("Do you want to begin your journey?")
    console.log(enterWorld)
if(enterWorld == true) {
   let firstChoice = prompt("You come across a fork in the road. Which way do you go? Mt. Doom/Jungle of Death?")

   if (firstChoice == "Mt. Doom") {
       alert("Now entering Mt. Doom")
       turnPage();
       
       let doomChoice = prompt("Do you want to climb the mountain alone or use a tour guide? alone/guide")
       
       if (doomChoice == "alone") {
           alert("You get stuck just as it is getting dark. You freeze to death. Remember: always ask for help when you need it.")
            endGame();

       }else if(doomChoice == "guide") {
            alert ("Your tour guide is eaten by a bear! Luckily, you are able to find your way back to the lodge.")
       }
   }
   else if(firstChoice == "Jungle of Death") {
       alert("Now entering the Jungle of Death");
   }
    
}

else {
    alert("You decided to end life before it even began. Good bye.")
}
*/