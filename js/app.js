class Hero {
    constructor(name) {
         this.name = name;
         this.dead = false
         this.pageLocation = 0
     }
}
const game = {
    newHero: "",

    start(name) {
        const inputname=document.getElementById('yourname')
        const nameDisplay=inputname.value
        console.log(nameDisplay)
        this.newHero=new Hero(name);
    },

    pageOne() {
        //remove what's on the page (function remove everything but the background image. Select them and remove them.)
        const words = document.querySelector("#words")
        const list = document.querySelector("#list")
        words.style.display="none"
    },

}
const endGame = ()=>{
    alert("GAME OVER!")
}

const turnPage = ()=>{
     const pageZero = document.querySelector("#page-0")
     pageZero.style.display = "block"
     const pageOne = document.querySelector("#page-1")
     pageOne.style.display = "none"
     const pageTwo = document.querySelector("#page-2")
     pageTwo.style.display = "none"
     const pageThree = document.querySelector("#page-3")
     pageThree.style.display = "none"
     const pageFour = document.querySelector("#page-4")
     pageFour.style.display = "none"
     const pageFive = document.querySelector("#page-5")
     pageFive.style.display = "none"
     const pageSix = document.querySelector('#page-6')
     pageSix.style.display= "none"
     const pageSeven = document.querySelector('#page-7')
     pageSeven.style.display = "none"
     const pageEight = document.querySelector('#page-8')
     pageEight.style.display= "none"
}
    
//EVENT LISTENERS
let form = document.querySelector('.form')
    form.addEventListener('submit', (event) =>{
        event.preventDefault()
        const userInput = document.querySelector("#yourname")
        console.log(userInput.value)
        document.querySelector("#header").style.display = "none"
        document.querySelector("#words").style.display = "none"
        document.querySelector("#list").style.display = "none"
        document.querySelector('#name').style.display = "none"
    //    let submitName = document.getElementById('yourname').value;
    //     console.log(document.querySelector('#name'))
    //     document.querySelector('#name').innerHTML = `${submitName}`
        
    //     //Add the value from submit name to the game object
    //     game.name=document.getElementById("yourname").value
    //     game.start(submitName)
    //     game.pageOne(submitName)
    //     form.style.display = "none"
    })





//   let enterWorld = confirm("Do you want to begin your journey?")
//     console.log(enterWorld)
// if(enterWorld == true) {
//    let firstChoice = prompt("You come across a fork in the road. Which way do you go? Mt. Doom/Jungle of Death?")

//    if (firstChoice == "Mt. Doom") {
//        alert("Now entering Mt. Doom")
//        turnPage();
       
//        let doomChoice = prompt("Do you want to climb the mountain alone or use a tour guide? alone/guide")
       
//        if (doomChoice == "alone") {
//            alert("You get stuck just as it is getting dark. You freeze to death. Remember: always ask for help when you need it.")
//             endGame();

//        }else if(doomChoice == "guide") {
//             alert ("Your tour guide is eaten by a bear! Luckily, you are able to find your way back to the lodge.")
//        }
//    }
//    else if(firstChoice == "Jungle of Death") {
//        alert("Now entering the Jungle of Death");
//    }
    
// }

// else {
//     alert("You decided to end life before it even began. Good bye.")
// }
