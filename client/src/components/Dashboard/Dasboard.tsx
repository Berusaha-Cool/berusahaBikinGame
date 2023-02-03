import ButtonBase from '@mui/material/ButtonBase'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { useState } from 'react'

import CLoseIcon from '@mui/icons-material/Close'
import EditIcon from '@mui/icons-material/Edit'

import { Avatar, Box } from '@mui/material'
import { Container } from '@mui/system'
import AvatarBusiness from '../../images/kukang.png'
import ExportDial from './ExportDial'

import DetailCard from './DetailCard'
import PageStageBusiness from './PageStageBusiness'

export default function Dashboard() {
  const [detailStageId, setDetailStageId] = useState<any>(0)

  console.log(detailStageId)
  const db = [
    {
      user: {
        name: 'user',
        email: '',
        password: '',
        initialState: {
          backgroundMode: '',
          sessionId: '',
          videoConnected: false,
          loggedIn: false,
          playerNameMap: new Map<string, string>(),
        },
      },
      computer: {},
      whiteboard: {},
      calender: {},
      chat: {},
      room: {},
      business: {
        businessName: 'Kukang EV',
        desc: 'Misi Kami adalah memungkinkan transportasi yang lebih berkelanjutan dengan menciptakan teknologi kendaraan listrik masa depan',
        logo: '',
        link: '',
        bootstrapping: [
          {
            status: true,
            id: 0,
            header: 'Validate the Idea',
            desc: "Idea validation is the process of gathering evidence around ideas through experimentation to make fast, informed and de-risked decisions. It's a process that starts from an idea and typically ends with a paying customer.",
            progess: '70',
            validatetheidea: {
              howtochooseyourniche: '',
              howtoidentifyaproblem: '',
              howtofindasolution: '',
              howtoiterateonyouridea: '',
              howtovalidateyouridea: '',
            },
          },
          {
            status: true,
            id: 1,
            header: 'Build The Product',
            desc: 'Product Build means a Mass Production manufacturing build for a specified number of Product Units designated in a Purchase Order. A Product Build is not complete until all Product Units specified in the Purchase Order are complete..',
            progess: '5',
            buildtheproduct: {
              howtoknowyourtargetperfectly: '',
              howtodefineyourperfectbusinessmodel: '',
              howtochoosetherightnocodestack: '',
              howtobuildmvpquickly: '',
              howtowritealandingpagethatconverts: '',
            },
          },
          {
            status: true,
            id: 2,
            header: 'Distribution',
            desc: 'Product Build means a Mass Production manufacturing build for a specified number of Product Units designated in a Purchase Order. A Product Build is not complete until all Product Units specified in the Purchase Order are complete..',
            progess: '0',
            distribution: {
              howdoyoufindanaudiencethatbuys: '',
              howtobuildamaudience: '',
              howtoattractclient: '',
              howtobuildawinninglaunchstrategy: '',
              howtodiversityyouracquisitionchannels: '',
            },
          },
        ],
        preseed: [
          {
            status: true,
            id: 0,
            header: 'Market Overview',
            desc: "Idea validation is the process of gathering evidence around ideas through experimentation to make fast, informed and de-risked decisions. It's a process that starts from an idea and typically ends with a paying customer.",
            progess: '70',
            validatetheidea: {
              howtochooseyourniche: '',
              howtoidentifyaproblem: '',
              howtofindasolution: '',
              howtoiterateonyouridea: '',
              howtovalidateyouridea: '',
            },
          },
        ],
        seed: [],
        seriesa: [],
        seriesb: [],
      },
    },
  ]
  return (
    <Container>
      <Grid container direction="row">
        <Box sx={{ height: '100vh', width: '35%' }}>
          <Avatar
            alt="avatar "
            src={AvatarBusiness}
            sx={{
              position: 'static',
              width: '200px',
              height: '200px',
              marginX: 'auto',
              marginTop: 9,
            }}
          />
          <Box
            sx={{
              position: 'relative',
              minWidth: 190,
              width: 'auto',
              height: 28,
              textAlign: 'center',
              marginX: 'auto',
              top: 40,
            }}
          >
            <Typography
              sx={{
                fontFamily: 'light',
                fontStyle: 'normal',
                fontWeight: '700px',
                fontSize: '28px',
                lineHeight: '20px',
                /* or 56% */
                alignItems: 'center',
                letterSpacing: '-0.5px',
                color: '#FFFFFF',
                textShadow: '1px 1px 5px black',
              }}
            >
              {db[0].business.businessName}
              <ButtonBase
                sx={{
                  marginLeft: 2,
                  width: '34px',
                  height: '35px',
                  background: '#58A6FF',
                  borderRadius: 2,
                  boxShadow: '2px 2px 5px black',
                }}
              >
                <EditIcon
                  sx={{
                    width: '23px',
                    height: '23px',
                    color: '#ffffff',
                  }}
                />
              </ButtonBase>
            </Typography>
          </Box>
          <Box
            sx={{
              position: 'relative',
              height: 'auto',
              marginX: 'auto',
              top: '78px',
              background: '#3E75B5',
              boxShadow: '2px 2px 5px black',
              borderRadius: 5,
            }}
          >
            <Typography
              sx={{
                padding: 2,
                fontFamily: 'light',
                fontStyle: 'normal',
                fontWeight: '700px',
                fontSize: '12px',
                lineHeight: '20px',
                /* or 167% */

                display: 'flex',
                alignItems: 'center',
                letterSpacing: '-0.5px',

                color: 'text.secondary',
              }}
            >
              {db[0].business.desc}
            </Typography>
          </Box>
          {/* <Box sx={{marginTop:'100px',background:"#ffff"}}>
            <SubmitActivityCalendar />
          </Box> */}
        </Box>
        <Box sx={{ height: '80vh', width: '65%' }}>
          <Typography
            sx={{
              textShadow: '1px 1px 5px black',
              marginY: '40px',
              fontFamily: 'light',
              fontStyle: 'normal',
              fontWeight: '700px',
              fontSize: '34px',
              lineHeight: '20px',
              /* or 31% */

              display: 'flex',
              alignItems: 'center',
              letterSpacing: '-0.5px',

              color: ' #FFFFFF',
            }}
          >
            Validate your business idea
          </Typography>

          {detailStageId >= 0 ? (
            <>
              <Box
                sx={{
                  position: 'relative',
                  background: '#1E1E1E',
                  borderTop: '2px solid #AC9F8C',
                  borderLeft: '2px solid #AC9F8C',
                  borderRight: '2px solid #AC9F8C',
                  marginX: '10px',
                  width: '100%',
                  height: '35px',
                  borderRadius: '20px 20px 0px 0px',
                  display: 'flex',
                }}
              >
                <Avatar
                  onClick={() => setDetailStageId(-1)}
                  title="Back"
                  sx={{
                    margin: '6px',
                    background: '#F9615F',
                    opacity: 0.9,
                    color: 'white',
                    position: 'relative',
                    width: '24px',
                    height: '24px',
                  }}
                >
                  <CLoseIcon />
                </Avatar>
                <Box
                  sx={{
                    borderRadius: 100,
                    margin: '6px',
                    background: '#FDBA46',
                    opacity: 0.9,
                    color: 'white',
                    width: '24px',
                    height: '24px',
                  }}
                />
                <Box
                  sx={{
                    borderRadius: 100,
                    margin: '6px',
                    background: '#D1D1D1',
                    opacity: 0.9,
                    color: 'white',
                    width: '24px',
                    height: '24px',
                  }}
                />
              </Box>
              <Box
                sx={{
                  marginX: '10px',
                  width: '100%',
                  height: '80%',
                  background: '#13233A',
                  borderButtom: '2px solid #AC9F8C',
                  borderLeft: '2px solid #AC9F8C',
                  borderRight: '2px solid #AC9F8C',
                  borderRadius: '0px 0px 20px 20px',
                  overflow: 'scroll',
                }}
              >
                <DetailCard data={db[0].business.bootstrapping[detailStageId]} />
              </Box>
            </>
          ) : (
            <PageStageBusiness dataBusiness={db[0].business} setDetailStageId={setDetailStageId} />
          )}

          <ExportDial />
        </Box>
      </Grid>
    </Container>
  )
}
