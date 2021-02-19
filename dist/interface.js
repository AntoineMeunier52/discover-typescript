;
const user1 = {
    name: "Antoine",
    age: 20,
    colorHair: "brun",
    isMajeur: true,
};
function hello(person) {
    console.log(`Salut a toi ${person.name}`);
}
hello(user1);
const user2 = {
    firstName: 'Antoine',
    nickName: 'Meunier',
    age: 20,
};
//user2.firstName = 'oui';
//on ne peut pas venir modifier cette valeur
console.log(user2);
const MyUserLog = {
    firstName: 'rober',
    nickName: 'lecomte',
    age: 20,
    password: 'qwerty',
    Surname: 'berber',
    hobbies: ['la biere', 'la mousse', 'le jack']
};
//autre facon de declarer une interface
const MyOtherUser = {};
MyOtherUser.Surname = "Quentin";
console.log(MyOtherUser.Surname);
const sayHello = (name, age) => {
    console.log(`bonjour ${name}, tu as ${age} ans`);
};
sayHello("Antoine", 20);
