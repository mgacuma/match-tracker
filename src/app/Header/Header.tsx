import { NavToTop } from "./NavToTop/NavToTop";
import { UserMenu } from "./UserMenu/UserMenu";
import { SearchBar } from "./SearchBar/SearchBar";
import { AuthGroup } from "./AuthGroup/AuthGroup";
import { LogoBox } from "./LogoBox/LogoBox";
import { Flex, Hide, Spacer } from "@chakra-ui/react";
import { useAuth } from "../Auth/AuthProvider/AuthProvider";

export function Header (props: {}) {

    const { isAuthenticated } = useAuth();

    return(
        <Flex minWidth='max-content' h='96px' alignItems='center' gap='2' px='2.5%'>
            <LogoBox />
            <Spacer />
            <Hide breakpoint='(max-width: 640px)'>
                <Flex dir='row'  gap='12' alignItems='center'>
                    <SearchBar />
                    { !isAuthenticated && <AuthGroup /> }
                    { isAuthenticated && <UserMenu /> }
                </Flex>
            </Hide>
            <NavToTop />
        </Flex>
    )
}