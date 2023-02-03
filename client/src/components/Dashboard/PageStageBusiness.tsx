import * as React from 'react'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import CardStepBusiness from './CardStepBusiness'

export default function PageStageBusiness(props) {
  const dataBusiness = props.dataBusiness
  console.log(dataBusiness)
  const [value, setValue] = React.useState('1')

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }
  return (
    <Box sx={{ width: '100%', height:"80vh", typography: 'body1' }}>
      <TabContext value={value}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: 'divider',
            background: '#13233A',
            borderRadius: '50px 50px 50px 5px',
          }}
        >
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab
              sx={{ fontFamily: 'light', fontSize: '11px' }}
              label="Framework Ideation Stage"
              value="1"
            />
            <Tab sx={{ fontFamily: 'light', fontSize: '11px' }} label="Get Feedback" value="2" />
            <Tab sx={{ fontFamily: 'light', fontSize: '11px' }} label="coming soon" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1" sx={{ height: '80vh', overflow: 'scroll' }}>
          {dataBusiness.bootstrapping.map((data) => {
            return (
              <CardStepBusiness
                stage={data.stage}
                data={data}
                setDetailStageId={props.setDetailStageId}
              />
            )
          })}
        </TabPanel>
        <TabPanel value="2" sx={{ height: '80vh', overflow: 'scroll' }}>
          {dataBusiness.preseed.map((data) => {
            return (
              <CardStepBusiness
                stage={data.stage}
                data={data}
                setDetailStageId={props.setDetailStageId}
              />
            )
          })}
        </TabPanel>
        <TabPanel value="3" sx={{ height: '80vh', overflow: 'scroll' }}>
          {dataBusiness.seed.map((data) => {
            return (
              <CardStepBusiness
                stage={data.stage}
                data={data}
                setDetailStageId={props.setDetailStageId}
              />
            )
          })}
        </TabPanel>
        <TabPanel value="4" sx={{ height: '80vh', overflow: 'scroll' }}>
          {dataBusiness.seriesa.map((data) => {
            return (
              <CardStepBusiness
                stage={data.stage}
                data={data}
                setDetailStageId={props.setDetailStageId}
              />
            )
          })}
        </TabPanel>
        <TabPanel value="5" sx={{ height: '80vh', overflow: 'scroll' }}>
          {dataBusiness.seriesb.map((data) => {
            return (
              <CardStepBusiness
                stage={data.stage}
                data={data}
                setDetailStageId={props.setDetailStageId}
              />
            )
          })}
        </TabPanel>
      </TabContext>
    </Box>
  )
}
