//declaration de variables

let age : number = 43;
let firstName : string = 'Antoine'
let isGood : boolean = true
let all : any = 5 //or "string" or boolean

//Array and object

    //array

let friends : ( number | string )[] = ["Antoine", 389];
let arrayWithAll : any[] = [true, 'oui', 98];

    //object

let userData: {name: string; age: number; isMajeur: boolean} = {
    name: "Antoine",
    age: 20,
    isMajeur: true
}

//Enums and Tuples

    //Enum

    enum Weekdays {
        Lundi,
        Mardi,
        Mecredi,
        Jeudi
    }

    console.log(Weekdays[3])
        //on peut changer l'index d'un enum

    enum Month {
        Janvier = 6,
        Fevrier,
        Mars
    }

    console.log(Month[6], Month[8])

    //Tuples

    let identity : [string, number] = ["Antoine", 20]