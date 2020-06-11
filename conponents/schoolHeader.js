import React, { forwardRef, useState } from 'react'
import {
  Box,
  Flex,
  IconButton,
  useColorMode,
  Heading,
  ButtonGroup,
  Button,
  Menu,
  MenuButton,
  Avatar,
  MenuList,
  Text,
  MenuGroup,
  Link,
  MenuItem,
  MenuDivider,
  Stack,
  Tooltip
} from '@chakra-ui/core'
import NextLink from 'next/link'
import { AiOutlineLogout, AiOutlineDashboard, AiFillMessage } from 'react-icons/ai'
import { IoMdPerson, IoMdNotifications, IoMdSearch, IoMdHome } from 'react-icons/io'
import { MdDashboard } from 'react-icons/md'
import Container from './container'


import MyImage from "../static/QQ20200518181405.jpg"

const Logo = () => (
  <Heading as='h1' size='lg' letterSpacing='-.1rem'>
    <Box as='span' d={{ base: 'none', sm: 'inline' }}>
      SCHOOL
    </Box>
    <Box as='span' d={{ base: 'inline', sm: 'none' }}>
      SCH
    </Box>
  </Heading>
)

export const TopNavLink = forwardRef(({ href, ...props }, ref) => {
  return (
    <NextLink passHref href={href}>
      <Button
        ref={ref}
        as='a'
        flexDirection={{ base: 'column', md: 'row' }}
        align='center'
        variant='link'
        fontSize={{ base: 'xs', md: 'lg' }}
        px={{ base: 1, sm: 4 }}
      >
        <Box m={0} color='currentColor' ml={{ base: 0, md: -1 }} mr={{ base: 0, md: 1 }}>
          {props.icon}
        </Box>
        {props.children}
      </Button>
    </NextLink>
  )
})

const Header = props => {

  return (
    <Box
      pos='fixed'
      as='header'
      top='0'
      zIndex='4'
      left='0'
      right='0'
      borderBottomWidth='1px'
      width='full'
      {...props}
    >
      <Container h='4rem' px={2}>
        <Flex size='100%' px={{ base: 0, sm: 2, md: 4 }} align='center' justify='space-between'>
          <Box as='a' href='#' onClick={e => e.preventDefault()}>
            <Logo />
          </Box>

          <ButtonGroup>
            <TopNavLink
              href='#'
              icon={<IoMdPerson size='1.5em' />}
            >
              首頁
            </TopNavLink>
            <TopNavLink
              href='#'
              icon={<MdDashboard size='1.5em' />}
            >
              學校專頁
            </TopNavLink>
          </ButtonGroup>

          <Stack align='center' isInline spacing='2'>

            <Menu placement='bottom-end'>
              <MenuButton as='div'>
                <Avatar src={MyImage} size='md' cursor='pointer' />
              </MenuButton>
              <MenuList w='280px'>
                <NextLink href='/' passHref>
                  <MenuItem as='a'>
                    <Box as={IoMdHome} mr='4px' />
                    <span>返回 Macau School</span>
                  </MenuItem>
                </NextLink>
                <Link href='/api/auth/logout'>
                  <MenuItem>
                    <Box as={AiOutlineLogout} mr='4px' />
                    <span>登出</span>
                  </MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </Stack>
        </Flex>
      </Container>
    </Box>
  )
}

export default Header
