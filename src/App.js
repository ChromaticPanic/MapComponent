import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import Map from './components/Map';
import { Grid, GridItem } from '@chakra-ui/react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Grid templateColumns="repeat(6, 1fr)" gap={6}>
        <GridItem colSpan={4} rowSpan={2}>
          <Map />
        </GridItem>
        <GridItem colSpan={2}>
          <Card />
        </GridItem>
        <GridItem colSpan={2}>
          <Card />
        </GridItem>
        <GridItem colSpan={2}>
          <Card />
        </GridItem>
        <GridItem colSpan={2}>
          <Card />
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
