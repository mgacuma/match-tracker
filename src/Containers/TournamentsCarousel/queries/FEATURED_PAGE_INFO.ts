import { gql } from '@apollo/client'

export const FEATURED_PAGE_INFO = gql`
    query GetFeaturedTournamentsPageInfo($page: Int, $perPage: Int) {
        tournaments(query: { perPage: $perPage, page: $page, filter: {isFeatured: false, staffPicks: true}}) {
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
            pageInfo {
                total
                totalPages
                page
                perPage
            }
        }
    }
`
