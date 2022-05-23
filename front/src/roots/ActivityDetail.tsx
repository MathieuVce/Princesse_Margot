import * as React from 'react';
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import EventIcon from '@material-ui/icons/Event';
import PlaceIcon from '@material-ui/icons/Place';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const ActivityDetail: React.FunctionComponent = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Typography variant="h3" component="div">
        Atelier Top Chef
      </Typography>

      <Typography variant="subtitle1" gutterBottom component="div">
        Crée le 8 mars 2022 à 16h30 par Amélie Brunet
      </Typography>

      <Typography variant="body1" gutterBottom>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.
      </Typography>

      <Typography variant="body1" gutterBottom>
        <EventIcon />
        Mardi 12 juillet 2022 de 10h à 12h
      </Typography>

      <Typography variant="body1" gutterBottom>
        <PlaceIcon />
        Hôpital Robert Debré
      </Typography>

      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="9 participants" {...a11yProps(0)} />
            <Tab label="3 bénévoles" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <p>Jean Louis</p>
          <p>Jean Louis</p>
          <p>Jean Louis</p>
          <p>Jean Louis</p>
          <p>Jean Louis</p>
          <p>Jean Louis</p>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <p>Jean Louis</p>
          <p>Jean Louis</p>
          <p>Jean Louis</p>
        </TabPanel>

        <Stack spacing={4} direction="row">
          <Button variant="contained">Activité précédente</Button>
          <Button variant="contained">Activité suivante</Button>
        </Stack>
      </Box>
    </>
  );
};

export default ActivityDetail
