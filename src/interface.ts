interface PersonId {
    name: string;
    age: number;
    colorHair: string;
    isMajeur: boolean;
};

const user1 : PersonId = {
    name: "Antoine",
    age: 20,
    colorHair:"brun",
    isMajeur: true,
};

function hello(person: PersonId):void {
    console.log(`Salut a toi ${person.name}`);
}

hello(user1);

//complexe interface


interface UserProfile {
    readonly firstName: string;
    //la key firstName ne peut pas etre modifier
    nickName: string;
    age: number;
    isMajeur?: boolean;
    //la key isMajeur est maitenant optionnelle
}

const user2: UserProfile = {
    firstName: 'Antoine',
    nickName: 'Meunier',
    age: 20,
    //isMajeur: true,
}


//user2.firstName = 'oui';
//on ne peut pas venir modifier cette valeur


console.log(user2)




//permet de faire un heritage de interface a une autre
interface UserLogin extends UserProfile {
    password: string;
    Surname: string;
    hobbies?: Array<string>;
    //[]string
}


const MyUserLog : UserLogin = {
    firstName: 'rober',
    nickName: 'lecomte',
    age: 20,
    password: 'qwerty',
    Surname: 'berber',
    hobbies: ['la biere', 'la mousse', 'le jack']
}



//autre facon de declarer une interface

const MyOtherUser = <UserLogin>{};

MyOtherUser.Surname = "Quentin"

console.log(MyOtherUser.Surname)


//INTERFACE WITH FUNCTION

interface Hello {
    (name: string, age: number): void;
}

const sayHello : Hello = (name, age) => {
    console.log(`bonjour ${name}, tu as ${age} ans`)
}

sayHello("Antoine", 20)