import { Box } from '@mui/material'
import React, { useState } from 'react'

import BuildProduct from './StageQuestion/BuildProduct'
import Distribution from './StageQuestion/Distribution'
import ValidateIdea from './StageQuestion/ValidateIdea'
export default function DetailCard(props) {
  const data = props.data
  const [expanded, setExpanded] = useState<string | false>('panel1')
  const [savedData, setSaveData] = useState(false)
  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false)
  }

  console.log(data)
  return (
    <Box sx={{ background: 'none' }}>
      {data.id === 0 && <ValidateIdea />}
      {data.id === 1 && <BuildProduct />}
      {data.id === 2 && <Distribution />}
    </Box>
  )
}
