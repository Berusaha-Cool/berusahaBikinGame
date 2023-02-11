import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'

import { useAppSelector, useAppDispatch } from '../hooks'
import { closeComputerDialog } from '../stores/ComputerStore'

import Video from './Video'
import Dashboard from './Dashboard/Dasboard'
import Menus from './Menus'
import { Box } from '@mui/system'

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: 16px 16px 16px 16px;
`
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(110deg, #ef8669 60%, #f8ad47 60%);
  // background: rgb(73,116,154);
  // background: radial-gradient(circle, rgba(73,116,154,1) 0%, rgba(64,92,129,1) 55%, rgba(44,68,100,1) 92%);
  border-radius: 16px;
  padding: 16px;
  color: #eee;
  position: relative;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 5px #0000006f;

  .close {
    color: #0000006f;
    position: absolute;
    top: 16px;
    left: 16px;
    background: #f9615f;
  }
`

const VideoGrid = styled.div`
  flex: 1;
  min-height: 0;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(40%, 1fr));

  .video-container {
    position: relative;
    background: black;
    border-radius: 8px;
    overflow: hidden;

    video {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      min-width: 0;
      min-height: 0;
      object-fit: contain;
    }

    .player-name {
      position: absolute;
      bottom: 16px;
      left: 16px;
      color: #fff;
      overflow: hidden;
      text-overflow: ellipsis;
      text-shadow: 0 1px 2px rgb(0 0 0 / 60%), 0 0 2px rgb(0 0 0 / 30%);
      white-space: nowrap;
    }
  }
`

function VideoContainer({ playerName, stream }) {
  return (
    <div className="video-container">
      <Video srcObject={stream} autoPlay></Video>
      {playerName && <div className="player-name">{playerName}</div>}
    </div>
  )
}

export default function ComputerDialog() {
  const [openDashboard, setOpenDasboard] = useState<any>(false)

  const dispatch = useAppDispatch()
  const playerNameMap = useAppSelector((state) => state.user.playerNameMap)
  const shareScreenManager = useAppSelector((state) => state.computer.shareScreenManager)
  const myStream = useAppSelector((state) => state.computer.myStream)
  const myComputerID = useAppSelector((state) => state.computer.computerId)
  const peerStreams = useAppSelector((state) => state.computer.peerStreams)

  console.log(myComputerID)

  return (
    <Backdrop>
      <Wrapper>
        <Box sx={{ display: 'flex' }}>
          <IconButton
            aria-label="close dialog"
            sx={{
              margin: '6px',
              background: '#F9615F',
              opacity: 0.9,
              color: 'white',
              position: 'relative',
              width: '24px',
              height: '24px',
            }}
            onClick={() => dispatch(closeComputerDialog())}
          >
            <CloseIcon />
          </IconButton>
          <IconButton
            aria-label="close dialog"
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
          <IconButton
            aria-label="close dialog"
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
        {!shareScreenManager?.myStream ? (
          <>{!openDashboard ? <Menus setOpenDasboard={setOpenDasboard} /> : <Dashboard />}</>
        ) : (
          <VideoGrid>
            {myStream && <VideoContainer stream={myStream} playerName="You" />}

            {[...peerStreams.entries()].map(([id, { stream }]) => {
              const playerName = playerNameMap.get(id)
              return <VideoContainer key={id} playerName={playerName} stream={stream} />
            })}
          </VideoGrid>
        )}
        <div className="toolbar">
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              if (shareScreenManager?.myStream) {
                shareScreenManager?.stopScreenShare()
              } else {
                shareScreenManager?.startScreenShare()
              }
            }}
          >
            {shareScreenManager?.myStream ? 'Stop sharing' : 'Share Screen'}
          </Button>
        </div>
      </Wrapper>
    </Backdrop>
  )
}
