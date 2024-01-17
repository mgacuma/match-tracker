import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '../Components/Layout/Layout'
import { EventCard } from '../Components/EventCard/EventCard'
import { PhaseItem } from '../Components/EventCard/PhaseItem/PhaseItem'
import { TournamentPage } from '../Containers/TournamentPage/TournamentPage'
import { LoginPage } from '../Containers/LoginPage/LoginPage'
import { SignupPage } from '../Containers/SignupPage/SignupPage'
import { Home } from '../Containers/HomePage/Home'

export const router = createBrowserRouter([
	{
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'tournament/:tournamentId',
        element: <TournamentPage />
      },
      {
        path: 'tournament/:tournamentId/event/:eventId',
        element: <EventCard event='' />
      },
      {
        path: 'tournament/:tournamentId/event/:eventId/phase/:phaseId',
        element: <PhaseItem phase='' />
      },
      {
        path: 'login',
        element: <LoginPage />
      },
      {
        path: 'signup',
        element: <SignupPage />
      }
    ]
  }
], { basename: '/match-tracker' })
