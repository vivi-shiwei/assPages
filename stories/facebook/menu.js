import React from 'react'
import {
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Button,
    Box,
    Flex,
    Icon
} from '@chakra-ui/core'

const menu = () => {
    return (
        <Menu>
            {({ isOpen }) => (
                <React.Fragment>
                    <MenuButton isActive={isOpen} as={Button} bg="white">
                        <Icon name='chevron-down'>
                            {isOpen}</Icon>
                    </MenuButton>
                    <MenuList>
                        <MenuItem>編輯</MenuItem>
                        <MenuItem onClick={() => alert("確定刪除嗎")}>刪除</MenuItem>
                    </MenuList>
                </React.Fragment>
            )}
        </Menu>
    )
}
export default menu