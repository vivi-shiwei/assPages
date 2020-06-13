import React from 'react';
import {
  Button
} from '@chakra-ui/core'
import { AiFillGoogleSquare } from 'react-icons/ai'
import { Label } from './style'

export const GoogleSigninButton = (props) => {
  const { href } = props

  return (
    <Button
      as='a'
      href={href}
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
  )
}
