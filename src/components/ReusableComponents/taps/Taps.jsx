
import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' ,display:"flex",flexDirection:"column", alignItems:"center"}}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="DataBase and Cloud computing" value="1" />
            <Tab label="Programming Languages" value="2" />
            <Tab label="DataScience" value="3" />
            <Tab label="Web Development" value="4" />
            <Tab label="Software Testing And Automation" value="5" />
          </TabList>
        </Box>
        <TabPanel value="1">DataBase and Cloud computing</TabPanel>
        <TabPanel value="2">Programming Languages</TabPanel>
        <TabPanel value="3">DataScience</TabPanel>
        <TabPanel value="4">Web Development </TabPanel>
        <TabPanel value="5">Software Testing And Automation </TabPanel>
      </TabContext>
    </Box>
  );
}
