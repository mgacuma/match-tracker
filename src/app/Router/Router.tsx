import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../Layout/Layout';
import { LoginPage } from '../Auth/LoginPage/LoginPage';
import { SignupPage } from '../Auth/SignupPage/SignupPage';
import { Home } from '../Home/Home';
import { EventCard } from '../Tournaments/TournamentPage/EventCard/EventCard';
import { PhaseItem } from '../Tournaments/TournamentPage/EventCard/PhaseItem/PhaseItem';
import { TournamentPage } from '../Tournaments/TournamentPage/TournamentPage';

export const router = createBrowserRouter([
	{ element: <Layout />,
		children: [
			{
				path: '/',
				element: <Home />
			},
			{
				path: 'tournament/:tournamentId',
				element: <TournamentPage />,
			},
			{
				path: 'tournament/:tournamentId/event/:eventId',
				element: <EventCard event='' />
			},
			{
				path: 'tournament/:tournamentId/event/:eventId/phase/:phaseId',
				element: <PhaseItem phase='' />,
			},
			{
				path: 'login',
				element: <LoginPage />,
			},
			{
				path: 'signup',
				element: <SignupPage />,
			}
		]
	}
], {basename: '/match-tracker'});
  