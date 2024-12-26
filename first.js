document.querySelector('button').addEventListener('click',()=>{
const age = document.getElementById('age').value
const weight = document.getElementById('weight').value
const height = document.getElementById('height').value

const bmi = Number(weight)/(Number(height)**2);
document.querySelector('.result').textContent+=`${bmi}`
})

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

const colors = [
"#FF9999", // Light Red
    "#FFCC99", // Light Coral
    "#FFFF99", // Light Yellow
    "#CCFF99", // Light Lime
    "#99FF99", // Mint Green
    "#99FFCC", // Aqua
    "#99FFFF", // Cyan
    "#99CCFF", // Light Sky Blue
    "#9999FF", // Lavender
    "#CC99FF", // Light Purple
    "#FF99FF", // Pink
    "#FF99CC", // Light Rose
    "#FFCCFF", // Light Magenta
    "#FFFFCC", // Pale Yellow
    "#CCFFFF", // Pale Blue
    "#CCFFCC"  // Pale Green
  ]

function generator(){
let quote=document.querySelector('.quotes')
let index = Math.floor(Math.random()*healthQuotes.length)
quote.textContent = healthQuotes[index]

let colorIndex = Math.floor(Math.random() * colors.length);
let card = document.querySelector('.quotes')
card.style.backgroundColor = colors[colorIndex]
}
setInterval(generator,5000)