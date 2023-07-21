import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Card, Container, Heading, Link } from "@chakra-ui/react";
import { Link as RouterLink, useNavigate } from 'react-router-dom'

export function NavTier(){
    const navigate = useNavigate();
    
    return(
        <Box display='flex' flexDir='row' gap='24px' mb='48px' >
            <Button p='12px' borderRadius='16px' onClick={() => navigate(-1)}>Back</Button>
            <Card  p='12px' borderRadius='16px'>
                <Breadcrumb>
                <BreadcrumbItem>
                        <BreadcrumbLink as={RouterLink} to='..'>Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <BreadcrumbLink>Tournament</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
            </Card>
        </Box>
    )
}