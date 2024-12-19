const { ObjectId } = require('mongodb');
const dbDataInput = {
  books: [
    {
      _id: new ObjectId('6461f476d9a9da9dbeade34e'),
      title: "Architecture de l'ordinateur",
      author: "Andrew S. Tanenbaum",
      state: "read"
    },
    {
      _id: new ObjectId('6461f476d9a9da9dbeade35e'),
      title: "Algorithmique : Techniques fondamentales et évolutions récentes",
      author: "Gilles Brassard, Paul Bratley",
      state: "to_read"
    },
    {
      _id: new ObjectId('6461f476d9a9da9dbeade36e'),
      title: "Apprenez à programmer avec JavaScript",
      author: "Dmitry Soshnikov",
      state: "reading"
    },
    {
      _id: new ObjectId('6461f476d9a9da9dbeade37e'),
      title: "React.js : Une implémentation pratique",
      author: "Clément Huez",
      state: "read"
    },
    {
      _id: new ObjectId('6461f476d9a9da9dbeade38e'),
      title: "Node.js : Apprendre par la pratique",
      author: "Jonathan Wexler",
      state: "to_read"
    }
  ]
};

module.exports = { dbDataInput };
