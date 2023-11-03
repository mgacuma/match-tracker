import { gql } from '@apollo/client';

export const ONLINE_PAGE_INFO = gql`
    query GetOnlineTournamentsPageInfo($page: Int, $perPage: Int) {
        tournaments(query: { perPage: $perPage, page: $page, filter: {hasOnlineEvents: true, upcoming: true}}) {
            pageInfo {
                total
                totalPages
                page
                perPage
            }
        }
    }
`;