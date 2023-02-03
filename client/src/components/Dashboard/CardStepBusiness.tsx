import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import * as React from 'react'
import ProgressBars from '../ProgressBars'

const bull = (
  <Box component="span" sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
    •
  </Box>
)

const card = <React.Fragment></React.Fragment>

export default function CardStepBusiness(props) {
  const data = props.data
  console.log(data)
  const handleCLick = () => {
    props.setDetailStageId(data.id)
  }
  return (
    <Box
      sx={{
        minWidth: 275,
        marginBottom: '10px',
        border: '2px solid #AC9F8C',
        borderRadius: '20px',
      }}
    >
      <Card variant="outlined" sx={{ background: '#13233A', borderRadius: '20px' }}>
        <CardContent>
          <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
            {data.header}
          </Typography>

          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {data.desc}
          </Typography>
          <ProgressBars progress={data.progess} />
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
          <Button size="small" onClick={handleCLick}>
            Open
          </Button>
        </CardActions>
      </Card>
    </Box>
  )
}
