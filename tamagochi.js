'use strict'
let hunger = 50; 
let happiness = 50;
let health = 50;

let isPlaying = true;  
console.log("Добро пожаловать в симулятор Тамагочи!");
while (isPlaying) {  
    // Отображение состояния питомца  
    console.log(`\nВаш питомец:  
    Голод: ${hunger}  
    Счастье: ${happiness}  
    Здоровье: ${health}`);  
  
    // Вывод меню действий  
    console.log("\nЧем займемся?");  
    console.log("1. Кормить");  
    console.log("2. Играть");  
    console.log("3. Уложить спать");  
    console.log("4. Выход");
    let choice = prompt("Выберите действие: ");
    switch (choice) {  
        case '1':  
            // Кормление  
            hunger -= Math.floor(Math.random() * 6) + 10;  
            happiness -= 5;  
            console.log("Вы покормили питомца!");  
            break;  
        case '2':  
            // Игра  
            happiness += Math.floor(Math.random() * 6) + 10;  
            hunger += 5;  
            console.log("Вы поиграли с питомцем!");  
            break;  
        case '3':  
            // Сон  
            health += Math.floor(Math.random() * 6) + 15;  
            hunger += 5;  
            console.log("Питомец отдыхает!");  
            break;  
        case '4':  
            // Выход  
            console.log("До свидания!");  
            isPlaying = false;  
            break;  
        default:  
            console.log("Неверный выбор. Попробуйте снова.");  
    }
    hunger += 5;  
    happiness -= 3;  
    health -= 3;
    if (hunger >= 100) {  
        console.log("\nВаш питомец умер от голода! Игра окончена.");  
        isPlaying = false;  
    } else if (happiness <= 0) {  
        console.log("\nВаш питомец в депрессии! Игра окончена.");  
        isPlaying = false;  
    } else if (health <= 0) {  
        console.log("\nВаш питомец заболел! Игра окончена.");  
        isPlaying = false;  
    } 
    hunger = Math.min(100, Math.max(0, hunger));  
    happiness = Math.min(100, Math.max(0, happiness));  
    health = Math.min(100, Math.max(0, health));
}    
        