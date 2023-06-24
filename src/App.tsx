import { ChakraProvider } from "@chakra-ui/react";
import Colors from "./components/Colors/Colors";

const App = () => {
  return (
    <ChakraProvider>
      <Colors/>
    </ChakraProvider>
  );
}

export default App;
