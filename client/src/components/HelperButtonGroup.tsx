import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import CloseIcon from '@mui/icons-material/Close'
import DarkModeTwoToneIcon from '@mui/icons-material/DarkModeTwoTone'
import DashboardTwoToneIcon from '@mui/icons-material/DashboardTwoTone'
import LightbulbIcon from '@mui/icons-material/Lightbulb'
import LightModeTwoToneIcon from '@mui/icons-material/LightModeTwoTone'
import MusicNoteTwoToneIcon from '@mui/icons-material/MusicNoteTwoTone'
import MusicOffTwoToneIcon from '@mui/icons-material/MusicOffTwoTone'
import TimerTwoToneIcon from '@mui/icons-material/TimerTwoTone'
import Avatar from '@mui/material/Avatar'
import Fab from '@mui/material/Fab'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import { useState } from 'react'
import styled from 'styled-components'

import { BackgroundMode } from '../../../types/BackgroundMode'
import { useAppDispatch, useAppSelector } from '../hooks'
import { toggleBackgroundMode } from '../stores/UserStore'
import { getAvatarString, getColorByString } from '../util'
import CountdownComponent from './CountdownComponent/CountdownComponent'
import MusikPlayer from './MusikPlayer'

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
  const [countdown, setCountdown] = useState(false)
  const [showControlGuide, setShowControlGuide] = useState(false)
  const [showRoomInfo, setShowRoomInfo] = useState(false)
  const backgroundMode = useAppSelector((state) => state.user.backgroundMode)
  const roomJoined = useAppSelector((state) => state.room.roomJoined)
  const roomId = useAppSelector((state) => state.room.roomId)
  const roomName = useAppSelector((state) => state.room.roomName)
  const roomDescription = useAppSelector((state) => state.room.roomDescription)
  const dispatch = useAppDispatch()

  return (
    <Backdrop>
      <div className="wrapper-group">
        {showRoomInfo && (
          <Wrapper>
            <IconButton className="close" onClick={() => setShowRoomInfo(false)} size="small">
              <CloseIcon />
            </IconButton>
            <RoomName>
              <Avatar style={{ background: getColorByString(roomName) }}>
                {getAvatarString(roomName)}
              </Avatar>
              <h3>{roomName}</h3>
            </RoomName>
            <RoomDescription>
              <ArrowRightIcon /> ID: {roomId}
            </RoomDescription>
            <RoomDescription>
              <ArrowRightIcon /> Description: {roomDescription}
            </RoomDescription>
            <p className="tip">
              <LightbulbIcon />
              Shareable link coming up 😄
            </p>
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
            <IconButton
              className="close"
              onClick={() => setCountdown(!countdown)}
              size="small"
            ></IconButton>
            <CountdownComponent />
          </Wrapper>
        )}
      </div>
      <ButtonGroup>
        <Tooltip title="Switch Background Theme">
          <StyledFab size="small" onClick={() => dispatch(toggleBackgroundMode())}>
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
          <Tooltip title="Timer Countdown">
            <StyledFab
              size="medium"
              onClick={() => {
                setCountdown(!countdown)
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
              }}
            >
              {showControlGuide ? <MusicNoteTwoToneIcon /> : <MusicOffTwoToneIcon />}
            </StyledFab>
          </Tooltip>
          <Tooltip title="Dashboard">
            <StyledFab
              sx={{ width: 86, height: 86 }}
              onClick={() => {
                setShowRoomInfo(!showRoomInfo)
                setShowControlGuide(false)
              }}
            >
              <Avatar
                sx={{ width: 84, height: 84 }}
                style={{ background: getColorByString(roomName) }}
              >
                <DashboardTwoToneIcon sx={{ width: 34, height: 34 }} />
              </Avatar>
            </StyledFab>
          </Tooltip>
        </>
      )}
    </Backdrop>
  )
}
