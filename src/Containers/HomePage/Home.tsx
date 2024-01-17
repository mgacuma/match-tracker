import { TournamentsCarousel } from '../TournamentsCarousel/TournamentCarousel'
import { LOCAL_PAGE_INFO } from '../TournamentsCarousel/queries/LOCALS_PAGE_INFO'
import { FEATURED_PAGE_INFO } from '../TournamentsCarousel/queries/FEATURED_PAGE_INFO'
import { UPCOMING_PAGE_INFO } from '../TournamentsCarousel/queries/UPCOMING_PAGE_INFO'
import { ONLINE_PAGE_INFO } from '../TournamentsCarousel/queries/ONLINE_PAGE_INFO'
import { useGeo } from './hooks/useGeo'
import { useAuth } from '../../Providers/Auth/AuthProvider'
import { Box, Heading, VStack } from '@chakra-ui/react'

export function Home () {
  const { countryCode, coordinates } = useGeo()
  const { user } = useAuth()

  return (
		<Box>
			{user && <Heading px='64px' py='32px'>Welcome back 👋🏽, {user.attributes?.name.split(' ')[0]}</Heading>}
			<VStack spacing='64px' px='64px'>
				<TournamentsCarousel query={LOCAL_PAGE_INFO} coordinates={coordinates} heading='Tournaments Near You' />
				<TournamentsCarousel query={FEATURED_PAGE_INFO} heading='Featured Tournaments' />
				<TournamentsCarousel query={UPCOMING_PAGE_INFO} heading='Upcoming Tournaments' />
				<TournamentsCarousel query={ONLINE_PAGE_INFO} heading='Online Tournaments' />
			</VStack>
		</Box>
  )
}
