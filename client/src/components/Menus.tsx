import { useEffect, useState } from 'react'
import { useAppSelector } from '../hooks'
// import { styled } from "@mui/material/styles";
import { Alert, AlertTitle, Avatar, Card, CardMedia } from '@mui/material'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Unstable_Grid2'
import styled from 'styled-components'

import LogoAffine from '../images/AFFiNE.jpg'
import LogoCanvaClone from '../images/CanvaClone.jpg'
import dashboard from '../images/dashboard.png'
import LogoGrapejs from '../images/Grapejs.jpg'
import AvatarProfile from '../images/login/Adam_login.png'
import LogoMaker from '../images/LogoMaker.jpg'
import GridViewIcon from '@mui/icons-material/GridView'
import AppsIcon from '@mui/icons-material/Apps'
const Item = styled.div`
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
`
const Wrapper = styled.div`
  font-family: 'Light';
`

export default function Menus(props) {
  const backgroundMode = useAppSelector((state) => state.user.backgroundMode)
  const [colorMode, setColorMode] = useState('black')
  const [changeMenus, setChangeMenus] = useState<number>(0)
  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight,
  })
  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight,
    })
  }
  const handleOpenDashboard = () => {
    props.setOpenDasboard(true)
  }
  useEffect(() => {
    window.addEventListener('resize', setDimension)
    return () => {
      window.removeEventListener('resize', setDimension)
    }
  }, [screenSize])

  return (
    <>
      <Box sx={{ flexGrow: 1, pt: 16, pl: 12, pr: 12 }}>
        {changeMenus == 0 && (
          <Grid container spacing={2}>
            {screenSize.dynamicWidth > 800 && screenSize.dynamicHeight > 600 ? (
              <Grid md={4} lg={4}>
                <Item>
                  {screenSize.dynamicWidth > 1000 && (
                    <Box
                      id="Story Mode"
                      sx={{
                        fontFamily: 'light',
                        fontSize: '24px',
                        textTransform: 'uppercase',
                        fontStyle: 'bold',
                        textAlign: 'center',
                        pb: 5,
                      }}
                      color={colorMode}
                    >
                      Validate Your Business
                    </Box>
                  )}
                  <CardMedia
                    sx={{ borderRadius: 10 }}
                    className="StoryMode"
                    component="img"
                    image={dashboard}
                    alt="StoryMode"
                    onClick={() => handleOpenDashboard()}
                  />
                </Item>
              </Grid>
            ) : (
              <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                Please gunakan device dengan minimum size <strong>800px X 600 px !</strong>
              </Alert>
            )}

            {screenSize.dynamicWidth > 860 && screenSize.dynamicHeight > 600 ? (
              <Grid md={4} lg={4}>
                <Item>
                  {screenSize.dynamicWidth > 1000 && (
                    <Box
                      id="Apps"
                      sx={{
                        fontSize: '24px',
                        textTransform: 'uppercase',
                        fontStyle: 'bold',
                        textAlign: 'center',
                        pb: 4,
                        fontFamily: 'light',
                      }}
                      color={colorMode}
                    >
                      Apps
                    </Box>
                  )}
                  <Grid
                    container
                    rowSpacing={{ xs: 1, sm: 2, md: 3, lg: 4 }}
                    columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 4 }}
                  >
                    <Grid xs={4} md={6}>
                      <Box>
                        <CardMedia
                          className="BoxApps"
                          sx={{
                            width: '100',
                            borderRadius: 10,
                          }}
                          component="img"
                          image={LogoAffine}
                          alt="StoryMode"
                        />
                        <Box
                          id="Apps"
                          sx={{
                            fontSize: '14px',
                            textAlign: 'center',
                            py: 1,
                          }}
                          color={colorMode}
                        >
                          WhiteBoard
                        </Box>
                      </Box>
                    </Grid>
                    <Grid xs={4} md={6}>
                      <Box>
                        <CardMedia
                          className="BoxApps"
                          sx={{
                            width: '100',
                            borderRadius: 10,
                          }}
                          component="img"
                          image={LogoCanvaClone}
                          alt="StoryMode"
                        />
                        <Box
                          id="Apps"
                          sx={{
                            fontSize: '14px',
                            textAlign: 'center',
                            py: 1,
                          }}
                          color={colorMode}
                        >
                          Graphic Design
                        </Box>
                      </Box>
                    </Grid>
                    <Grid xs={4} md={6}>
                      <Box>
                        <CardMedia
                          className="BoxApps"
                          sx={{
                            width: '100',
                            borderRadius: 10,
                          }}
                          component="img"
                          image={LogoGrapejs}
                          alt="StoryMode"
                        />
                        <Box
                          id="Apps"
                          sx={{
                            fontSize: '14px',
                            textAlign: 'center',
                            py: 1,
                          }}
                          color={colorMode}
                        >
                          Page Builder
                        </Box>
                      </Box>
                    </Grid>
                    <Grid xs={4} md={6}>
                      <Box>
                        <CardMedia
                          className="BoxApps"
                          sx={{
                            width: '100',
                            borderRadius: 10,
                          }}
                          component="img"
                          image={LogoMaker}
                          alt="StoryMode"
                        />
                        <Box
                          id="Apps"
                          sx={{
                            fontSize: '14px',
                            textAlign: 'center',
                            py: 1,
                          }}
                          color={colorMode}
                        >
                          Logo Generator
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </Item>
              </Grid>
            ) : (
              <></>
            )}
            {screenSize.dynamicWidth > 800 && (
              <Grid md={4} lg={4}>
                <Item>
                  {screenSize.dynamicWidth > 1000 && (
                    <Box
                      id="category-a"
                      sx={{
                        fontSize: '24px',
                        textTransform: 'uppercase',
                        fontStyle: 'bold',
                        textAlign: 'center',
                        pb: 3,
                        fontFamily: 'light',
                      }}
                      color={colorMode}
                    >
                      Unlock World
                    </Box>
                  )}
                  <Box
                    component="ul"
                    aria-labelledby="category-b"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Card
                      sx={{
                        display: 'flex',
                        background: '#b49c76',
                        p: 2,
                        alignItems: 'center',
                        borderRadius: 10,
                        gap: 2,
                      }}
                    >
                      {screenSize.dynamicWidth > 1000 && (
                        <Avatar
                          alt="Remy Sharp"
                          src="https://www.anakbangsabisa.org/catalystlab/images/CatalystProgram-EkosistemyangTerintegrasi.png"
                          sx={{ width: '30%', height: '80%' }}
                        />
                      )}
                      <Box>
                        <Box
                          sx={{
                            fontSize: 'auto',
                            textTransform: 'uppercase',
                            fontStyle: 'bold',
                            textAlign: 'center',
                            pb: 1,
                          }}
                          color={colorMode}
                        >
                          Catalyst Changemakers Lab
                        </Box>
                        <Box
                          sx={{
                            p: 2,
                          }}
                        >
                          <Box
                            sx={{
                              p: 2,
                              background: '#252321',
                              borderRadius: '50px',
                              textAlign: 'center',
                            }}
                            onClick={() => {
                              console.log('Open Dashboard')
                            }}
                          >
                            Coming Soon
                          </Box>
                        </Box>
                      </Box>
                    </Card>
                    <Card
                      sx={{
                        display: 'flex',
                        background: '#ae694e',
                        p: 2,
                        alignItems: 'center',
                        marginTop: 5,
                        borderRadius: 10,
                        gap: 2,
                      }}
                    >
                      {screenSize.dynamicWidth > 1000 && (
                        <Avatar
                          alt="Remy Sharp"
                          src={AvatarProfile}
                          sx={{ width: '30%', height: '90%' }}
                        />
                      )}
                      <Box>
                        <Box
                          sx={{
                            fontSize: 'auto',
                            textTransform: 'uppercase',
                            fontStyle: 'bold',
                            textAlign: 'center',
                            paddingTop: 'auto',
                          }}
                          color="#ffffff"
                        >
                          Mentoring & Accelerator program
                        </Box>
                        <Box
                          sx={{
                            p: 2,
                          }}
                        >
                          <Box
                            sx={{
                              p: 2,
                              background: '#d41a41',
                              borderRadius: '50px',
                              textAlign: 'center',
                            }}
                            onClick={() => {
                              console.log('Open Dashboard')
                            }}
                          >
                            Coming Soon
                          </Box>
                        </Box>
                      </Box>
                    </Card>
                  </Box>
                </Item>
              </Grid>
            )}
          </Grid>
        )}
        {changeMenus == 1 && (
          <Grid container spacing={2}>
            {screenSize.dynamicWidth > 860 && screenSize.dynamicHeight > 600 ? (
              <Grid md={6} lg={4}>
                <Item>
                  {screenSize.dynamicWidth > 1000 && (
                    <Box
                      id="Apps"
                      sx={{
                        fontSize: '24px',
                        textTransform: 'uppercase',
                        fontStyle: 'bold',
                        textAlign: 'center',
                        pb: 4,
                        fontFamily: 'light',
                      }}
                      color={colorMode}
                    >
                      Apps
                    </Box>
                  )}
                  <Grid
                    container
                    rowSpacing={{ xs: 1, sm: 2, md: 3, lg: 4 }}
                    columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 4 }}
                  >
                    <Grid xs={5} md={6}>
                      <Box>
                        <CardMedia
                          className="BoxApps"
                          sx={{
                            width: '100',
                            borderRadius: 10,
                          }}
                          component="img"
                          image={LogoAffine}
                          alt="StoryMode"
                        />
                        <Box
                          id="Apps"
                          sx={{
                            fontSize: '14px',
                            textAlign: 'center',
                            py: 1,
                          }}
                          color={colorMode}
                        >
                          WhiteBoard
                        </Box>
                      </Box>
                    </Grid>
                    <Grid xs={4} md={6}>
                      <Box>
                        <CardMedia
                          className="BoxApps"
                          sx={{
                            width: '100',
                            borderRadius: 10,
                          }}
                          component="img"
                          image={LogoCanvaClone}
                          alt="StoryMode"
                        />
                        <Box
                          id="Apps"
                          sx={{
                            fontSize: '14px',
                            textAlign: 'center',
                            py: 1,
                          }}
                          color={colorMode}
                        >
                          Graphic Design
                        </Box>
                      </Box>
                    </Grid>
                    <Grid xs={4} md={6}>
                      <Box>
                        <CardMedia
                          className="BoxApps"
                          sx={{
                            width: '100',
                            borderRadius: 10,
                          }}
                          component="img"
                          image={LogoGrapejs}
                          alt="StoryMode"
                        />
                        <Box
                          id="Apps"
                          sx={{
                            fontSize: '14px',
                            textAlign: 'center',
                            py: 1,
                          }}
                          color={colorMode}
                        >
                          Page Builder
                        </Box>
                      </Box>
                    </Grid>
                    <Grid xs={4} md={6}>
                      <Box>
                        <CardMedia
                          className="BoxApps"
                          sx={{
                            width: '100',
                            borderRadius: 10,
                          }}
                          component="img"
                          image={LogoMaker}
                          alt="StoryMode"
                        />
                        <Box
                          id="Apps"
                          sx={{
                            fontSize: '14px',
                            textAlign: 'center',
                            py: 1,
                          }}
                          color={colorMode}
                        >
                          Logo Generator
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </Item>
              </Grid>
            ) : (
              <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                Please gunakan device dengan minimum size <strong>800px X 600 px !</strong>
              </Alert>
            )}
            {screenSize.dynamicWidth > 800 && (
              <Grid md={6} lg={4}>
                <Item>
                  {screenSize.dynamicWidth > 1000 && (
                    <Box
                      id="category-a"
                      sx={{
                        fontSize: '24px',
                        textTransform: 'uppercase',
                        fontStyle: 'bold',
                        textAlign: 'center',
                        pb: 3,
                        fontFamily: 'light',
                      }}
                      color={colorMode}
                    >
                      Unlock World
                    </Box>
                  )}
                  <Box
                    component="ul"
                    aria-labelledby="category-b"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Card
                      sx={{
                        display: 'flex',
                        background: '#b49c76',
                        p: 2,
                        alignItems: 'center',
                        borderRadius: 10,
                        gap: 2,
                      }}
                    >
                      {screenSize.dynamicWidth > 1000 && (
                        <Avatar
                          alt="Remy Sharp"
                          src="https://www.anakbangsabisa.org/catalystlab/images/CatalystProgram-EkosistemyangTerintegrasi.png"
                          sx={{ width: '30%', height: '80%' }}
                        />
                      )}
                      <Box>
                        <Box
                          sx={{
                            fontSize: 'auto',
                            textTransform: 'uppercase',
                            fontStyle: 'bold',
                            textAlign: 'center',
                            pb: 1,
                          }}
                          color={colorMode}
                        >
                          Catalyst Changemakers Lab
                        </Box>
                        <Box
                          sx={{
                            p: 2,
                          }}
                        >
                          <Box
                            sx={{
                              p: 2,
                              background: '#252321',
                              borderRadius: '50px',
                              textAlign: 'center',
                            }}
                            onClick={() => {
                              console.log('Open Dashboard')
                            }}
                          >
                            Coming Soon
                          </Box>
                        </Box>
                      </Box>
                    </Card>
                    <Card
                      sx={{
                        display: 'flex',
                        background: '#ae694e',
                        p: 2,
                        alignItems: 'center',
                        marginTop: 5,
                        borderRadius: 10,
                        gap: 2,
                      }}
                    >
                      {screenSize.dynamicWidth > 1000 && (
                        <Avatar
                          alt="Remy Sharp"
                          src={AvatarProfile}
                          sx={{ width: '30%', height: '90%' }}
                        />
                      )}
                      <Box>
                        <Box
                          sx={{
                            fontSize: 'auto',
                            textTransform: 'uppercase',
                            fontStyle: 'bold',
                            textAlign: 'center',
                            paddingTop: 'auto',
                          }}
                          color="#ffffff"
                        >
                          Mentoring & Accelerator program
                        </Box>
                        <Box
                          sx={{
                            p: 2,
                          }}
                        >
                          <Box
                            sx={{
                              p: 2,
                              background: '#d41a41',
                              borderRadius: '50px',
                              textAlign: 'center',
                            }}
                            onClick={() => {
                              console.log('Open Dashboard')
                            }}
                          >
                            Coming Soon
                          </Box>
                        </Box>
                      </Box>
                    </Card>
                  </Box>
                </Item>
              </Grid>
            )}
          </Grid>
        )}
      </Box>
      <Box
        sx={{
          position: 'absolute',
          left: '50%',
          bottom: 20,
          transform: 'translate(-50%, -50%)',
          margin: '0 auto',
          justifyContent: 'center',
          alignItems:'center',
          display: 'flex',
        }}
      >
        {changeMenus == 0 ? (
          <AppsIcon sx={{width:36, height:36}} onClick={() => setChangeMenus(0)} />
        ) : (
          <AppsIcon sx={{color:'#e7eaed'}} onClick={() => setChangeMenus(0)} />
        )}
        {changeMenus == 1 ? (
          <AppsIcon sx={{width:36, height:36}} onClick={() => setChangeMenus(1)} />
        ) : (
          <AppsIcon sx={{color:'#e7eaed'}} onClick={() => setChangeMenus(1)} />
        )}
      </Box>
    </>
  )
}
