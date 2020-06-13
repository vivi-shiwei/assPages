import React from 'react'
import {
  Box
} from '@chakra-ui/core'
import NextLink from 'next/link'

const schoolCard = (props) => {
  return (
    <>
      <Box
        as='article'
        w='250px'
        h='180px'
        bg='white'
        d='inline-block'
        borderRadius='10px'
        position='relative'
        m='10px'
        shadow='2px 2px 6px 0px #b9b9b9'
      >
        <Box
          as='div'
          p='15px'
        >
          <Box as='div'>
            <Box
              as='h2'
              fontSize='20px'
              fontWeight='bold'
              d='flex'
            >
              {props.title}
            </Box>

          </Box>
        </Box>
      </Box>
    </>
  )
}

export default schoolCard
