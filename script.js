let button = document.querySelector('.button')


let accessibility = document.querySelector('.accessibility')
let activity = document.querySelector('.activity')
let participants = document.querySelector('.participants')
let price = document.querySelector('.price')
let type = document.querySelector('.type')

let results = document.querySelector('.results')


function getBored() {

    fetch ('http://www.boredapi.com/api/activity/')
    .then(function (response) { return response.json() })
    .then(function (data) { console.log(data)


        accessibility.innerHTML = 'Accessibility: ' + data.accessibility;
        activity.innerHTML = 'Activity: ' + data.activity
     
        participants.innerHTML = 'Participants: ' + data.participants
        price.innerHTML = 'Price: ' + data.price
        type.innerHTML = 'Type: ' + data.type


        results.style.border = '2px solid black'
        results.style.backgroundColor = 'white'



       

    })}

button.addEventListener('click', getBored)