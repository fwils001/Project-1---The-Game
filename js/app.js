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
        document.querySelector("#frozen").style.display="none"
       
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