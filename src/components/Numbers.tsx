import { Box, Text } from "@chakra-ui/react";

const numbers = Array.from({ length: 100 }, (_, index) => index + 1);

const Numbers = () => {
    return (
        <Box p={5} display='flex' flexDir='column' justifyContent='center' alignItems='center'>
            {numbers?.map((item) => <Text> {item % 3 === 0 && item % 5 === 0 ? "FizzBuzz" : item % 3 === 0 ? 'Fizz' : item % 5 === 0 ? 'Buzz' : item  }</Text>)}
        </Box>
    )
}

export default Numbers