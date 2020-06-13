import React from 'react';
import {
    Box,
    Heading
} from '@chakra-ui/core'
import SchoolHeader from './schoolHeader'

const layout = props => (
    <Box>
        <SchoolHeader bg="blue.50" />
        <Box
            // pos='fixed'
            m='0'
            pt={{ base: '90px', sm: '100px' }}
            top='0'
            bg="blue.50"
            left='0'
            right='0'
            width='full'
            height='full'
            {...props} />
    </Box>
)

export default layout
