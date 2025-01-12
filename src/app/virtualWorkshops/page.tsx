'use client';

import React from 'react';
import { Container, Typography, Box, Card, CardContent, Button, List, ListItem, ListItemText, Link } from '@mui/material';
import { workshopData } from './workshopData';
import DownloadIcon from '@mui/icons-material/Download';
import Script from 'next/script'
import { motion, AnimatePresence } from "framer-motion"
import { Lora } from 'next/font/google'
const play = Lora({ subsets: ['latin'], display: "swap" })

const VirtualWorkshop: React.FC = () => {
  // Create workshop IDs for linking
  const getWorkshopId = (title: string) => title.toLowerCase().replace(/[^a-z0-9]+/g, '-');

  return (
    <div>
    <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-RQ1XF1G76X`}
      />

      <Script strategy="lazyOnload" id="main-script">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-RQ1XF1G76X', {
          page_path: window.location.pathname,
          });
      `}
      </Script>
      
    <div className="dark:bg-black bg-slate-200 w-full">
      <div className="text-white bg-black p-12 w-full">
        <AnimatePresence>
        <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:1}}
            className="text-3xl font-bold flex justify-center items-center"
          >
              <div className="flex justify-center text-center lg:w-1/3 lg:mx-12">
              <h1 className={`border-8 border-lightOrange lg:p-8 tracking-wide text-center text-4xl lg:text-6xl ${play.className} drop-shadow-titleShadow`}>Virtual Workshops</h1>
              </div>
        </motion.div>
        </AnimatePresence>
      </div>
    </div>
    <Container maxWidth="lg" sx={{ py: 2 }}>
      {/* Table of Contents */}
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h4" align="center" gutterBottom>
            Table of Contents
          </Typography>
          <List>
            {workshopData.map((workshop, index) => (
              <ListItem key={index} sx={{ py: 0.5 }}>
                <ListItemText>
                  <Link href={`#${getWorkshopId(workshop.title)}`} underline="hover" color="primary">
                    {workshop.title}
                  </Link>
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>

      {/* Workshop Sections */}
      {workshopData.map((workshop, index) => (
        <Box 
          key={index} 
          sx={{ mb: 8 }} 
          id={getWorkshopId(workshop.title)}
        >
          <Typography variant="h4" component="h2" gutterBottom>
            {workshop.title}
          </Typography>
          
          <Box sx={{ mb: 4 }}>
            <Typography variant="body1" paragraph>
              {workshop.description}
            </Typography>
          </Box>

          <Box sx={{ display: 'grid', gap: 4, gridTemplateColumns: { md: '1fr 1fr' } }}>
            {/* Video Section */}
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Workshop Recording
                </Typography>
                <Box sx={{ position: 'relative', paddingTop: '56.25%' }}>
                  <iframe
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                    }}
                    src={workshop.videoUrl}
                    title="Workshop Video"
                    allowFullScreen
                  />
                </Box>
              </CardContent>
            </Card>

            {/* Slides Section */}
            {(workshop.slidesPdfPath || workshop.slidesPath) && (
              <Card>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    Workshop Slides
                  </Typography>
                  {workshop.slidesPdfPath && (
                    <Box sx={{ position: 'relative', paddingTop: '56.25%', mb: 2 }}>
                      <iframe
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          border: 'none'
                        }}
                        src={workshop.slidesPdfPath}
                        title="Slides Preview"
                      />
                    </Box>
                  )}
                  {workshop.slidesPath && (
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                      <Button 
                        variant="contained" 
                        component="a"
                        href={workshop.slidesPath}
                        startIcon={<DownloadIcon />}
                      >
                        Download PowerPoint
                      </Button>
                    </Box>
                  )}
                </CardContent>
              </Card>
            )}
          </Box>
        </Box>
      ))}
    </Container>
    </div>
  );
};

export default VirtualWorkshop; 