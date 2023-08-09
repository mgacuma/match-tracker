import { Flex, Menu, MenuButton, Button, Avatar, MenuList, MenuItem, MenuDivider, CircularProgress } from "@chakra-ui/react";
import { useAuth } from "../../Auth/AuthProvider";

export function UserMenu(){
    const { isAuthenticated, user, signOut, isLoading } = useAuth();

    return(<Flex alignItems='center'>
                <Menu closeOnSelect={false}>
                    <MenuButton color='black'
                        as={Button}
                        rounded='full'
                        variant='link'
                        cursor='pointer'>
                        <Avatar size='md' name={user.getUsername()} backgroundColor='gray.400'/>
                    </MenuButton>
                <MenuList color='black'>
                    <MenuItem>Saved Items</MenuItem>
                    <MenuDivider />
                    <MenuItem>Watching</MenuItem>
                    <MenuDivider />
                    <MenuItem>Settings</MenuItem>
                    {isAuthenticated && <div><MenuDivider/><MenuItem onClick={signOut} isDisabled={isLoading}> Log Out</MenuItem> </div>}
                </MenuList>
                </Menu>
            </Flex>
    )
}