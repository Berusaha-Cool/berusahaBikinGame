import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import phaserGame from '../PhaserGame'
import Game from '../scenes/Game'

interface CalenderState {
  calenderDialogOpen: boolean
  calenderId: null | string
  calenderUrl: null | string
  urls: Map<string, string>
}

const initialState: CalenderState = {
  calenderDialogOpen: false,
  calenderId: null,
  calenderUrl: null,
  urls: new Map(),
}

export const calenderSlice = createSlice({
  name: 'calender',
  initialState,
  reducers: {
    openCalenderDialog: (state, action: PayloadAction<string>) => {
      state.calenderDialogOpen = true
      state.calenderId = action.payload
      const url = state.urls.get(action.payload)
      if (url) state.calenderUrl = url
      const game = phaserGame.scene.keys.game as Game
      game.disableKeys()
    },
    closeCalenderDialog: (state) => {
      const game = phaserGame.scene.keys.game as Game
      game.enableKeys()
      game.network.disconnectFromCalender(state.calenderId!)
      state.calenderDialogOpen = false
      state.calenderId = null
      state.calenderUrl = null
    },
    setCalenderUrls: (state, action: PayloadAction<{ calenderId: string; roomId: string }>) => {
      state.urls.set(
        action.payload.calenderId,
        // `http://localhost:5173/?providers=indexeddb,webrtc&room=${action.payload.roomId}`
        `http://localhost:4200/AFFiNE/a3007697-7fed-5671-95d8-1159c886a5b4`
      ),
      console.log(action.payload.roomId);
    },
  },
})

export const { openCalenderDialog, closeCalenderDialog, setCalenderUrls } = calenderSlice.actions

export default calenderSlice.reducer
