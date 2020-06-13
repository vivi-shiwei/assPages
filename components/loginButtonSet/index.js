import React from 'react';
import { Container, Label } from './style'
import {
  Button,
  Input,
  Select,
  Box,
} from '@chakra-ui/core'
import { AiFillGoogleSquare, AiFillMessage } from 'react-icons/ai'

export const LoginButton = ({ redirectPath }) => {
  return (
    <Container>
      <Button
        as='a'
        href="/"
        size='lg'
        w='100%'
        variantColor='teal'
        variant='solid'
        borderRadius='9999px'
        color='#fff'
        background='rgb(234, 67, 53)'
        _hover={{
          background: 'rgb(234, 67, 53)'
        }}
      >
        <AiFillGoogleSquare size='24px' />
        <Label>
          使用 Google 登入
          </Label>
      </Button>
      <Button
        as='a'
        href="/"
        size='lg'
        w='100%'
        variantColor='teal'
        variant='solid'
        borderRadius='9999px'
        color='#fff'
        background='rgb(59, 89, 152)'
        _hover={{
          background: 'rgb(59, 89, 152)'
        }}
      >
        <AiFillMessage size='24px' />
        <Label>
          使用電話短訊 SMS 登入
      </Label>
      </Button>
    </Container>
  )
}
export const BriefButton = ({ redirectPath }) => {
  return (
    <>
      <Input type="tel" placeholder="123456" mt={3} borderRadius='4px' fontSize="5xl" w={{ base: "100%", sm: '410px' }} h />
      <Container>
        <Box d='flex' flexWrap='wrap' justifyContent='center'
          pt={2}>
          <Button
            as='a'
            href="/"
            size='lg'
            w='100%'
            variantColor='teal'
            variant='solid'
            borderRadius='9999px'
            color='#fff'
            background='rgb(179, 198, 255)'
            p={8}
          >
            <Box
              fontSize="2xl"
              d='flex'
              flex='1 0 auto'
              justifyContent='center'
              mt='-1px'
              ml='8px'
            >確定</Box>
          </Button>
        </Box>
      </Container>
    </>
  )
}
export const PhoneButton = ({ redirectPath }) => {
  return (
    <>
      <Box display={{ base: "block", sm: 'flex' }} w={{ base: "100%", sm: '493px' }}>
        <Select placeholder="澳門(+853)" fontSize="xl" h="60px"
          w={{ base: '100%', sm: '170px' }}
          borderRadius='10px'>
          <option value="中國(+86)">中國(+86)</option>
        </Select>
        <Input type="tel" placeholder="輸出你的手機號碼" borderRadius='10px' fontSize="xl" h="60px" ml={{ base: "0", sm: '3px' }} mt={{ base: "6px", sm: "0" }}
          w={{ base: '100%', sm: '280px' }} />
      </Box>
      <Container>
        <Box d='flex' flexWrap='wrap' justifyContent='center'
          pt={2}>
          <Button
            as='a'
            href="/"
            size='lg'
            w='100%'
            variantColor='teal'
            variant='solid'
            borderRadius='9999px'
            color='#fff'
            background='rgb(179, 198, 255)'
            p={8}
          >
            <Box
              fontSize="2xl"
              d='flex'
              flex='1 0 auto'
              justifyContent='center'
              mt='-1px'
              ml='8px'
            >發送</Box>
          </Button>
        </Box>
        <Box d='flex' flexWrap='wrap' justifyContent='center'
          pt={2}>
          <Button
            as='a'
            href="/"
            size='lg'
            w='100%'
            variantColor='teal'
            variant='solid'
            borderRadius='9999px'
            color='#000'
            background='#fff'
            border="1px"
            p={8}
            borderColor="#ccd0d5"
          >
            <Box
              fontSize="2xl"
              d='flex'
              flex='1 0 auto'
              justifyContent='center'
              mt='-1px'
              ml='8px'
            >返回</Box>
          </Button>
        </Box>
      </Container>
    </>
  )
}