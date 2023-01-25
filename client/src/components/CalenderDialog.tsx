import React from 'react'
import styled from 'styled-components'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'

import { useAppSelector, useAppDispatch } from '../hooks'
import { closeCalenderDialog } from '../stores/CalenderStore'

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  padding: 16px 180px 16px 16px;
`
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: #222639;
  border-radius: 16px;
  padding: 5px;
  color: #eee;
  position: relative;
  display: flex;
  flex-direction: column;

  .close {
    position: absolute;
    top: 16px;
    right: 16px;
  }
`

const CalenderdWrapper = styled.div`
  flex: 1;
  border-radius: 25px;
  overflow: hidden;
  margin-right: 50px;

  iframe {
    width: 100%;
    height: 100%;
    background: #fff;
  }
`

export default function CalenderDialog() {
  const calenderUrl = useAppSelector((state) => state.calender.calenderUrl)
  const dispatch = useAppDispatch()

  return (
    <Backdrop>
      <Wrapper>
        <IconButton
          aria-label="close dialog"
          className="close"
          onClick={() => dispatch(closeCalenderDialog())}
        >
          <CloseIcon />
        </IconButton>
        {calenderUrl && (
          <CalenderdWrapper>
            <iframe title="Calender" src={calenderUrl} />
          </CalenderdWrapper>
        )}
      </Wrapper>
    </Backdrop>
  )
}
