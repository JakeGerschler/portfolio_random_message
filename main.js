const luckyAnimal = ["Löwe", "Tiger", "Puma", "Jaguar", "Adler", "Hai", "Elefant", "Gorilla"];
const motivationQuotes = ["Fehler sind Verrat am Arbeitgeber", "Quadratmeter sind Hektar für Arme", "Kohlen sind nichts anderes als Diamanten die dem Druck nicht standgehalten haben", "Die Liebe zu einem Menschen ist immer auch ein Kostenfaktor", "Die besten Gedanken entstehen im Kopf", "Übertriff dich selbst, die anderen haben es doch auch geschafft", "Der Löwe ist der Hai unter den Adlern", "Mut rückwärts heißt tun!", "Das lächeln eines Kindes ist soviel weniger Wert als Geld", "Ein schöner Tag ändert nichts an einem verpfuschten Leben"];

function mainMethod(name){

    let animal = returnAnimal();
    let motivationQuote = returnMotivationQoute();

    if (name === undefined){
        console.log(`Dein Motivationsspruch lautet: ${motivationQuote}. Dein Glückstier ist: ${animal}`);
    } else {
        console.log(`Hallo ${name}, du wilder ${animal}! Dein Motivationsspruch lautet: ${motivationQuote}`);
    }
}

function returnAnimal(){
    return luckyAnimal[chooseRandomIndex(luckyAnimal)];
}

function returnMotivationQoute(){
    return motivationQuotes[chooseRandomIndex(motivationQuotes)];
}

function chooseRandomIndex(Array){
    return Math.floor(Math.random() * Array.length);
}