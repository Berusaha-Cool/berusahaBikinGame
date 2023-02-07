import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import CloseIcon from '@mui/icons-material/Close'
import DarkModeTwoToneIcon from '@mui/icons-material/DarkModeTwoTone'
import LightModeTwoToneIcon from '@mui/icons-material/LightModeTwoTone'
import MusicNoteTwoToneIcon from '@mui/icons-material/MusicNoteTwoTone'
import MusicOffTwoToneIcon from '@mui/icons-material/MusicOffTwoTone'
import TimerTwoToneIcon from '@mui/icons-material/TimerTwoTone'
import GraphicEqIcon from '@mui/icons-material/GraphicEq'
import Avatar from '@mui/material/Avatar'
import Fab from '@mui/material/Fab'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import { useContext, useState, useEffect } from 'react'
import styled from 'styled-components'

import LogoutIcon from '@mui/icons-material/Logout'
import { BackgroundMode } from '../../../types/BackgroundMode'
import { useAppDispatch, useAppSelector } from '../hooks'
import { toggleBackgroundMode } from '../stores/UserStore'
import { getColorByString } from '../util'
import CountdownComponent from './CountdownComponent/CountdownComponent'
import MusikPlayer from './MusikPlayer'

import { ButtonBase } from '@mui/material'
import { AuthContext } from '../context/authContext'
import MoodSfx from './MoodSfx'

import useSound from 'use-sound'
import switchSfx from '../sounds/button-click-71316.mp3'

const Backdrop = styled.div`
  position: fixed;
  display: flex;
  gap: 10px;
  bottom: 16px;
  right: 16px;
  align-items: flex-end;

  .wrapper-group {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`

const Wrapper = styled.div`
  position: relative;
  font-size: 16px;
  color: #eee;
  background: #222639;
  box-shadow: 0px 0px 5px #0000006f;
  border-radius: 16px;
  padding: 15px 35px 15px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .close {
    position: absolute;
    top: 15px;
    right: 15px;
  }

  .tip {
    margin-left: 12px;
  }
`

const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;
`

const Title = styled.h3`
  font-size: 24px;
  color: #eee;
  text-align: center;
`

const RoomName = styled.div`
  margin: 10px 20px;
  max-width: 460px;
  max-height: 150px;
  overflow-wrap: anywhere;
  overflow-y: auto;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;

  h3 {
    font-size: 24px;
    color: #eee;
  }
`

const RoomDescription = styled.div`
  margin: 0 20px;
  max-width: 460px;
  max-height: 150px;
  overflow-wrap: anywhere;
  overflow-y: auto;
  font-size: 16px;
  color: #c2c2c2;
  display: flex;
  justify-content: center;
`

const StyledFab = styled(Fab)<{ target?: string }>`
  &:hover {
    color: #1ea2df;
  }
`

export default function HelperButtonGroup() {
  const { status, userId, handleLogOut, displayName, photoURL } = useContext(AuthContext)
  const [countdown, setCountdown] = useState(false)
  const [showControlGuide, setShowControlGuide] = useState(false)
  const [showRoomInfo, setShowRoomInfo] = useState(false)
  const [moodRoom, setMoodRoom] = useState(false)

  const backgroundMode = useAppSelector((state) => state.user.backgroundMode)
  const roomJoined = useAppSelector((state) => state.room.roomJoined)
  const roomId = useAppSelector((state) => state.room.roomId)
  const roomName = useAppSelector((state) => state.room.roomName)
  const roomDescription = useAppSelector((state) => state.room.roomDescription)
  const dispatch = useAppDispatch()

  const [play] = useSound(switchSfx, { volume: 0.5 })

  return (
    <Backdrop>
      <div className="wrapper-group">
        {showRoomInfo && (
          <Wrapper>
            <IconButton className="close" onClick={() => setShowRoomInfo(false)} size="small">
              <CloseIcon />
            </IconButton>
            <RoomName>
              <Avatar
                alt={displayName}
                src={photoURL}
                style={{ background: getColorByString(roomName) }}
              />
              <h3>{displayName}</h3>
            </RoomName>
            <RoomName>
              <h4>{roomName}</h4>
            </RoomName>
            <RoomDescription>
              <ArrowRightIcon /> ID: {roomId}
            </RoomDescription>
            <RoomDescription>
              <ArrowRightIcon /> Description: {roomDescription}
            </RoomDescription>
            <ButtonBase
              sx={{
                background: '#538e22',
                paddingY: 1,
                paddingX: 3,
                borderRadius: 10,
                color: 'white',
                gap: 1,
                fontFamily: 'light',
              }}
              onClick={handleLogOut}
            >
              <LogoutIcon />
              logout
            </ButtonBase>
          </Wrapper>
        )}
        {showControlGuide && (
          <Wrapper>
            <IconButton
              className="close"
              onClick={() => setShowControlGuide(!showControlGuide)}
              size="small"
            >
              <CloseIcon />
            </IconButton>
            <Title>Musik</Title>
            <MusikPlayer />
          </Wrapper>
        )}
        {countdown && (
          <Wrapper>
            <IconButton className="close" onClick={() => setCountdown(!countdown)} size="small">
              <CloseIcon />
            </IconButton>
            <CountdownComponent />
          </Wrapper>
        )}
        {moodRoom && (
          <Wrapper>
            <MoodSfx />
          </Wrapper>
        )}
      </div>
      <ButtonGroup>
        <Tooltip title="Switch Background Theme">
          <StyledFab
            size="large"
            onClick={() => {
              dispatch(toggleBackgroundMode())
              play()
            }}
          >
            {backgroundMode === BackgroundMode.DAY ? (
              <DarkModeTwoToneIcon />
            ) : (
              <LightModeTwoToneIcon />
            )}
          </StyledFab>
        </Tooltip>
      </ButtonGroup>
      {roomJoined && (
        <>
          <Tooltip title="Mood">
            <StyledFab
              size="large"
              onClick={() => {
                setMoodRoom(!moodRoom)
                play()
              }}
            >
              <GraphicEqIcon />
            </StyledFab>
          </Tooltip>
          <Tooltip title="Focus Timer">
            <StyledFab
              size="large"
              onClick={() => {
                setCountdown(!countdown)
                play()
              }}
            >
              <TimerTwoToneIcon />
            </StyledFab>
          </Tooltip>
          <Tooltip title="Music">
            <StyledFab
              size="large"
              onClick={() => {
                setShowControlGuide(!showControlGuide)
                setShowRoomInfo(false)
                play()
              }}
            >
              {showControlGuide ? <MusicOffTwoToneIcon /> : <MusicNoteTwoToneIcon />}
            </StyledFab>
          </Tooltip>
          <Tooltip title="Dashboard">
            <StyledFab
              sx={{ width: 86, height: 86 }}
              onClick={() => {
                setShowRoomInfo(!showRoomInfo)
                play()
              }}
            >
              <Avatar
                alt={displayName}
                src={photoURL}
                sx={{ width: 84, height: 84 }}
                style={{ background: getColorByString(roomName) }}
              />
            </StyledFab>
          </Tooltip>
        </>
      )}
    </Backdrop>
  )
}
