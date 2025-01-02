const { ObjectId } = require('mongodb');
const dbDataInput = {
  jokes: [
    {
      _id: new ObjectId('6461f476d9a9da9dbeade34e'),
      name: 'Kevin Hart',
      joke: "Je ne fais pas de jogging. Si je cours, sachez que quelque chose me poursuit ou qu'un buffet est en train de fermer.",
      imageUrl: 'https://e-vinci.github.io/ai-pics/kevin-hart-running2.jpg',
      comments: [],
    },
    {
      _id: new ObjectId('6461f476d9a9da9dbeade35e'),
      name: 'Oscar Wilde',
      joke: "Les hommes marient toujours une femme avec l'espoir qu'elle ne changera pas, et les femmes épousent un homme avec l'espoir qu'il changera. Invariablement, les deux sont déçus.",
      imageUrl: 'https://e-vinci.github.io/ai-pics/oscar-wilde-unchanging2.jpg',
      comments: [],
    },
    {
      _id: new ObjectId('6461f476d9a9da9dbeade36e'),
      name: 'Groucho Marx',
      joke: "Je ne veux pas appartenir à un club qui m'accepterait comme membre.",
      imageUrl: 'https://e-vinci.github.io/ai-pics/groucho-marx-club2.jpg',
      comments: [],
    },
    {
      _id: new ObjectId('6461f476d9a9da9dbeade37e'),
      name: 'Albert Einstein',
      joke: "Deux choses sont infinies : l'univers et la bêtise humaine. Mais en ce qui concerne l'univers, je n'en ai pas encore acquis la certitude.",
      imageUrl:
        'https://e-vinci.github.io/ai-pics/albert-einstein-universe2.jpg',
      comments: [],
    },
    {
      _id: new ObjectId('6461f476d9a9da9dbeade38e'),
      name: 'Tina Fey',
      joke: "L'âge adulte est un mythe. C'est juste une journée après l'autre où tu essaies de ne pas te faire prendre à manger des biscuits pour le dîner.",
      imageUrl: 'https://e-vinci.github.io/ai-pics/tina-fey-eating2.jpg',
      comments: [],
    },
  ],
};

module.exports = { dbDataInput };
