import logo from "./logo.svg";
import "./App.css";
import { MapDemoContainer } from "./components";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
    return (
        <ChakraProvider>
            <div className="App">
                <MapDemoContainer />
            </div>
        </ChakraProvider>
    );
}

export default App;
