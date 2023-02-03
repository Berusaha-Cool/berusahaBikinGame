import React, { useState } from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Box, ButtonBase, TextField } from '@mui/material'

function BuildProduct() {
  const [expanded, setExpanded] = useState<string | false>('panel1')
  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false)
  }
  return (
    <>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0 }}>
            how to know your target perfectly?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The best option is to choose something familiar for which you have affinity and
            interest. In other words, the most profitable niches will be those you already know. For
            example, if you've always played sports, it might be a good idea to go into the business
            of selling sporting goods. For beginner affiliate marketers, the easiest way will be to
            enter the more mainstream or evergreen niches. We recommend starting with brands you
            know, potentially from the fashion, food, or beauty niche.
          </Typography>
          <Box
            sx={{
              display: 'flex',
              '& > :not(style)': { m: 1 },
            }}
          >
            <TextField
              id="outlined-textarea"
              label="Generate With AI"
              multiline
              placeholder="IoT, Tourism, etc."
              color="warning"
              rows={8}
              focused
              helperText="You can only generate AI 3 times in 1 week !"
            />
            <TextField
              id="outlined-multiline-static"
              label="Multiline"
              placeholder="Placeholder"
              multiline
              fullWidth
              rows={8}
            />
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0 }}>
            How to define your perfect businnes model ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The best way to validate that a problem exists is to actually insert yourself into the
            process and learn by doing. These tests lean toward solution building, but the idea is
            that you're doing tests without building anything, or building very little, to get
            clarity on the problem and the customer.
          </Typography>
          <Box
            sx={{
              display: 'flex',
              '& > :not(style)': { m: 1 },
            }}
          >
            <TextField
              id="outlined-textarea"
              label="Generate With AI"
              multiline
              placeholder="IoT, Tourism, etc."
              color="warning"
              rows={8}
              focused
              helperText="You can only generate AI 3 times in 1 week !"
            />
            <TextField
              id="outlined-multiline-static"
              label="Multiline"
              placeholder="Placeholder"
              multiline
              fullWidth
              rows={8}
            />
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0 }}>
            How to choose the right no-code stack ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            StartUp Solutions' mission is to shorten time to market and accelerate growth at early
            stage companies. Our boutique consulting firm guides entrepreneurs (startups) as they
            build scalable and fundable (VC-ready) products, methodologies and business processes.
          </Typography>
          <Box
            sx={{
              display: 'flex',
              '& > :not(style)': { m: 1 },
            }}
          >
            <TextField
              id="outlined-textarea"
              label="Generate With AI"
              multiline
              placeholder="IoT, Tourism, etc."
              color="warning"
              rows={8}
              focused
              helperText="You can only generate AI 3 times in 1 week !"
            />
            <TextField
              id="outlined-multiline-static"
              label="Multiline"
              placeholder="Placeholder"
              multiline
              fullWidth
              rows={8}
            />
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0 }}>
            How to build your MVP quickly ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            When creating something new, iteration describes the process of refining your idea or
            concept. The spirit of entrepreneurship urges us towards iterating in small steps
            towards “better” instead of hoping one large step gets us to “best.”
          </Typography>
          <Box
            sx={{
              display: 'flex',
              '& > :not(style)': { m: 1 },
            }}
          >
            <TextField
              id="outlined-textarea"
              label="Generate With AI"
              multiline
              placeholder="IoT, Tourism, etc."
              color="warning"
              rows={8}
              focused
              helperText="You can only generate AI 3 times in 1 week !"
            />
            <TextField
              id="outlined-multiline-static"
              label="Multiline"
              placeholder="Placeholder"
              multiline
              fullWidth
              rows={8}
            />
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0 }}>
            How to write a landing page that converts ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            1. How to validate an idea Define your goal. Just like any idea management-related
            activity, validation starts with defining your goals.
          </Typography>
          <Typography>
            2. Develop a hypothesis. After you've defined your goal for idea validation, it's time
            to develop a hypothesis based on that goal
          </Typography>
          <Typography>3. Experiment, revise, Validate and develop.</Typography>
          <Box
            sx={{
              display: 'flex',
              '& > :not(style)': { m: 1 },
            }}
          >
            <TextField
              id="outlined-textarea"
              label="Generate With AI"
              multiline
              placeholder="IoT, Tourism, etc."
              color="warning"
              rows={8}
              focused
              helperText="You can only generate AI 3 times in 1 week !"
            />
            <TextField
              id="outlined-multiline-static"
              label="Multiline"
              placeholder="Placeholder"
              multiline
              fullWidth
              rows={8}
            />
          </Box>
        </AccordionDetails>
      </Accordion>
    </>
  )
}

export default BuildProduct
