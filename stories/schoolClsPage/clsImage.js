import React from 'react';
import { Box,Tooltip } from '@chakra-ui/core'

const ClsImage = (props) => {
    return (
        <Box as='section' maxW='94%' mt='20px' mb='20px' d='inline-block'>
            <Box as='div' float='right' position='relative' className='test'>
                <Box
                    as='a'
                    border='1px solid #718096'
                    p='7px 20px'
                    borderRadius='30px'
                    fontSize='13px'
                    d='block'
                    cursor='pointer'
                    position='relative'
                    zIndex='2'
                    color='#718096'
                    background='#ebf8ff'
                >
                    <span>{props.title}</span>
                </Box>
            </Box>
            <Box as='div' overflow='hidden'>
                <Box as='div' overflow='hidden' whiteSpace='nowrap' pr={4}>
                    {props.children}
                </Box>
            </Box>
        </Box>
    )
}

export default ClsImage
