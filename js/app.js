class Hero {
    constructor(name) {
         this.name = name;
         this.dead = false
         this.pageLocation = 0
         this.wisdom = 0
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
        document.querySelector('#story-question').style.display = "block"
        document.querySelector("#button-choices").style.display = "block"
    })
let mtDoom = document.querySelector("#doom")
    mtDoom.addEventListener("click", (event) =>{
        event.preventDefault()
        document.querySelector("#mt-doom").style.display = "block"
        document.querySelector("#mt-doom-question").style.display = "block"
        document.querySelector("#jungle-of-death").style.display = "none"
        document.querySelector('#story-question').style.display = "none"
        document.querySelector("#button-choices").style.display = "none"
        document.querySelector("#shadowy").style.display = "none"
        document.querySelector("#button-choices-two").style.display = "block"
        document.querySelector("#frozen").style.display= "none"
    })
let jungleOfDeath = document.querySelector("#jungle")
    jungleOfDeath.addEventListener("click", (event) =>{
        event.preventDefault()
        document.querySelector("#jungle-of-death").style.display = "block"
        document.querySelector("#jungle-question").style.display = "block"
        document.querySelector("#mt-doom").style.display = "none"
        document.querySelector('#story-question').style.display = "none"
        document.querySelector("#button-choices").style.display = "none"
        document.querySelector("#shadowy").style.display = "none"
        document.querySelector("#button-choices-three").style.display = "block"
        document.querySelector("#frozen").style.display="none"
    })
let mtDoomAlone = document.querySelector("#alone")
    mtDoomAlone.addEventListener("click", (event) =>{
        event.preventDefault()
        document.querySelector("#frozen").style.display="block"
        document.querySelector("#mt-doom").style.display = "none"
        document.querySelector("#button-choices-two").style.display = "none"
        document.querySelector("#mt-doom-question").style.display = "none"
        document.querySelector("#mt-doom-frozen").style.display="block"
        document.querySelector("#bear-attack").style.display="none"
        console.log(thid.game.getWise())
    })
let doomGuide = document.querySelector("#mountain-guide")
    doomGuide.addEventListener("click", (event) =>{
        event.preventDefault()
        document.querySelector("#bear-attack").style.display="block"
        document.querySelector("#mt-doom").style.display = "none"
        document.querySelector("#button-choices-two").style.display = "none"
        document.querySelector("#mt-doom-question").style.display = "none"
        document.querySelector("#mt-doom-guide").style.display = "block"
        document.querySelector("#next-button").style.display = "block"
    })
let jungleFoot = document.querySelector("#foot")
    jungleFoot.addEventListener("click", (event) =>{
        event.preventDefault()
        document.querySelector("#tiger-attack").style.display="block"
        document.querySelector("#jungle-of-death").style.display="none"
        document.querySelector("#jungle-question").style.display = "none"
        document.querySelector("#button-choices-three").style.display = "none"
        document.querySelector("#tiger-outcome").style.display = "block"
    })
let jungleJeep = document.querySelector("#jungle-guide")
    jungleJeep.addEventListener("click", (event) =>{
        event.preventDefault()
        document.querySelector("#jungle-of-death").style.display="none"
        document.querySelector("#jungle-question").style.display = "none"
        document.querySelector("#button-choices-three").style.display = "none"
        document.querySelector("#proceed-button").style.display = "block"
        document.querySelector("#monkeys-outcome").style.display = "block"
        document.querySelector("#monkeys").style.display = "block"
    })
let proceedToPartTwo = document.querySelector("#proceed-button")
    proceedToPartTwo.addEventListener("click", (event) =>{
        event.preventDefault()
        document.querySelector("#proceed-button").style.display = "none"
        document.querySelector("#monkeys-outcome").style.display = "none"
        document.querySelector("#monkeys").style.display = "none"
        document.querySelector("#second-shadow").style.display = "block"
        document.querySelector("#button-choices-four").style.display = "block"
    })
let nextToPartTwo = document.querySelector("#next-button")
    nextToPartTwo.addEventListener("click", (event) =>{
    event.preventDefault()
        document.querySelector("#next-button").style.display = "none"
        document.querySelector("#bear-attack").style.display = "none"
        document.querySelector("#mt-doom-guide").style.display = "none"
        document.querySelector("#second-shadow").style.display = "block"
        document.querySelector("#button-choices-four").style.display = "block"
        document.querySelector("#second-shadow").style.display = "block"
    })
let seaOfUncertainty = document.querySelector("#sea-button")
    seaOfUncertainty.addEventListener("click", (event) =>{
        event.preventDefault() 
        document.querySelector("#scary-sea").style.display = "block"
        document.querySelector("#second-shadow").style.display = "none"
        document.querySelector("#button-choices-four").style.display = "none"
        document.querySelector("#sea-question").style.display = "block"
        document.querySelector("#button-choices-five").style.display = "block"
    })
let seaYacht = document.querySelector("#yacht-button")
    seaYacht.addEventListener("click", (event) =>{
        event.preventDefault() 
        document.querySelector("#scary-sea").style.display = "none"
        document.querySelector("#button-choices-five").style.display = "none"
        document.querySelector("#shark-attack").style.display= "block"
        document.querySelector("#yacht-outcome").style.display= "block"
        document.querySelector("#sea-question").style.display= "none"
    })
