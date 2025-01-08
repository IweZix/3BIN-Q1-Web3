import { gql } from '@apollo/client';

export const ALL_WORDS = gql`
    query {
        allWords {
            word
            hints
        }
    }
`

export const ADD_WORD = gql`
    mutation($word: String!, $hints: [String!]!) {
        addWord(word: $word, hints: $hints) {
            word
            hints
        }
    }
`