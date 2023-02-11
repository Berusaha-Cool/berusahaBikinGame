import CloseIcon from '@mui/icons-material/Close'
import Typewriter from 'typewriter-effect'
import SendIcon from '@mui/icons-material/Send'
import { Alert, Avatar, Box, Button, IconButton, TextField, Typography } from '@mui/material'

import { Stack } from '@mui/system'
import React, { useState, useEffect } from 'react'
import BotAvatar from '../../images/bot.png'

export default function FeedbackAI() {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState<string>('')
  const [dataAI, setDataAI] = useState<string>('')
  const [outputData, setOutputData] = useState<string>('')

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ question: value }),
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    await fetch(import.meta.env.FEEDBACK_URL, requestOptions)
      .then((response) => response.json())
      .then((json) => setDataAI(json))
  }

  return (
    <>
      <Box sx={{ paddingY: 10, display: 'flex', gap: 2 }}>
        <Avatar sx={{ width: '200px', height: '200px' }} src={BotAvatar} />

        <Box sx={{ padding: 5, borderRadius: '50px 50px 50px 0px', background: '#13233a' }}>
          <Typewriter
            options={{
              strings: dataAI,
              autoStart: true,
              loop: false,
            }}
          />
        </Box>
      </Box>
      <Box
        component="form"
        sx={{
          background: '#13233a',
          borderRadius: 5,
          padding: 2,
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          id="outlined-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
          sx={{ width: '90%' }}
          onInput={(e) => {
            setValue((e.target as HTMLInputElement).value)
          }}
        />
        <Button type="submit" variant="contained" color="primary" sx={{ padding: 2 }}>
          <SendIcon />
        </Button>
      </Box>
    </>
  )
}
