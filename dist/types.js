//declaration de variables
let age = 43;
let firstName = 'Antoine';
let isGood = true;
let all = 5; //or "string" or boolean
//Array and object
//array
let friends = ["Antoine", 389];
let arrayWithAll = [true, 'oui', 98];
//object
let userData = {
    name: "Antoine",
    age: 20,
    isMajeur: true
};
//Enums and Tuples
//Enum
var Weekdays;
(function (Weekdays) {
    Weekdays[Weekdays["Lundi"] = 0] = "Lundi";
    Weekdays[Weekdays["Mardi"] = 1] = "Mardi";
    Weekdays[Weekdays["Mecredi"] = 2] = "Mecredi";
    Weekdays[Weekdays["Jeudi"] = 3] = "Jeudi";
})(Weekdays || (Weekdays = {}));
console.log(Weekdays[3]);
//on peut changer l'index d'un enum
var Month;
(function (Month) {
    Month[Month["Janvier"] = 6] = "Janvier";
    Month[Month["Fevrier"] = 7] = "Fevrier";
    Month[Month["Mars"] = 8] = "Mars";
})(Month || (Month = {}));
console.log(Month[6], Month[8]);
//Tuples
let identity = ["Antoine", 20];
