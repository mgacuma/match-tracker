import { Flex, Menu, MenuButton, Button, Avatar, MenuList, MenuItem, MenuDivider, CircularProgress } from "@chakra-ui/react";
import { useAuth } from "../../Auth/AuthProvider";

export function UserMenu(){
    const { isAuthenticated, user, signOut, isLoading } = useAuth();

    async function onLogout(){
        await signOut()
        window.location.reload();
    }

    return(<Flex alignItems='center'>
                <Menu closeOnSelect={false}>
                    <MenuButton color='black'
                        as={Button}
                        rounded='full'
                        variant='link'
                        cursor='pointer'>
                        <Avatar size='md' name={user.getUsername()} backgroundColor='gray.400'/>
                    </MenuButton>
                <MenuList color='black' defaultValue={'none'}>
                    <MenuItem>Saved Items</MenuItem>
                    <MenuDivider />
                    <MenuItem>Watching</MenuItem>
                    <MenuDivider />
                    <MenuItem>Settings</MenuItem>
                    {isAuthenticated && <div><MenuDivider/><MenuItem onClick={onLogout} isDisabled={isLoading}> Log Out</MenuItem> </div>}
                </MenuList>
                </Menu>
            </Flex>
    )
}