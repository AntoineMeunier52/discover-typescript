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
