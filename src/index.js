// Your code here
const baseUrl = "http://localhost:3000/characters";
const characters = document.querySelector('#character-bar')
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
        characters.appendChild(span)
        

    });




}

document.addEventListener('DOMContentLoaded', init)