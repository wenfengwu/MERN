const pokémon = Object.freeze([
        { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
        { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
        { "id": 9,   "name": "Blastoise",  "types": ["water"] },
        { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
        { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
        { "id": 23,  "name": "Ekans",      "types": ["poison"] },
        { "id": 24,  "name": "Arbok",      "types": ["poison"] },
        { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
        { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
        { "id": 52,  "name": "Meowth",     "types": ["normal"] },
        { "id": 63,  "name": "Abra",       "types": ["psychic"] },
        { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
        { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
        { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
        { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
        { "id": 98,  "name": "Krabby",     "types": ["water"] },
        { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
        { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
        { "id": 133, "name": "Eevee",      "types": ["normal"] },
        { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
        { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
        { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
        { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
    ]);

// 1.
const list1 = pokémon.filter(val => val.id % 3 === 0);
console.log(list1);
// 2.
const list2 = pokémon.filter(val => val.types.includes("fire"));
console.log(list2);
// 3.
const list3 = pokémon.filter(val => val.types.length > 1);
console.log(list3);
// 4.
const list4 = pokémon.map(val => val.name);
console.log(list4);
// 5.
const list5 = pokémon.filter(val => val.id > 99).map(val => val.name);
console.log(list5);
// 6.
const list6 = pokémon.filter(val => val.types[0] === 'poison').map(val => val.name);
console.log(list6);
// 7.
const list7 = pokémon.filter(val => val.types[1] === 'flying').map(val => val.types[0]);
console.log(list7);
// 8.
const counter = pokémon.filter(val => val.types.includes("normal")).length;
console.log(counter);