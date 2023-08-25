import { gql } from '@apollo/client';

export const FEATURED_PAGE_INFO = gql`
    query GetFeaturedTournamentsPageInfo($page: Int, $perPage: Int) {
        tournaments(query: { perPage: $perPage, page: $page, filter: {isFeatured: false, staffPicks: true}}) {
            pageInfo {
                total
                totalPages
                page
                perPage
            }
        }
    }
`;