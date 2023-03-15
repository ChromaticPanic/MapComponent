import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import { Grid, GridItem } from '@chakra-ui/react';
import { MapComponent } from './components';

function App() {
  return (
    <div className="App">
      <Grid templateColumns="repeat(6, 1fr)" gap={6}>
        <GridItem colSpan={4} rowSpan={2}>
          <MapComponent />
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
