let userValue = Number(prompt("Введи пожалуйста число от 1 до 3. 1 - это камень, 2 - ножницы, 3 - бумага"))
let progValue = Math.ceil(Math.random() * 3)
alert(`Число от программы - ${progValue}`)
if (userValue === 1 && progValue > 1 || userValue === 2 && progValue === 3) {
    alert("УРА! Ты выиграл!!!")
}
else if (userValue === 3 && progValue < 3 || userValue === 2 && progValue === 1) {
    alert("Извини! Ты продул(((")
} else {
    alert("Ничья! Победила дружба:)")
}