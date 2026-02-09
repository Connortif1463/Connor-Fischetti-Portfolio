import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Copyright from './Copyright';
import ScopedCssBaseline from '@mui/material/ScopedCssBaseline';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';

export default function App() {
  return (
    <ScopedCssBaseline>
      <Container maxWidth="sm">
        <Box sx={{ mt: 4 }}>
          <Typography 
            variant="h3"
            align="center"
            sx={{ color: 'text.primary'}}
          >
            Connor Fischetti
          </Typography>

          <Typography
            variant="h5"
            align="center"
            sx={{ color: 'text.secondary' }}
          >
            Software Development Portfolio
          </Typography>
          
          <Box>
            <Stack
              alignItems="center"
              justifyContent="center"
              direction="row"
              divider={<Divider orientation="vertical" flexItem variant="middle" />}
              spacing={2}
            >
              <Link href="https://www.linkedin.com/in/connor-fischetti-6120591aa/" align="center">
                LinkedIn
              </Link>
              <Link href="https://github.com/Connortif1463" align="center">
                GitHub
              </Link>
              <Link href="https://www.instagram.com/connorfischetti/" align="center">
                Instagram
              </Link>
            </Stack>
          </Box>

          <Box sx={{ my: 4 }}>
            <Typography
              variant="h4"
              align="center"
              justifyContent={"centered"}
              sx={{ color: 'text.primary', mb: 2 }}
            >
              Projects_
            </Typography>

            <Stack
              direction="column"
              divider={<Divider orientation="horizontal" flexItem />}
              spacing={3}
            >

              {/* Project 1 */}
              <Box>
                <Typography
                  variant="h5"
                  align="center"
                  sx={{ color: 'text.primary' }}
                >
                  ScholarTime Extension
                </Typography>
                <Typography
                  variant='body1'
                  align="center"
                  sx={{color: 'text.secondary' }}
                >
                  A chrome extension that limits access to certain websites while the user is working on productive tasks.
                </Typography>
                <Box sx={{ textAlign: 'center', mt: 1 }}>
                  <Link href="https://connortif1463.github.io/ScholarTime-Info/" display="block">
                    Website
                  </Link>
                  <Link href="https://github.com/Connortif1463/ScholarTimeProject" display="block">
                    GitHub Repository
                  </Link>
                </Box>
              </Box>

              {/* Project 2 */}
              <Box>
                <Typography
                  variant="h5"
                  align="center"
                  sx={{ color: 'text.primary' }}
                >
                  Meijer Capstone: Environmental Awareness with BeBot
                </Typography>
                <Typography
                  variant='body1'
                  align="center"
                  sx={{color: 'text.secondary' }}
                >
                  Environmental Awareness with BeBot is a web application that builds community engagement with Meijer’s sustainability efforts.
                </Typography>
                <Box sx={{ textAlign: 'center', mt: 1 }}>
                  <Link href="https://capstone.cse.msu.edu/2025-08/projects/meijer/project-video-full-resolution.mp4" display="block">
                    Video Link
                  </Link>
                  <Link href="https://capstone.cse.msu.edu/2025-08/projects/meijer/" display="block">
                    Project Poster
                  </Link>
                </Box>
              </Box>

              {/* Project 3 */}
              <Box>
                <Typography
                  variant="h5"
                  align="center"
                  sx={{ color: 'text.primary' }}
                >
                  OBS-YouTube-Title-Scraper
                </Typography>
                <Typography
                  variant='body1'
                  align="center"
                  sx={{color: 'text.secondary' }}
                >
                  Uses selenium to detect the title from current YouTube video/music and writes its title and link to corresponding text files, for use in streaming.
                </Typography>
                <Box sx={{ textAlign: 'center', mt: 1 }}>
                  <Link href="https://github.com/Connortif1463/OBS-YouTube-Title-Scraper" display="block">
                    GitHub Repository
                  </Link>
                </Box>
              </Box>
            </Stack>
          </Box>

          <Copyright />
        </Box>
      </Container>
    </ScopedCssBaseline>
  );
}