import { gql } from '@apollo/client';

export const SEARCH_TOURNAMENT = gql`
    query SearchTournament($q: String, $page: Int, $perPage: Int) {
        tournaments(query: {perPage: $perPage, page: $page, filter: {name: $q, published: true}}) {
            pageInfo {
                total
                totalPages
                page
                perPage
            }
        }
    }
`;