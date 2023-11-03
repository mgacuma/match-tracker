import { gql } from '@apollo/client';

export const SEARCH_TOURNAMENT = gql`
query SearchTournament($q: String, $page: Int, $perPage: Int) {
    tournaments(query: {perPage: $perPage, page: $page, filter: {name: $q, published: true}}) {
        nodes {
            id
            addrState
            city
            countryCode
            endAt
            images {
            type
            url
            }
            isOnline
            name
            numAttendees
            slug
            startAt
        }
    }
}
`;