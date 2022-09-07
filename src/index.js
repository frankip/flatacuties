// Your code here
const baseUrl = "http://localhost:3000/characters";
const characters = document.querySelector('#character-bar')
const characterInfo = document.querySelector('#detailed-info')


const init = () =>{
    console.log('we are linve');
    // handleCharacterCard();
    fetchData()

}

async function fetchData(){
    const response = await fetch(baseUrl)
    const data = await response.json()

    console.log(data);
    handleCharacterCard(data)
}

function handleCharacterCard(data){
    data.forEach(user => {
        let span =  document.createElement('span')
        span.textContent = user.name

        span.addEventListener('click', ()=>{
            console.log('click', user);

            characterInfo.querySelector('#name').textContent = user.name
            characterInfo.querySelector('#image').src = user.image
            characterInfo.querySelector("#vote-count").textContent = user.votes;

        })
        characters.appendChild(span)
        

    });




}

document.addEventListener('DOMContentLoaded', init)