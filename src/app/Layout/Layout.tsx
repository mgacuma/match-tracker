import { Container } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

export function Layout(){
    return(
        <Container maxW='100vw' background='black' display='flex' flexDir='column' textColor='white' p='0px' minH='100vh' >
            <Header />
            <Outlet />
            <Footer />
        </Container>
    )
}