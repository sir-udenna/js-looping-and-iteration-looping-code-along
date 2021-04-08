// returns an array of thank you messages for each name provided to the function
function writeCards(name,eventName){
    let thankYou = []
    for (let i = 0; i < name.length; i++){
        thankYou.push(`Thank you, ${name[i]}, for the wonderful ${eventName} gift!`)
    }
    return thankYou
}

function countDown(number){
    while (number >= 0){
        console.log(number--);
    }
}