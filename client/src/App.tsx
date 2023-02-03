import styled from 'styled-components'
import { useState, useContext } from 'react'
import { useAppSelector } from './hooks'

import CalenderDialog from './components/CalenderDialog'
import Chat from './components/Chat'
import ComputerDialog from './components/ComputerDialog'
import HelperButtonGroup from './components/HelperButtonGroup'
import LoginDialog from './components/LoginDialog'
import RoomSelectionDialog from './components/RoomSelectionDialog'
import VideoConnectionDialog from './components/VideoConnectionDialog'
import WhiteboardDialog from './components/WhiteboardDialog'
import Menus from './components/Menus'
import Dashboard from './components/Dashboard/Dasboard'
import { AuthProvider } from './context/authContext'
const Backdrop = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
`

function App() {
  const loggedIn = useAppSelector((state) => state.user.loggedIn)
  const computerDialogOpen = useAppSelector((state) => state.computer.computerDialogOpen)
  const whiteboardDialogOpen = useAppSelector((state) => state.whiteboard.whiteboardDialogOpen)
  const calenderDialogOpen = useAppSelector((state) => state.calender.calenderDialogOpen)
  const videoConnected = useAppSelector((state) => state.user.videoConnected)
  const roomJoined = useAppSelector((state) => state.room.roomJoined)
  let ui: JSX.Element

  if (loggedIn) {
    if (computerDialogOpen) {
      /* Render ComputerDialog if user is using a computer. */
      ui = <ComputerDialog />
    } else if (whiteboardDialogOpen) {
      /* Render WhiteboardDialog if user is using a whiteboard. */
      ui = <WhiteboardDialog />
    } else if (calenderDialogOpen) {
      ui = <CalenderDialog />
    } else {
      ui = (
        /* Render Chat or VideoConnectionDialog if no dialogs are opened. */
        <>
          <Chat />

          {/* Render VideoConnectionDialog if user is not connected to a webcam. */}
          {!videoConnected && <VideoConnectionDialog />}
        </>
      )
    }
  } else if (roomJoined) {
    /* Render LoginDialog if not logged in but selected a room. */
    ui = <LoginDialog />
  } else {
    /* Render RoomSelectionDialog if yet selected a room. */
    ui = <RoomSelectionDialog />
  }

  return (
    <AuthProvider>
      <Backdrop>
        {ui}
        {!computerDialogOpen && !whiteboardDialogOpen && <HelperButtonGroup />}
      </Backdrop>
    </AuthProvider>
  )
}

export default App
