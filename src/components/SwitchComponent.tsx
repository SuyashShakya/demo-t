import { Box, Button, Text } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";

const SwitchComponent = () => {
    const navigate = useNavigate()
    return (
        <Box display='flex' flexDir='column' justifyContent='center' alignItems='center' h='100vh' gap={5}>
            <Text fontWeight={500} fontSize={20}>Pick a component</Text>
            <Box display='flex' gap={5}>
                <Button onClick={() => navigate("/colors", { replace: false })}>Colors</Button>
                <Button onClick={() => navigate("/block", { replace: false })}>Block</Button>
                <Button onClick={() => navigate("/numbers", { replace: false })}>Numbers</Button>
            </Box>
        </Box>
    )
}

export default SwitchComponent