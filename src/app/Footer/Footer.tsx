import { Container, Text } from "@chakra-ui/react"


export function Footer () {

    return(
        <Container maxW='100%' height='108px' display='flex' justifyContent='center' alignItems='center' bottom={0}>
            <Text fontFamily='sans-serif' color='gray.500'>Made w/ ❤️, <a href='https://github.com/mgacuma'>@mgacuma in SF</a> </Text>
        </Container>
    )
}