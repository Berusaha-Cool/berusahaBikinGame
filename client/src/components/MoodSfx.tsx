import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment'
import ParkIcon from '@mui/icons-material/Park'
import SailingIcon from '@mui/icons-material/Sailing'
import StorefrontIcon from '@mui/icons-material/Storefront'
import ThunderstormIcon from '@mui/icons-material/Thunderstorm'
import { Box } from '@mui/system'
import { useEffect, useState } from 'react'
import AudioPlayer from 'react-h5-audio-player'

// import useSound from 'use-sound'
import { IconButton } from '@mui/material'

// sfx

function MoodSfx() {
  const [activeRainy, setActiveRainy] = useState(false)
  const [activeWind, setActiveWind] = useState(false)
  const [activeCafe, setActiveCafe] = useState(false)
  const [activeFireWood, setActiveFireWood] = useState(false)
  const [activeOcean, setActiveOcean] = useState(false)

  return (
    <>
      <Box sx={{ display: 'flex', gap: 3 }}>
        {activeRainy && (
          <Box sx={{ display: 'none' }}>
            <AudioPlayer
              autoPlay
              volume={0.6}
              loop={true}
              src="https://drive.google.com/uc?id=11aWDzCjOJAwJGEvRhowX6QYxCVh6Xkqb&export=download"
            />
          </Box>
        )}
        {activeWind && (
          <Box sx={{ display: 'none' }}>
            <AudioPlayer
              src="https://drive.google.com/uc?id=10OzdfWl5JUxbL_Qp0U-VP0jVDsp3RTXv&export=donwload"
              autoPlay
              volume={0.6}
              loop={true}
            />
          </Box>
        )}
        {activeCafe && (
          <Box sx={{ display: 'none' }}>
            <AudioPlayer
              src="https://drive.google.com/uc?id=1qv3iYQ6VN2H3nlXmv90OvzDVAYid0HFM&export=download"
              autoPlay
              volume={0.6}
              loop={true}
            />
          </Box>
        )}
        {activeFireWood && (
          <Box sx={{ display: 'none' }}>
            <AudioPlayer
              src="https://drive.google.com/uc?id=1kJRNL0YWwT4-mOyxmJKTqqO2FcWsq3Fo&export=download"
              autoPlay
              volume={0.6}
              loop={true}
            />
          </Box>
        )}
        {activeOcean && (
          <Box sx={{ display: 'none' }}>
            <AudioPlayer
              src="https://drive.google.com/uc?id=1dxL6oiyLczzyQliq3NVMzYY3fmqLOTFn&export=download"
              autoPlay
              volume={0.6}
              loop={true}
            />
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
    </>
  )
}

export default MoodSfx
