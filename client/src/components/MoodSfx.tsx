import { Box } from '@mui/system'
import AudioPlayer from 'react-h5-audio-player'
import React, { useState, useEffect } from 'react'
import ParkIcon from '@mui/icons-material/Park'
import ThunderstormIcon from '@mui/icons-material/Thunderstorm'
import StorefrontIcon from '@mui/icons-material/Storefront'
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment'
import SailingIcon from '@mui/icons-material/Sailing'

import ReactAudioPlayer from 'react-audio-player'
// import useSound from 'use-sound'
import { IconButton, Slider, Stack } from '@mui/material'
import { VolumeDown, VolumeUp } from '@mui/icons-material'

// sfx
import rainySfx from '../sounds/light-rain-109591.mp3'
import windTreeSfx from '../sounds/wind-in-trees-117477.mp3'
import cafeSfx from '../sounds/busy-restaurant-dining-room-ambience-128466.mp3'
import fireWoodSfx from '../sounds/bonfire-hq-6991.mp3'
import oceanSfx from '../sounds/sandy-beach-calm-waves-water-nature-sounds-8052.mp3'

function MoodSfx() {
  const [activeRainy, setActiveRainy] = useState(false)
  const [activeWind, setActiveWind] = useState(false)
  const [activeCafe, setActiveCafe] = useState(false)
  const [activeFireWood, setActiveFireWood] = useState(false)
  const [activeOcean, setActiveOcean] = useState(false)
  const [value, setValue] = useState<number>(5)
  const [volume, setVolume] = useState<number>(0.5)

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number)
  }

  useEffect(() => {
    setVolume(value / 10)
    console.log(volume)
  }, [value])

  return (
    <>
      <Box sx={{ display: 'flex', gap: 3 }}>
        {activeRainy && (
          <Box sx={{ display: 'none' }}>
            <ReactAudioPlayer src={rainySfx} autoPlay volume={volume} loop={true} />
          </Box>
        )}
        {activeWind && (
          <Box sx={{ display: 'none' }}>
            <ReactAudioPlayer src={windTreeSfx} autoPlay volume={volume} loop={true} />
          </Box>
        )}
        {activeCafe && (
          <Box sx={{ display: 'none' }}>
            <ReactAudioPlayer src={cafeSfx} autoPlay volume={volume} loop={true} />
          </Box>
        )}
        {activeFireWood && (
          <Box sx={{ display: 'none' }}>
            <ReactAudioPlayer src={fireWoodSfx} autoPlay volume={volume} loop={true} />
          </Box>
        )}
        {activeOcean && (
          <Box sx={{ display: 'none' }}>
            <ReactAudioPlayer src={oceanSfx} autoPlay volume={volume} loop={true} />
          </Box>
        )}

        {/* button */}
        {activeWind ? (
          <IconButton onClick={() => setActiveWind(!activeWind)} sx={{ color: '#42eacb' }}>
            <ParkIcon />
          </IconButton>
        ) : (
          <IconButton onClick={() => setActiveWind(!activeWind)} sx={{ color: 'white' }}>
            <ParkIcon />
          </IconButton>
        )}

        {activeRainy ? (
          <IconButton onClick={() => setActiveRainy(!activeRainy)} sx={{ color: '#42eacb' }}>
            <ThunderstormIcon />
          </IconButton>
        ) : (
          <IconButton onClick={() => setActiveRainy(!activeRainy)} sx={{ color: 'white' }}>
            <ThunderstormIcon />
          </IconButton>
        )}
        {activeCafe ? (
          <IconButton onClick={() => setActiveCafe(!activeCafe)} sx={{ color: '#42eacb' }}>
            <StorefrontIcon />
          </IconButton>
        ) : (
          <IconButton onClick={() => setActiveCafe(!activeCafe)} sx={{ color: 'white' }}>
            <StorefrontIcon />
          </IconButton>
        )}
        {activeFireWood ? (
          <IconButton onClick={() => setActiveFireWood(!activeFireWood)} sx={{ color: '#42eacb' }}>
            <LocalFireDepartmentIcon />
          </IconButton>
        ) : (
          <IconButton onClick={() => setActiveFireWood(!activeFireWood)} sx={{ color: 'white' }}>
            <LocalFireDepartmentIcon />
          </IconButton>
        )}
        {activeOcean ? (
          <IconButton onClick={() => setActiveOcean(!activeOcean)} sx={{ color: '#42eacb' }}>
            <SailingIcon />
          </IconButton>
        ) : (
          <IconButton onClick={() => setActiveOcean(!activeOcean)} sx={{ color: 'white' }}>
            <SailingIcon />
          </IconButton>
        )}
      </Box>
      <Box sx={{ width: 200 }}>
        <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
          <VolumeDown />
          <Slider min={0} max={10} aria-label="Volume" value={value} onChange={handleChange} />
          <VolumeUp />
        </Stack>
      </Box>
    </>
  )
}

export default MoodSfx
