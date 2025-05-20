const Pokenea = require('./Pokeneas');
const { AWS_BASE_URL } = process.env;

pokeneas = [
    new Pokenea({
        id: 1,
        name: "Pikachu",
        height: 0.4,
        abilities: "Static",
        image: `${AWS_BASE_URL}/pikachu.png`,
        phrase: "The unexamined life is not worth living.",
    }),

    new Pokenea({
        id: 2,
        name: "Charmander",
        height: 0.6,
        abilities: "Blaze",
        image: `${AWS_BASE_URL}/charmander.png`,
        phrase: "Happiness depends upon ourselves.",
    }),

    new Pokenea({
        id: 3,
        name: "Bulbasaur",
        height: 0.7,
        abilities: "Overgrow",
        image: `${AWS_BASE_URL}/bulbasaur.png`,
        phrase: "I think, therefore I am.",
    }),

    new Pokenea({
        id: 4,
        name: "Squirtle",
        height: 0.5,
        abilities: "Torrent",
        image: `${AWS_BASE_URL}/squirtle.png`,
        phrase: "He who has a why to live can bear almost any how.",
    }),

    new Pokenea({
        id: 5,
        name: "Caterpie",
        height: 0.3,
        abilities: "Shield Dust",
        image: `${AWS_BASE_URL}/caterpie.png`,
        phrase: "Man is condemned to be free.",
    }),

    new Pokenea({
        id: 6,
        name: "Nidoking",
        height: 1.4,
        abilities: "Poison Point",
        image: `${AWS_BASE_URL}/nidoking.png`,
        phrase: "The only true wisdom is in knowing you know nothing.",
    }),

    new Pokenea({
        id: 7,
        name: "Nidoqueen",
        height: 1.3,
        abilities: "Poison Point",
        image: `${AWS_BASE_URL}/nidoqueen.png`,
        phrase: "Life must be understood backward. But it must be lived forward.",
    }),

    new Pokenea({
        id: 8,
        name: "Clefairy",
        height: 0.6,
        abilities: "Cute Charm",
        image: `${AWS_BASE_URL}/clefairy.png`,
        phrase: "You only live once, but if you do it right, once is enough.",
    }),

    new Pokenea({
        id: 9,
        name: "Jigglypuff",
        height: 0.6,
        abilities: "Cute Charm",
        image: `${AWS_BASE_URL}/jigglypuff.png`,
        phrase: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
    }),

    new Pokenea({
        id: 10,
        name: "Wigglytuff",
        height: 1.0,
        abilities: "Cute Charm",
        image: `${AWS_BASE_URL}/wigglytuff.png`,
        phrase: "Liberty consists in doing what one desires.",
    }),
]   

module.exports = pokeneas;
