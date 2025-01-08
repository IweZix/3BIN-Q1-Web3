import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone'
import { GraphQLError } from 'graphql';

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = `#graphql
  type Word {
    word: String!
    hints: [String!]!
  }

  type Query {
    allWords: [Word!]!
  }

  type Mutation {
    addWord(
      word: String!
      hints: [String!]!
    ): Word
  }
`;

const words = [
  
];

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    allWords: () => words,
  },
  Mutation: {
    addWord: (root, args) => {
      if (words.find(word => word.word === args.word)) {
        throw new GraphQLError('word must be unique', {
          extensions: {
            code: 'BAD_USER_INPUT',
            invalidArgs: args.word
          }
        });
      }
      console.log(args);
      const word = { word: args.word, hints: args.hints };
      console.log(word);
      words.push(word);
      return word;
    },
  }
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, { listen: { port: 4000 } });

console.log(`🚀 Server listening at: ${url}`);
