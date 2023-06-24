import { Box } from "@chakra-ui/react";
import BackImage from '../assets/endless-constellation.svg'

const Block = () => {
  return (
    <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="100vw"
        height="100vh"
        backgroundImage={BackImage}
    >
        <Box
            width={{ base: "100%", md: "500px" }}
            height="300px"
            backgroundColor="white"
        />
    </Box>
  );
};

export default Block;