let fishingBoat = document.querySelector("#fishing-button")
    fishingBoat.addEventListener("click", (event) =>{
    event.preventDefault() 
        document.querySelector("#fishing-outcome").style.display= "block"
        document.querySelector("#scary-sea").style.display = "none"
        document.querySelector("#button-choices-five").style.display = "none"
        document.querySelector("#sea-question").style.display= "none"
        document.querySelector("#bass").style.display= "block"
        document.querySelector("#continue-button").style.display= "block"
    })
let forgottenCastle = document.querySelector("#castle-button")
    forgottenCastle.addEventListener("click", (event) =>{
        event.preventDefault() 
        document.querySelector("#castle").style.display = "block"
        document.querySelector("#scary-sea").style.display = "none"
        document.querySelector("#second-shadow").style.display = "none"
        document.querySelector("#forgotten-castle").style.display = "block"
        document.querySelector("#castle-question").style.display = "block"
        document.querySelector("#button-choices-six").style.display = "block"
        document.querySelector("#button-choices-four").style.display = "none"
    })
let ghostOutcome = document.querySelector("#go-around")
    ghostOutcome.addEventListener("click", (event) =>{
    event.preventDefault() 
        document.querySelector("#ghost-outcome").style.display = "block"
        document.querySelector("#ghosts").style.display = "block"
        document.querySelector("#castle").style.display = "none"
        document.querySelector("#forgotten-castle").style.display = "none"
        document.querySelector("#castle-question").style.display = "none"
        document.querySelector("#button-choices-six").style.display = "none"
    })
let nextToPartThree = document.querySelector("#continue-button")
    nextToPartThree.addEventListener("click", (event) =>{
    event.preventDefault()
        document.querySelector("#continue-button").style.display = "none"
        document.querySelector("#bass").style.display = "none"
        document.querySelector("#second-shadow").style.display = "block"
        document.querySelector("#button-choices-seven").style.display = "block"
        document.querySelector("#fishing-outcome").style.display = "none"
    })
let devilPact = document.querySelector("#devil")
    devilPact.addEventListener("click", (event) =>{
    event.preventDefault()
        document.querySelector("#button-choices-seven").style.display = "none"
        document.querySelector("#second-shadow").style.display = "none"
        document.querySelector("#devil-pic").style.display = "block"
        document.querySelector("#devil-question").style.display = "block"
        document.querySelector("#button-choices-eight").style.display = "block"
    })
let treasureOutcome = document.querySelector("#enter")
    treasureOutcome.addEventListener("click", (event) =>{
    event.preventDefault()
        document.querySelector("#treasure-chest").style.display = "block"
        document.querySelector("#treasure-outcome").style.display = "block"
        document.querySelector("#please-proceed-button").style.display = "block"
        document.querySelector("#button-choices-six").style.display = "none"
        document.querySelector("#castle").style.display = "none"
        document.querySelector("#castle-question").style.display = "none"
    })
let proceedToPartThree = document.querySelector("#please-proceed-button")
    proceedToPartThree.addEventListener("click", (event) =>{
    event.preventDefault()
        document.querySelector("#treasure-chest").style.display = "none"
        document.querySelector("#treasure-outcome").style.display = "none"
        document.querySelector("#second-shadow").style.display = "block"
        document.querySelector("#button-choices-seven").style.display = "block"
        document.querySelector("#please-proceed-button").style.display = "none"
    })
let princessChoice = document.querySelector("#princess-button")
    princessChoice.addEventListener("click", (event) =>{
    event.preventDefault()
        document.querySelector("#button-choices-seven").style.display = "none"
        document.querySelector("#second-shadow").style.display = "none"
        document.querySelector("#princess-pic").style.display = "block"
        document.querySelector("#princess-question").style.display = "block"
        document.querySelector("#princess-button-choices").style.display = "block"
    })
let marryPrincess = document.querySelector("#marry")
    marryPrincess.addEventListener("click", (event) =>{
    event.preventDefault()
        document.querySelector("#princess-button-choices").style.display = "none"
        document.querySelector("#princess-pic").style.display = "none"
        document.querySelector("#marry-princess-outcome").style.display = "block"
        document.querySelector("#drunk-pic").style.display = "block"
        document.querySelector("#princess-question").style.display = "none"
    })
let dumpPrincess = document.querySelector("#dump")
    dumpPrincess.addEventListener("click", (event) =>{
    event.preventDefault()
        document.querySelector("#princess-button-choices").style.display = "none"
        document.querySelector("#princess-pic").style.display = "none"
        document.querySelector("#princess-question").style.display = "none"
        document.querySelector("#love-pic").style.display = "block"
        document.querySelector("#dump-outcome").style.display = "block"
        document.querySelector("#keep-going").style.display = "block"
    })
let nextToPartFour = document.querySelector("#keep-going")
    dumpPrincess.addEventListener("click", (event) =>{
    event.preventDefault()
        document.querySelector("#love-pic").style.display = "none"
        document.querySelector("#dump-outcome").style.display = "none"
        document.querySelector("#keep-going").style.display = "none"
        document.querySelector("#second-shadow").style.display = "block"
        document.querySelector("#button-choices-nine").style.display = "block"
    })
        