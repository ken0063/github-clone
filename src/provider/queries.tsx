import { gql } from '@apollo/client';

export const SearchRepo = gql`
  query SearchRepo($query: String!, $type: SearchType!, $first: Int) {
    search(query: $query, type: $type, first: $first) {
      nodes {
        ... on Repository {
          id
          nameWithOwner
          description
          languages(first: 1) {
            nodes {
              name
            }
          }
          licenseInfo {
            name
          }
          owner {
            ... on User {
              id
              email
              login
              bio
            }
            id
          }
          updatedAt
          stargazerCount
        }
      }
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
      repositoryCount
    }
  }
`;

export const SearchUser = gql`
  query SearchUser($query: String!, $type: SearchType!, $first: Int) {
    search(query: $query, type: $type, first: $first) {
      nodes {
        ... on User {
          id
          email
          bio
          login
          name
          location
        }
      }
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
      userCount
    }
  }
`;

export const Viewer = gql`
  query Viewer {
    viewer {
      login
      name
      avatarUrl
    }
  }
`;
