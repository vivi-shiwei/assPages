import React from 'react';
import {
  Button
} from '@chakra-ui/core'
import { AiFillMessage } from 'react-icons/ai'
import { Label } from './style'

export const PhoneSigninButton = (props) => {
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
  )
}
