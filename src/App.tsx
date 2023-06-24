import { ChakraProvider } from "@chakra-ui/react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Block from "./components/Block";
import Colors from "./components/Colors/Colors";
import Numbers from "./components/Numbers";
import SwitchComponent from "./components/SwitchComponent";

const App = () => {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<SwitchComponent />} />
          <Route path="/colors" element={<Colors />} />
          <Route path="/block" element={<Block />} />
          <Route path="/numbers" element={<Numbers />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
