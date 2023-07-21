import { Flex, Menu, MenuButton, Button, Avatar, MenuList, MenuItem, MenuDivider } from "@chakra-ui/react";

export function UserMenu(){
    return(<Flex alignItems='center'>
                <Menu >
                    <MenuButton color='black'
                        as={Button}
                        rounded='full'
                        variant='link'
                        cursor='pointer'>
                        <Avatar size='md' backgroundColor='gray.400'/>
                    </MenuButton>
                <MenuList color='black'>
                    <MenuItem>Link 1</MenuItem>
                    <MenuDivider />
                    <MenuItem>Link 2</MenuItem>
                    <MenuDivider />
                    <MenuItem>Link 3</MenuItem>
                </MenuList>
                </Menu>
            </Flex>
    )
}