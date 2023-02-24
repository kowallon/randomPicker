const textarea = document.getElementById("textarea")
const choicesDiv = document.getElementById("choices") 
let choices = []

textarea.addEventListener("click", ()=>{
    choicesDiv.innerHTML = ``
})

textarea.addEventListener('keypress', (e)=>{
    if(e.key === 'Enter'){

        choicesDiv.innerHTML=``

        choices = textarea.value.split(",")


        choices.forEach(option =>{
            choicesDiv.innerHTML += `<p class="choice">${option}</p>`
        })
        
        higlightRandom()
        
        textarea.value = ``
        choices = []        
    }
})

function pickRandom(){
    let selectedOption = document.querySelectorAll('p')
    return selectedOption[Math.floor(Math.random() * selectedOption.length)]
}


function higlightRandom(){
    const interval = setInterval(()=>{
        const randomOption = pickRandom()

        console.log("randomOption " + randomOption)


        randomOption.classList.add('selected')

        setTimeout(()=>{
            randomOption.classList.remove('selected')
        }, 100)
        
    },200)

    setTimeout(()=>{
        clearInterval(interval)
        let randomOption = pickRandom()
        randomOption.classList.add('selected')    
    },3000)
}