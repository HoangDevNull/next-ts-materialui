import { useState } from 'react';
import { Button, Grid, Select, TextField, MenuItem, Typography, Tooltip, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import Head from 'next/head';
import Switch from 'components/Switch';
import { ToggleButtonGroup, ToggleButton } from 'components/ToggleButton';
import Alert from 'components/Alert';
import Layout from 'components/Layout/Primary';

import type { NextPageWithLayout } from 'next';

const Home: NextPageWithLayout = () => {
  const [age, setAge] = useState('');
  const handleChange = (event: any) => {
    setAge(event.target.value);
  };
  return (
    <div>
      <Head>
        <title>Artway</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid container spacing={3} direction="column" justifyContent="space-around" alignItems="center">
        <Typography variant="h1" component="h2" gutterBottom>
          h1. Heading
        </Typography>
        <Typography variant="h2" gutterBottom>
          h2. Heading
        </Typography>
        <Typography variant="h3" gutterBottom>
          h3. Heading
        </Typography>
        <Typography variant="h4" gutterBottom>
          h4. Heading
        </Typography>
        <Typography variant="h5" gutterBottom>
          h5. Heading
        </Typography>
        <Typography variant="h6" gutterBottom>
          h6. Heading
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        </Typography>
        <Typography variant="subtitle2" gutterBottom>
          subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        </Typography>
        <Typography variant="body1" gutterBottom>
          body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam
          beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti?
          Eum quasi quidem quibusdam.
        </Typography>
        <Typography variant="body2" gutterBottom>
          body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam
          beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti?
          Eum quasi quidem quibusdam.
        </Typography>
        <Typography variant="button" display="block" gutterBottom>
          button text
        </Typography>
        <Typography variant="caption" display="block" gutterBottom>
          caption text
        </Typography>
        <Typography variant="overline" display="block" gutterBottom>
          overline text
        </Typography>

        <Grid item style={{ display: 'flex', columnGap: 12 }}>
          <Button variant="contained">Default</Button>
          <Button variant="contained" color="primary">
            Primary
          </Button>
          <Button disabled startIcon={<DeleteIcon />} size="large" variant="contained" color="primary">
            large
          </Button>
          <Button startIcon={<DeleteIcon />} size="small" variant="contained" color="primary">
            100
          </Button>
          <Button variant="contained" color="secondary">
            Secondary
          </Button>
          <Button variant="contained" disabled>
            Disabled
          </Button>
          <Button variant="contained" color="primary" href="#contained-buttons">
            Link
          </Button>
          <Button variant="outlined">Default</Button>
          <Button variant="outlined">Primary</Button>
          <Button variant="outlined" color="secondary">
            Secondary
          </Button>
          <Button variant="contained" disabled>
            Disabled
          </Button>
          <Button variant="outlined" color="primary" href="#contained-buttons">
            Link
          </Button>
        </Grid>
      </Grid>

      <Grid item style={{ display: 'flex', flexWrap: 'wrap', columnGap: 12 }}>
        <TextField
          id="filled-margin-none"
          defaultValue="Default Value"
          helperText="Some important text"
          variant="outlined"
        />
        <TextField
          id="outlined-margin-dense"
          defaultValue="Default Value"
          helperText="Some important text"
          margin="dense"
          variant="outlined"
        />
        <TextField
          id="outlined-margin-normal"
          defaultValue="Default Value"
          helperText="Some important text"
          margin="normal"
          error
          variant="outlined"
        />
        <Select
          labelId="demo-customized-select-label"
          variant="outlined"
          id="demo-customized-select"
          MenuProps={{
            anchorOrigin: {
              vertical: 'bottom',
              horizontal: 'left',
            },
            getContentAnchorEl: null,
          }}
          value={age}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <Switch />
        <ToggleButtonGroup value="active">
          <ToggleButton value="active">Active</ToggleButton>
          <ToggleButton value="default">Default</ToggleButton>
        </ToggleButtonGroup>

        <Alert severity="error">Error message</Alert>

        <Tooltip arrow title="Delete">
          <Button>Tool tip</Button>
        </Tooltip>
      </Grid>
    </div>
  );
};

export default Home;

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
