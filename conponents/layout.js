import React from 'react';
import {
    Box,
    Heading
} from '@chakra-ui/core'
import SchoolHeader from './schoolHeader'

const schoolConfig = {
    m: '0',
    top: '0',
    bg: "blue.50",
    left: '0',
    right: '0',
    width: 'full',
    height: 'full'
}
const layout = ({ children }) => {
    let config = schoolConfig
    return (
        < Box
            color='gray.800'
            bg='blue.50'
            borderColor='gray.300'
            placeholderColor='gray.400'>
            <SchoolHeader bg="blue.50" />
            {children}
        </Box >
    )
}

export default layout
