const healthQuotes = [
    "Take care of your body. It’s the only place you have to live – unless you’ve mastered teleportation.",
    "An apple a day keeps the doctor away… if you throw it hard enough.",
    "Health is like money; we never have a true idea of its value until we lose it. So spend it wisely!",
    "Don’t dig your grave with your own knife and fork. Use chopsticks for portion control!",
    "Sweat is just your fat crying – make it weep!",
    "If you think wellness is expensive, try illness!",
    "You can’t outrun a bad diet, but you can walk away from the junk food aisle.",
    "Drinking water is the cheapest skincare routine out there.",
    "Being healthy and fit isn’t a fad or a trend; it’s a lifestyle – one with cheat days, of course!",
    "Every time you eat is an opportunity to nourish your body – or just carb-load for Netflix marathons."
];

document.querySelector('button').addEventListener('click',()=>{


const age = document.getElementById('age').value
const weight = document.getElementById('weight').value
const height = document.getElementById('height').value

const bmi = Number(weight)/(Number(height)**2);
document.querySelector('.result').textContent+=`${bmi}`
})

  