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
    }
    )
let mtDoom = document.querySelector("#doom")
    mtDoom.addEventListener("click", (event) =>{
        event.preventDefault()
        document.querySelector("#mt-doom").style.display = "block"
        document.querySelector("#jungle-of-death").style.display = "none"
        document.querySelector('#story-question').style.display = "none"
        document.querySelector("#button-choices").style.display = "none"
        document.querySelector("#shadowy").style.display = "none"
       
    })
let jungleOfDeath = document.querySelector("#jungle")
    jungleOfDeath.addEventListener("click", (event) =>{
        event.preventDefault()
        document.querySelector("#jungle-of-death").style.display = "block"
        document.querySelector("#mt-doom").style.display = "none"
        document.querySelector('#story-question').style.display = "none"
        document.querySelector("#button-choices").style.display = "none"
        document.querySelector("#shadowy").style.display = "none"
    })
    