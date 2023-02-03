import React, { useState, useContext, useEffect } from 'react'
import logo from '../images/logo2.png'
import styled from 'styled-components'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import LinearProgress from '@mui/material/LinearProgress'
import Alert from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import GoogleIcon from '@mui/icons-material/Google'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

import { CustomRoomTable } from './CustomRoomTable'
import { CreateRoomForm } from './CreateRoomForm'
import { useAppSelector } from '../hooks'

import phaserGame from '../PhaserGame'
import Bootstrap from '../scenes/Bootstrap'
import { ButtonBase } from '@mui/material'

import { AuthContext } from '../context/authContext'
const Backdrop = styled.div`
  font-family: 'Light';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  gap: 60px;
  align-items: center;
`
const BoxModal = styled.div`
  align-items: center;
  z-index: 70;
`
const Wrapper = styled.div`
  background: #222639;
  border-radius: 16px;
  padding: 36px 60px;
  box-shadow: 0px 0px 5px #0000006f;
`

const CustomRoomWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;

  .tip {
    font-size: 18px;
  }
`

const TitleWrapper = styled.div`
  display: grid;
  width: 100%;
  .back-button {
    margin-right: 100px;
    grid-column: 1;
    grid-row: 1;
    justify-self: start;
    align-self: center;
  }

  h1 {
    padding-left: 25px;
    grid-column: 1;
    grid-row: 1;
    justify-self: center;
    align-self: center;
  }
`

const Title = styled.h1`
  font-size: 18px;
  color: #eee;
  text-align: center;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 20px 0;
  align-items: center;
  justify-content: center;

  img {
    border-radius: 8px;
    height: 120px;
  }
`

const ProgressBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    color: #33ac96;
  }
`

const ProgressBar = styled(LinearProgress)`
  width: 360px;
`

export default function RoomSelectionDialog() {
  const { status, userId, handleLogOut, displayName, email, photoURL, handleLoginWithGoogle } =
    useContext(AuthContext)
  const [showCustomRoom, setShowCustomRoom] = useState(false)
  const [showCreateRoomForm, setShowCreateRoomForm] = useState(false)
  const [showSnackbar, setShowSnackbar] = useState(false)
  const lobbyJoined = useAppSelector((state) => state.room.lobbyJoined)
  const handleConnect = () => {
    if (lobbyJoined) {
      const bootstrap = phaserGame.scene.keys.bootstrap as Bootstrap
      bootstrap.network
        .joinOrCreatePublic()
        .then(() => bootstrap.launchGame())
        .catch((error) => console.error(error))
    } else {
      setShowSnackbar(true)
    }
  }
  useEffect(() => {
    console.log(status)
    if (status === 'authenticated' && !userId == null) {
      lobbyJoined ? setShowCustomRoom(true) : setShowSnackbar(true)
    }
  }, [status])

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={showSnackbar}
        autoHideDuration={3000}
        onClose={() => {
          setShowSnackbar(false)
        }}
      >
        <Alert
          severity="error"
          variant="outlined"
          // overwrites the dark theme on render
          style={{ background: '#fdeded', color: '#7d4747' }}
        >
          Trying to connect to server, please try again!
        </Alert>
      </Snackbar>

      <Backdrop>
        <Wrapper>
          {showCreateRoomForm ? (
            <CustomRoomWrapper>
              <TitleWrapper>
                <IconButton className="back-button" onClick={() => setShowCreateRoomForm(false)}>
                  <ArrowBackIcon />
                </IconButton>
                <Title>Coba kita cerita dulu</Title>
              </TitleWrapper>
              <CreateRoomForm />
            </CustomRoomWrapper>
          ) : showCustomRoom ? (
            <>
              <CustomRoomWrapper>
                <TitleWrapper>
                  <IconButton className="back-button" onClick={() => setShowCustomRoom(false)}>
                    <ArrowBackIcon />
                  </IconButton>
                  <Title>
                    Selamat Datang di dunia Enterpreneur
                    <Tooltip title="silahkan masuk ke dunia bisnis anda sendiri" placement="top">
                      <IconButton>
                        <HelpOutlineIcon className="tip" />
                      </IconButton>
                    </Tooltip>
                  </Title>
                </TitleWrapper>
                <CustomRoomTable />
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => setShowCreateRoomForm(true)}
                >
                  Buat BisnisMu sekarang
                </Button>
              </CustomRoomWrapper>
            </>
          ) : (
            <>
              {/* <Title>Welcome to SkyOffice</Title> */}
              <Content>
                <img src={logo} alt="logo" width={500} />
                {/* <Button variant="contained" color="secondary" onClick={handleConnect}>
                  Enter into your startup
                </Button> */}
                {status === 'authenticated' ? (
                  <ButtonBase
                    sx={{
                      background: '#538e22',
                      paddingY:2,
                      paddingX: 5,
                      borderRadius: 10,
                      color: 'white',
                      gap: 1,
                      fontFamily: 'light',
                    }}
                    onClick={() =>
                      userId && (lobbyJoined ? setShowCustomRoom(true) : setShowSnackbar(true))
                    }
                  >
                    <PlayCircleOutlineIcon/>
                    Mulai
                  </ButtonBase>
                ) : (
                  <ButtonBase
                    sx={{
                      background: '#538e22',
                      padding: 2,
                      borderRadius: 10,
                      color: 'white',
                      gap: 1,
                      fontFamily: 'light',
                    }}
                    onClick={handleLoginWithGoogle}
                  >
                    <GoogleIcon />
                    Masuk dengan Google
                  </ButtonBase>
                )}
              </Content>
            </>
          )}
        </Wrapper>
        {!lobbyJoined && (
          <ProgressBarWrapper>
            <h3> Connecting to server...</h3>
            <ProgressBar color="secondary" />
          </ProgressBarWrapper>
        )}
      </Backdrop>
    </>
  )
}
