'use client';

import React from 'react';
import {
  Container,
  Typography,
  Box,
  Button,
  Link,
  Divider,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

import ScienceIcon from '@mui/icons-material/Science';
import BoltIcon from '@mui/icons-material/Bolt';
import BiotechIcon from '@mui/icons-material/Biotech';
import PublicIcon from '@mui/icons-material/Public';
import AirIcon from '@mui/icons-material/Air';
import PsychologyIcon from '@mui/icons-material/Psychology';
import ComputerIcon from '@mui/icons-material/Computer';
import MemoryIcon from '@mui/icons-material/Memory';
import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import GroupsIcon from '@mui/icons-material/Groups';
import { Share_Tech_Mono } from 'next/font/google';


import Image from 'next/image';
import { workshopData } from './workshopData';
import { motion } from 'framer-motion';
import { Outfit } from 'next/font/google';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
});

const techFont = Share_Tech_Mono({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

// ------------------- MUI THEME -------------------
const theme = createTheme({
  typography: {
    fontFamily: outfit.style.fontFamily,
    h2: { fontFamily: techFont.style.fontFamily, fontWeight: 700 }, // main page title
    h4: { fontFamily: techFont.style.fontFamily, fontWeight: 700 }, // section titles
    h5: { fontFamily: techFont.style.fontFamily, fontWeight: 700 },
    h6: { fontFamily: techFont.style.fontFamily, fontWeight: 700 },
  },
});

// ------------------- HELPERS -------------------
const nonEventTitles = new Set([
  'Champion Cheatsheets Workshop',
  'How to Fund a Team Workshop',
  'How to Structure a Successful Science Olympiad Team',
  'Science Olympiad Panel',
  'The Road to Gold',
]);

const getWorkshopId = (title: string) =>
  title.toLowerCase().replace(/[^a-z0-9]+/g, '-');

const getEventIcon = (title: string) => {
  if (title.match(/chem|lab|forensics|potions/i)) return <BiotechIcon fontSize="large" />;
  if (title.match(/electric|robot|wind/i)) return <BoltIcon fontSize="large" />;
  if (title.match(/astro|meteor|planet|geo/i)) return <PublicIcon fontSize="large" />;
  if (title.match(/air|flight|helicopter/i)) return <AirIcon fontSize="large" />;
  if (title.match(/psych|anatomy|brain/i)) return <PsychologyIcon fontSize="large" />;
  if (title.match(/code|computer|program/i)) return <ComputerIcon fontSize="large" />;
  if (title.match(/electronics|circuit/i)) return <ElectricalServicesIcon fontSize="large" />;
  if (title.match(/memory|logic/i)) return <MemoryIcon fontSize="large" />;
  if (title.match(/fund/i)) return <AttachMoneyIcon fontSize="large" />;
  if (title.match(/champion|gold/i)) return <EmojiEventsIcon fontSize="large" />;
  if (title.match(/team|panel/i)) return <GroupsIcon fontSize="large" />;
  return <ScienceIcon fontSize="large" />;
};

// ------------------- COMPONENT -------------------
export default function VirtualWorkshopPage() {
  const eventWorkshops = workshopData.filter(w => !nonEventTitles.has(w.title));
  const generalWorkshops = workshopData.filter(w => nonEventTitles.has(w.title));

  return (
    <ThemeProvider theme={theme}>
      <Box className="bg-black text-white">

        {/* ---------- HEADER IMAGE ---------- */}
        <Box sx={{ position: 'relative', height: 420 }}>
          <Image
            src="/images/Workshops.jpg"
            alt="Virtual Workshops"
            fill
            priority
            style={{ objectFit: 'cover' }}
          />
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(0,0,0,0.45)',
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography
                className={techFont.className}
                variant="h2"
                align="center"
                sx={{
                  px: 4,
                  py: 2,
                  borderRadius: 3,
                  border: '3px solid white',
                  backgroundColor: 'rgba(0,0,0,0.5)',
                  letterSpacing: 2,
                }}
              >
                Virtual Workshops
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* ---------- GENERAL WORKSHOPS ---------- */}
        <Container maxWidth="lg" sx={{ py: 10 }}>
          <Typography variant="h4" align="center" gutterBottom>
            General Workshops
          </Typography>

          {/* Row 1 (3 tiles) */}
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, mt: 5, flexWrap: 'wrap' }}>
            {generalWorkshops.slice(0, 3).map(w => (
              <motion.div key={w.title} whileHover={{ scale: 1.08 }}>
                <Link href={`#${getWorkshopId(w.title)}`} underline="none">
                  <Box
                    sx={{
                      height: 180, // same as event tiles
                      width: 280,
                      bgcolor: '#c1f5d9',
                      color: 'black',
                      borderRadius: 2,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textAlign: 'center',
                      px: 2,
                      cursor: 'pointer',
                    }}
                  >
                    {getEventIcon(w.title)}
                    <Typography sx={{ mt: 1, fontWeight: 600 }}>
                      {w.title}
                    </Typography>
                  </Box>
                </Link>
              </motion.div>
            ))}
          </Box>

          {/* Row 2 (2 tiles) */}
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, mt: 4, flexWrap: 'wrap' }}>
            {generalWorkshops.slice(3, 5).map(w => (
              <motion.div key={w.title} whileHover={{ scale: 1.08 }}>
                <Link href={`#${getWorkshopId(w.title)}`} underline="none">
                  <Box
                    sx={{
                      height: 180, // same as event tiles
                      width: 280,
                      bgcolor: '#c1f5d9',
                      color: 'black',
                      borderRadius: 2,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textAlign: 'center',
                      px: 2,
                      cursor: 'pointer',
                    }}
                  >
                    {getEventIcon(w.title)}
                    <Typography sx={{ mt: 1, fontWeight: 600 }}>
                      {w.title}
                    </Typography>
                  </Box>
                </Link>
              </motion.div>
            ))}
          </Box>
        </Container>



        {/* ---------- DIVIDER ---------- */}
        <Box sx={{ display: 'flex', justifyContent: 'center', my: 1 }}>
          <Divider sx={{ width: '70%', borderColor: 'white', borderWidth: 1 }} />
        </Box>

        {/* ---------- EVENT WORKSHOP GRID ---------- */}
        <Container maxWidth="lg" sx={{ py: 6 }}>
          <Typography variant="h4" align="center" gutterBottom>
            Event Workshops
          </Typography>

          <Box
            sx={{
              mt: 4,
              display: 'grid',
              gap: 4,
              gridTemplateColumns: { xs: 'repeat(2,1fr)', md: 'repeat(4,1fr)' },
            }}
          >
            {eventWorkshops.map(w => (
              <motion.div key={w.title} whileHover={{ scale: 1.1 }}>
                <Link href={`#${getWorkshopId(w.title)}`} underline="none">
                  <Box
                    sx={{
                      height: 180,
                      bgcolor: '#c1f5d9',
                      color: 'black',
                      borderRadius: 2,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textAlign: 'center',
                      px: 2,
                    }}
                  >
                    {getEventIcon(w.title)}
                    <Typography sx={{ mt: 1 }} fontWeight={600}>
                      {w.title}
                    </Typography>
                  </Box>
                </Link>
              </motion.div>
            ))}
          </Box>
        </Container>

        {/* ---------- DIVIDER ---------- */}
        <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
          <Divider sx={{ width: '70%', borderColor: 'white', borderWidth: 1 }} />
        </Box>

        {/* ---------- WORKSHOP CONTENT ---------- */}
        <Container maxWidth="lg" sx={{ py: 5 }}>
          {workshopData.map(w => (
            <Box key={w.title} id={getWorkshopId(w.title)} sx={{ mb: 14 }}>
              <Typography variant="h4" align="center" gutterBottom>
                {w.title}
              </Typography>

              <Typography align="center" sx={{ maxWidth: 900, mx: 'auto', mb: 6 }}>
                {w.description}
              </Typography>

              <Box
                sx={{
                  display: 'grid',
                  gap: 6,
                  gridTemplateColumns: { md: '1fr 1fr' },
                }}
              >
                {/* Video */}
                <Box
                  sx={{
                    position: 'relative',
                    paddingTop: '56.25%',
                    border: '3px solid white',
                    borderRadius: 2,
                  }}
                >
                  <iframe
                    src={w.videoUrl}
                    allowFullScreen
                    style={{
                      position: 'absolute',
                      inset: 0,
                      width: '100%',
                      height: '100%',
                      borderRadius: '6px',
                    }}
                  />
                </Box>

                {/* Slides */}
                {(w.slidesPdfPath || w.slidesPath) && (
                  <Box sx={{ border: '3px solid white', borderRadius: 2, p: 1 }}>
                    {w.slidesPdfPath && (
                      <Box sx={{ position: 'relative', paddingTop: '56.25%', mb: 3 }}>
                        <iframe
                          src={w.slidesPdfPath}
                          style={{
                            position: 'absolute',
                            inset: 0,
                            width: '100%',
                            height: '100%',
                            border: 'none',
                            borderRadius: '6px',
                          }}
                        />
                      </Box>
                    )}

                    {w.slidesPath && (
                      <Box textAlign="center">
                        <Button
                          variant="contained"
                          href={w.slidesPath}
                          startIcon={<DownloadIcon />}
                        >
                          Download Slides
                        </Button>
                      </Box>
                    )}
                  </Box>
                )}
              </Box>
            </Box>
          ))}
        </Container>
      </Box>
    </ThemeProvider>
  );
}
