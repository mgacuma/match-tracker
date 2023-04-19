import React, { useEffect } from 'react'
import { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/system';
import axios from 'axios'
import { NavBar } from './navigation/NavBar';
import { Tournament } from './tournaments/models/Tournament.type';
import { TournamentGrid } from './tournaments/TournamentGrid';
import { CircularProgress } from '@mui/material';

function App() {
  const [tournaments, setTournaments] = useState<Tournament[]>([]);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    setLoading(true);
    axios.get('http://localhost:8080/tournaments/ongoing')
      .then(response => {
        if(response.data){
          console.log(response.data)
          setTournaments(response.data)
          setLoading(false);
        }
      })
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <NavBar />
      <Box height={64} paddingBottom={16} />
      {loading && <Box display='flex' justifyContent='center'>
          <CircularProgress />
        </Box>}
      {tournaments.length !== 0 && <TournamentGrid tournaments={tournaments} />}
    </React.Fragment>
  )
}

export default App
