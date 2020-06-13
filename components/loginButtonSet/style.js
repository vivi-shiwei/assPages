import React from 'react'
import {
  Box,
  SimpleGrid
} from '@chakra-ui/core'

export const Container = (props) => {
  return (
    <SimpleGrid
      columns={1}
      spacing='16px'
      py='16px'
      w={{ base: '100%', sm: '340px' }}
      {...props}
    />
  )
}

export const Label = (props) => {
  return (
    <Box
      d='flex'
      flex='1 0 auto'
      justifyContent='center'
      mt='-1px'
      ml='8px'
      {...props}
    />
  )
}
