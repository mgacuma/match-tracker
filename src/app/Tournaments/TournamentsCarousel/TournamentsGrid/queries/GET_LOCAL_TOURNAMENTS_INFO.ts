import { gql } from "@apollo/client";

export const GET_LOCAL_TOURNAMENTS_INFO = gql`
    query GetLocalTournamentsInfo($coordinates: String) {
        tournaments(query: {perPage: 9, filter: {upcoming: true, location: {distanceFrom: $coordinates, distance: "50mi"}}}) {
            pageInfo {
                total
                totalPages
                page
                perPage
            }
        }
    }
`